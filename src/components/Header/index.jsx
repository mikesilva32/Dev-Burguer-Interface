import {Container,Navigatinon,HeaderLink,Opitions,Profile,Logout,LinkContainer,Content} from './styles'
import {ShoppingCartSimpleIcon , UserCircleIcon} from '@phosphor-icons/react'
import { useNavigate, useResolvedPath} from 'react-router-dom'
import { useUser } from '../../hooks/UserContext';



export function Header() {
 const navigate = useNavigate();
 const {logout,userInfo} =useUser();

 const {pathname}= useResolvedPath();

  function LogoutUser() {
    logout();
    navigate('/Login')
  }
  console.log(userInfo)
    return (
        <Container>
            <Content>
               <Navigatinon>
                <div>
                     <HeaderLink to='/' $isActive={pathname === '/'}>Home</HeaderLink>
                     <hr></hr>
                     <HeaderLink to='/cardapio' $isActive={pathname === '/cardapio'}>Cardapio</HeaderLink>
                </div>
               </Navigatinon>
            <Opitions>
                 <Profile>
                    <UserCircleIcon color='#ffffff' size={24} />
                    <div>
                        <p>
                        Olà, <span>{userInfo.name}</span>
                       </p>
                          <Logout onClick={LogoutUser}>Sair</Logout>
                    </div>
                 </Profile>
                  <LinkContainer>
             <ShoppingCartSimpleIcon color='#ffffff' size={24} />
                <HeaderLink to='/carrinho'>Carrinho</HeaderLink>
            </LinkContainer>
            </Opitions>
           
            </Content>
        </Container>
    )
}