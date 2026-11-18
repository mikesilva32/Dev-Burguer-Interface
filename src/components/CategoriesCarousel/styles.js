import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
 .carousel-item{
    padding-right:40px ;
 }
 padding-left: 40px;
 .react-multiple-carousel__arrow--left{
      left: 15px;
      top: 10px;
 }

 .react-multiple-carousel__arrow--right{
      top: 10px;
 }
`

export const Title = styled.h2`
font-size: 32px;
font-weight: 800;
color: ${(props) => props.theme.purple};
padding-bottom: 12px;
position: relative;
align-items: center;
text-align: center;


 &::after{
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background: ${(props) => props.theme.purple};
    left: calc(50% - 28px);
    margin-bottom: 10px;
 }
`
export const ContainerItens =styled.div`
  background: url('${(props) => props.$imageUrl }');
  background-position: center;
  background-size: cover;
  border: solid 2px ${(props) => props.theme.purple};
  display: flex;
  align-items: center;
  padding: 20px 10px;
  width: 100%;
  height: 250px;
  border-radius: 20px;

`
export const CategoryButton = styled(Link)`
  color: ${(props) => props.theme.white}ff;
    background-color: rgba(0,0,0,0.5);
    padding: 10px 30px;
    border-radius: 20px;
    font-size: 22.5px;
    font-weight: 700;
    margin-top: 90px;
    text-decoration: none;

  &:hover{
   background-color: ${(props) => props.theme.purple};
  }  

`