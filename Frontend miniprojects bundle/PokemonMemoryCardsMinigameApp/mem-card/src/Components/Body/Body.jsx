import React from "react"
import './Body.css'
import Scoreboard from "../Scoreboard/Scoreboard"
import Items from "../Items/Items"
import { useState } from "react"

const Body = () => {
    const [myscore, setMyScore] = useState(0);
    const [hs, setHs] = useState(0);
    console.log('render');
    return (
        <div className="body">
            <Scoreboard score={myscore} hs={hs} />
            <Items myscore={myscore} setMyScore={setMyScore} hs={hs} setHs={setHs} />
        </div>
    )
}

export default Body