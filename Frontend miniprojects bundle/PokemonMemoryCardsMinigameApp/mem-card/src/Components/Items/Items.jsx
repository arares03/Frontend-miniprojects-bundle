import React from 'react'
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import "./Items.css"
export default function Items({ myscore, setMyScore, hs, setHs }) {

    function shuffle(array) {
        let len = array.length,
            currentIndex;
        for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {
            let randIndex = Math.floor(Math.random() * (currentIndex + 1));
            var temp = array[currentIndex];
            array[currentIndex] = array[randIndex];
            array[randIndex] = temp;
        }
        return [...array]
    }

    const [data, setData] = useState([]);
    const url = "https://pokeapi.co/api/v2/pokemon/";

    const showPoke = () => {
        axios.get(url)
            .then((res) => {
                const filteredUrls = res.data.results.map(item => item.url)
                const fetchIndividualUrls = [];
                filteredUrls.forEach(filteredUrl => {
                    fetchIndividualUrls.push(axios.get(filteredUrl));
                });

                Promise.all(fetchIndividualUrls).then(
                    results => {
                        const resultsArray = results.map(item => item.data.sprites.front_default);

                        const newData = res.data.results.map((item, index) => ({
                            ...item,
                            imageData: resultsArray[index],
                            clicked: false
                        }));
                        setData(shuffle(newData));
                    }
                )
            }
            )
    }

    useEffect(() => {
        showPoke();
        console.log(data);
    }, []);
    function resetGame() {
        if (myscore > hs) {
            setHs(myscore);
            if (myscore === 20) {
                alert('you won!');
            }
        }
        setMyScore(0);
        data.forEach(element => {
            element.clicked = false;
        });
    }

    const handleLiClick = (name) => {
        const newData = shuffle(data);
        setData(newData);
        data.forEach(element => {
            if (element.name === name) {
                if (element.clicked) {
                    resetGame();
                }
                else {
                    element.clicked = true;
                    setMyScore(myscore + 1);
                }
            }
        });
    }

    return (
        <div>
            <ul>
                {data.map((pokemon, index) => (
                    <li className="card gradient-border-pseudo" key={pokemon.name} onClick={() => handleLiClick(pokemon.name)}>
                        <h1>{pokemon.name.toUpperCase()} </h1>
                        <img src={pokemon.imageData} alt="" />
                        <p>Some lorem ipsum about this pokemon</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
