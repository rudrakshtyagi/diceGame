import styled from"styled-components";

const Rules=()=>{


    return (
<RulesContainer>

<h2>How to play dice game</h2>
<div className="text">

<p>1.Select any number</p>
<p>2.Click on dice image</p>
<p>3.After clicking on dice, if selected number is equal to the number you got on dice , your score will get increased by that number  </p>
<p>4.Else your score will get deducted by 2</p>

</div>


</RulesContainer>
    )
}
export default Rules;

const RulesContainer=styled.div`
max-width:800px;
margin: 0 auto;
margin-top: 40px;
border-radius: 10px;
background-color: #fbf1f1;
padding:20px;
h2{
    font-size: 24px;
    
}
.text{
    margin-top:24px;
}
`;