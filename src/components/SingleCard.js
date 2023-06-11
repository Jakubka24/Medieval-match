import React from "react";
import "../singleCard.css"
import {fadeIn} from "../variants";
import {motion} from "framer-motion";

const SingleCard = ({card,handleChoice, flipped,disabled}) => {

    const handleClick = () => {
        if (!disabled ){
            handleChoice(card)
    }}


    return (
    <motion.div
        variants={fadeIn('up',0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}
        className="card">
        <div className={flipped ? "flipped" : ""}>
            <img className="front" src={card.src} alt = "card front"/>
            <img
                onClick={handleClick}
                className="back"
                src={"images/sword.jpg"} alt = "card back"/>
        </div>
    </motion.div>
        )
}

export default SingleCard 