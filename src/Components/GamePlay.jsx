import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { Button } from "../styled/Button";
import TotalScore from "./TotalScore";
import styled from"styled-components";
import { useState } from "react";
import {ResetuButton} from "../styled/Button";
import Rules from "./Rules";

const GamePlay =()=>{

      const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice,setCurrentDice]=useState(1);
    const [score,setScore]=useState(0);
    const [error,setError]=useState("");
const [showRules,setShowRules]=useState(false);


const resetScore=()=>{
    setScore(0);
}



 const numberGenerater=(min,max)=>{
        return Math.floor(Math.random()*(max-min)+min);

    };
    const rollDice=()=>{

        if(!selectedNumber){
            setError("Number toh select kr gandu(gujrati wala)!!");
            return
        };
        setError("");

        const diceNumber=numberGenerater(1,7);
        setCurrentDice((prev)=>diceNumber);

        if(selectedNumber===diceNumber){
            setScore((prev)=>prev+diceNumber);
        }else{
            setScore((prev)=>prev-2
            );
        };
setSelectedNumber(undefined);
    };



    return (

        <MainConatiner>

            <div className="top-section">
<TotalScore score={score}/>
<NumberSelector setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error}/>
     </div>
     <RollDice currentDice={currentDice} rollDice={rollDice}/>
     <div className="btns">
        <ResetuButton onClick={resetScore}>Reset</ResetuButton>
   <Button onClick={()=>setShowRules((prev)=>!prev)}>{showRules ? "Hide":"Show"} Rules {showRules? "⬆️":"⬇️"}</Button>
     </div>

    { showRules && <Rules>

     </Rules>}
     
        </MainConatiner>
    )
}

export default GamePlay;

const MainConatiner=styled.div`

padding-top: 40px;
.top-section{
    
display: flex;
justify-content: space-around;
align-items:end ;
}
.btns{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:10px;
margin-top:18px;
}


`;