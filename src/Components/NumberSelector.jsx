import styled from "styled-components";
import { useState } from "react";

const NumberSelector = ({ setError,error,selectedNumber,setSelectedNumber}) => {

    const errorAndNumberHandler=(value)=>{
        setSelectedNumber(value);
        setError("");
    }

    // console.log(selectedNumber);

  const arrNumbers = [1, 2, 3, 4, 5, 6];

  return (
    <NumberSelctorContainer>
        <p className="error">{error}</p>
      <div className="flex">
        {arrNumbers.map((value, i) => (
          <Box
            key={i}
            $isSelected={value === selectedNumber}
            onClick={()=>errorAndNumberHandler(value)}>{value}
          </Box>
        ))}
      </div>
      <p>Select a Number</p>
    </NumberSelctorContainer>
  );
};

export default NumberSelector;

const NumberSelctorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
.error{
    color:red;
}
.flex{
    display: flex;
    gap:24px;
}
p{
    font-weight: 900;

}


`;



const Box = styled.div`
  cursor: pointer;
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 600;
  background-color: ${(props) => (props.$isSelected ? "black" : "white")};
  color: ${(props) => (props.$isSelected ? "white" : "black")};
`;
