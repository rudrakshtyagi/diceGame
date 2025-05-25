import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame=({toggle})=>{

return (
  <div>
  <Container>
    <div>
    <img src="/Images/dices.png"/>

    </div>
    <div className="content">
    <h1>DICE GAME</h1>
    <Button onClick={toggle}>
         Play Now
    </Button>
    </div>
  </Container>

  </div>
)
}

export default StartGame;

const Container=styled.div`
  display: flex;
  max-width:1180px;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  justify-content: center;
  
  
  .content{
      
      h1{
        border:1px solid transparent;
        font-size: 90px;
        margin:1px;
    }
  }

`;

