import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {fadeIn,hidden} from "../variants";

const Timer = ({stop}) => {

 const [seconds,setSeconds] = useState(0);


    useEffect(()=>{
        const timer = setInterval(() => {
           !stop ? setSeconds(seconds + 1) : console.log('chuj')
        },1000)
        return () => clearInterval(timer);
    },)

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    };

    return (
        <div>
            <motion.h5
                variants={fadeIn('up',0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once:false,amount:0.3}}
            >
                Time: {formatTime(seconds)}
            </motion.h5>
        </div>
    )
}

export default Timer