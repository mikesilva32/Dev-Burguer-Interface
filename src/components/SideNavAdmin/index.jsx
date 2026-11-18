import {navLinks} from './navLinks';
import Logo from '../../assets/LogoLogin.svg';
import { SignOutIcon} from '@phosphor-icons/react'
import { Container, NavLinkContainer, NavLink, Footer } from './styles';
import { useUser } from '../../hooks/UserContext';
import { useNavigate, useResolvedPath} from 'react-router-dom';


export function SideNavAdmin() {
   const {logout} =useUser();
   const navigate = useNavigate(); 
   const {pathname} = useResolvedPath();
   
function handleLogout() {
    logout();
    navigate('/login');
  }

    return (
        <Container>
            <img src={Logo} alt="Hamburguer Logo Dev Burguer" />
            <NavLinkContainer>
              {navLinks.map(Link =>(
                <NavLink  
                  key={Link.id}
                  to={Link.path}
                  $isActive={pathname === Link.path}
                  >
                    {Link.icon}
                    <span>{Link.label}</span>
                </NavLink>
              ))}
             </NavLinkContainer>

             <Footer>
                <NavLink>

                  <SignOutIcon to='/login' onClick={handleLogout}/>
                   <span>Sair</span>
                </NavLink>
             </Footer>
        </Container>
    )
}