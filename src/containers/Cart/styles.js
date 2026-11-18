import styled from "styled-components";
import Texture from '../../assets/texture.svg'
import Background from '../../assets/background.svg'

export const Container = styled.div`
 width: 100%;
 min-height: 100vh;
 background-color:${(props) => props.theme.secondWhite} ;
 background: url('${Background}');
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5),);
    
 
`
export const Banner = styled.div`
 background-image: url('${Texture}');
 background-size: cover;
 background-position: center;
 background-color: ${(props) => props.theme.mainBlack};
 display: flex;
 align-items: center;
 justify-content: center;
 position: relative;
 height: 150px;
 img{
    height: 130px;

 }
`
export const Title = styled.div`
 font-size: 32px;
 font-weight: 800;
 padding-bottom: 12px;
 color: ${(props) => props.theme.green};
 text-align: center;
 position: relative;

 &::after{
   position:absolute;
   left: calc(50% - +28px);
   bottom: 0;
   content: '';
   width: 56px;
   height: 4px;
   background-color:${(props) => props.theme.green};
   
 }
`
export const Content = styled.div`
 display: grid;
 grid-template-columns: 1fr 30%;
 gap:40px;
 width: 100%;
 max-width: 1200px ;
 padding: 40px;
 margin: 0 auto;
`
