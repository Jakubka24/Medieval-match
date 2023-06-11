import React, {useEffect, useState} from "react"
import SingleCard from "../components/SingleCard"
import "../App.css"
import {motion} from "framer-motion";
import {fadeIn,hidden} from "../variants";


const Main = ({start,pause}) => {

    const cardImages = [
        {src:"images/lab.jpg", matched:false},
        {src:"images/knight_2.jpg", matched:false},
        {src:"images/king.jpg", matched:false},
        {src:"images/princess.jpg", matched:false},
        {src:"images/dragon.jpg", matched:false},
        {src:"images/wizard.jpg", matched:false},
        {src:"images/castle_2.jpg", matched:false},
        {src:"images/warrior.jpg", matched:false},
        {src:"images/old_king.jpg", matched:false},
    ]


    const [cards,setCards] = useState([]);
    const [turns,setTurns] = useState(null);
    const [choiceOne,setChoiceOne] = useState(null);
    const [choiceTwo,setChoiceTwo] = useState(null);
    const [disabled,setDisabled] = useState(false);
    const [view,setView] = useState('');
    const [header,setHeader] = useState('');
    const [counter,setCounter] = useState('');
    const [correctMatches,setCorrectMatches] = useState(null);

    const [timer,setTimer] = useState(false)

    const handleClick = () => {
        const shuffleCards = [...cardImages, ...cardImages,]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({...card, id:Math.round(Math.random() * 100000000) }));


        setTimer(true);
        setCounter('Moves: ');
        setView('hide');
        setHeader('Match the cards');
        setChoiceOne(null);
        setChoiceTwo(null);
        setCards(shuffleCards);
        setTurns(0);
        start()
    }

    // handle a choice
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    //compare 2 selected cards
    useEffect(() => {

        if (choiceOne && choiceTwo) {
            setDisabled(true)
            if (choiceOne.src === choiceTwo.src) {
                setCards(prevCards => {
                    setCorrectMatches(correctMatches + 1)
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src) {
                            return {...card, matched: true}
                        }
                        else {
                            return card
                        }
                    })})
                reset()
            }
            else {
                setTimeout(()=>{
                    reset()
                },1000)
            }
        }
    },[choiceOne,choiceTwo])


    //reset choices & increase turn
    const reset = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns(prevTurns => prevTurns + 1);
        setDisabled(false)
    }

    //start a new game automatically
    useEffect(()=>{

    }, [])

    const check = () => {
        console.log(correctMatches)
    }

    check()

    correctMatches === 9 && pause()

    return (
        <div className="App">
            <motion.div
                variants={hidden()}
                initial="disappear"
                whileInView="appear"
                animate={view}
                className="startView">
                <h1>Medieval matching</h1>
                <button className="button-27" onClick={handleClick}>New Game</button>
            </motion.div>
            <motion.div>
                <motion.h3
                    variants={fadeIn('up',0.9)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{once:false,amount:0.9}}
                >{header}</motion.h3>
                <div
                    className={` ${correctMatches === 9 ? 'card-grid-opacity' : 'card-grid'} `} >
                    {cards.map(card => (
                        <SingleCard
                            key={card.id}
                            card={card}
                            handleChoice = {handleChoice}
                            flipped = {card === choiceOne || card === choiceTwo || card.matched}
                            disabled = {disabled}
                        />))}
                </div>
                <motion.div
                    variants={fadeIn('up',0.9)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{once:false,amount:0.9}}
                >
                    {correctMatches === 9 ? <h6>Congratulations!</h6> : ''}
                </motion.div>
            </motion.div>

            <motion.h2
                variants={fadeIn('up',0.9)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once:false,amount:0.9}}
            >{counter}{turns}</motion.h2>

        </div>
    );
}

export default Main;
