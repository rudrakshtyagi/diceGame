
import { useState } from "react";
import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";



const App=()=>{
  
  const[isGameStarted,setIsGameStarted]=useState(false);
  
  const toggleHandler=()=>{
    setIsGameStarted((prev)=>!prev);
  };


  return (
    <div>
{isGameStarted ? <GamePlay/> :<StartGame toggle={toggleHandler}/>}
    </div>
  );
}

export default App;
  
  
  