import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import { ContentContainer } from './HomePageStyles';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateData } from '../../ReduxParts/actions/apiCall';
import { StyledLi, StyledUl, ItemName, ItemPrice, StyledButton, StyledForm } from './HomePageStyles';
import { updateNumOfItems } from '../../ReduxParts/actions/updateNumOfItems';
import { addToCart } from '../../ReduxParts/actions/cartActions';
import axios from 'axios';

const Home = () => {
    const dispatch = useDispatch();
    const [elements, setElements] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [selectedItemIndex, setSelectedItemIndex] = useState(null)
    const numOfItems = useSelector((state) => state.numOfItems.numOfItems)

    const handleButtonClick = (index) => {
        setSelectedItemIndex(index);
    };

    const handleIncrement = (toAdd) => {
        const newValue = numOfItems + toAdd;
        if (newValue <= 0) {
            dispatch(updateNumOfItems(0))
        }
        else {
            dispatch(updateNumOfItems(newValue));
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const selectedItem = elements[selectedItemIndex];
        const itemPrice = parseFloat(selectedItem.price);
        const totalPrice = itemPrice * parseInt(quantity, 10);
        dispatch(addToCart({ ...selectedItem, totalPrice }, parseInt(quantity, 10)));
        setSelectedItemIndex(null);
        setQuantity(1);
    };

    useEffect(() => {
        const fetchData = () => {
            axios
                .get('https://fakestoreapi.com/products')
                .then((response) => {
                    const data = response.data;
                    setElements(data);
                    dispatch(updateData(data));
                })
                .catch((error) => {
                    console.error("Error:", error);
                    setElements([]);
                    dispatch(updateData([]));
                });
        };

        fetchData();
    },);
    ;
    return (
        <div>
            <NavigationBar />
            <ContentContainer>
                <StyledUl>
                    {elements.map((element, index) => (
                        <StyledLi key={element.title}>
                            <ItemName>{element.title}</ItemName>
                            <ItemPrice>{element.price}</ItemPrice>
                            <StyledButton onClick={() => handleButtonClick(index)}>
                                Add to Cart
                            </StyledButton>
                            <StyledForm className={selectedItemIndex === index ? 'visible' : ''} onSubmit={handleFormSubmit}>
                                <label>
                                    Quantity:
                                    <input
                                        type="number"
                                        value={quantity}
                                        onChange={(e) => {
                                            const newValue = Math.max(parseInt(e.target.value), 0);
                                            setQuantity(newValue);
                                        }}
                                        min="1"
                                    />
                                </label>
                                <button type="submit" onClick={() => handleIncrement(parseInt(quantity, 10))}>Add</button>
                            </StyledForm>
                        </StyledLi>
                    ))}
                </StyledUl>
            </ContentContainer>
        </div>
    );
};

export default Home;