import { useState } from "react"
import image from "../images/emu.jpg"
import SingleCard from "./SingleCard"

const Card = ({cards}) => {

    const result = cards.map((card,index) => {
    return (
        <div 
        key={card.id}
        className="">   
        <SingleCard card= {card}/>
    </div>
    )

    })


    return (result)
}

export default Card 


