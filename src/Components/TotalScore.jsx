import styled from "styled-components";


const TotalScore=({score})=>{
    return(
        <div>
            <ScoreContainer>
              <h1>{score}</h1>
             <p>Total Score</p>
           </ScoreContainer>
        </div>
    )
}
export default TotalScore;


const ScoreContainer=styled.div`
  max-width: 200px;
text-align: center;
  h1{
font-size: 100px;
margin:0;
;
  }
  p{
font-size: 24px;
font-weight: 500;
margin:0;
  }

`;