import styled from "styled-components";

export const ButaoVoltar = styled.button`
 position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
 display:flex;
 align-items: center;
 background-color: ${(props) => props.theme.purple};
 border: none;
 cursor: pointer;
 font-size: 1rem;
 color: ${(props) => props.theme.white};
 padding: 5px;
 border-radius: 16px;
 

 &:hover{
   background: rgba(255, 255, 255, 0.2);
   backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
 }
 @media (max-width: 768px) {
    top: 8px;
    left: 8px;
    padding: 6px 10px;
    font-size: 0.875rem; /* 14px */
  }

 
`
export const Icone = styled.img`
  width: 20px;
  height: 20px;
`;