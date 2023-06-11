import React, {useState} from "react"
import "./App.css"
import Timer from "./components/Timer";
import Main from "./components/Main";
import {fadeIn} from "./variants";
import {motion} from "framer-motion";

const App = () => {

    const [toggle,setToggle] = useState(false);
    const [stop,setStop] = useState(false);

    const start = () => {
        setToggle(!toggle)
    }

    const pause = () => {
        setStop(!stop)
    }

  return (
      <div>
          {toggle ? <Timer stop = {stop}/> : ''}
          <Main start = {start} pause = {pause}/>
      </div>
  );
}

export default App;
