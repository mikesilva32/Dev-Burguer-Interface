import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 20px;
  border-radius: 15px;
  background-color:${(props) => props.theme.white};
 cursor: grab;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  position: relative;

  div{
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;

    p{
      font-size: 18px;
      color:${(props) => props.theme.orange};
      line-height: 20px;
      font-weight: 700;
      margin-top: 40px;
    }
    strong{
      font-size: 22px;
      color:#636363;
      font-weight: 800;
      line-height: 20px;
    }
  }
  
`
export const CardImage = styled.img`
 height: 100px;
 position: absolute;
 top: -50px;
 
`
