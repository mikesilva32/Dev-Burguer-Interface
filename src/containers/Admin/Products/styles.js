import styled from "styled-components";

export const Container = styled.div`

`;
export const ProductImage = styled.img`
 height: 80px;
 padding: 12px;
 border-radius: 20px;
 background-color: ${(props) => props.theme.lightGray};
`;
export const EditButton = styled.button`
 border: none;
 background-color: ${(props) => props.theme.lightGray};
 border-radius: 8px;
 height: 32px;
 width: 32px;
 margin: 0 auto;

 display: flex;
 align-items: center;
 justify-content: center;

 svg{
    width: 16px;
    height: 16px;
 }

 &:hover{
     background-color: ${(props) => props.theme.purple};

     svg {
        fill: ${(props) => props.theme.white};
     }
 }
`;