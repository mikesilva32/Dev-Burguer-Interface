 import Logo from '../../assets/LogoLogin.svg'
 import {Container,Banner,Title,Content} from './styles'
 import { CartItens,CartResume } from '../../components';

 export function Cart(){
     return(
        <Container>
            <Banner>
                    <img src={Logo} alt='Logo DevBurguer'/>
            </Banner>
            <Title>Checkout - Pedido</Title>
            <Content>
               <CartItens /> 
               <CartResume />   
            </Content>
        </Container>
     );

 };