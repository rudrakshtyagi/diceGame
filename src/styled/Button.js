import styled from "styled-components";

export const Button=styled.button`
    
    
    padding:10px 18px;
    color:white;
    background-color: black;

    min-width: 220px;
    border: none;
    background:black;
    border-radius:5px;
    border: 1px solid transparent;
    transition: 0.4s background ease-out;

    &:hover{
        background-color: white;
        color:black;
        border:1px solid black;
        transition: 0.3s background ease-in;
        cursor: pointer;
    }

`;

export const ResetuButton=styled(Button)`
background-color: white;
color: black;
border: 1px solid black;

&:hover{
    background-color: black;
    color: white;
border:1px solid white;    
}

`;