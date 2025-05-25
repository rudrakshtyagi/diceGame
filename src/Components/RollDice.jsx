import { useState } from "react";
import styled from"styled-components";

const RollDice=({currentDice,rollDice})=>{


   


    return (
<DiceContainer>
<div className="dice" onClick={rollDice}>
    <img src={`/Images/dice_${currentDice}.png`}/>
</div>
<p>Click on Dice to roll</p>
</DiceContainer>
    );
};

export default RollDice;

const DiceContainer=styled.div`
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 48px;
.dice{
    cursor: pointer;
}

`;
