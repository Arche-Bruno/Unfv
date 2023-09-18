import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import {icon} from './../../images/unfv.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
           
          <img src='https://seeklogo.com/images/U/universidad-nacional-federico-villarreal-logo-D23F1E655C-seeklogo.com.png' width="30rem" /> <Span>Trabajos de Innovación</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">Nosotros</NavLink>
          <NavLink href='#projects'>Proyectos</NavLink>
          <NavLink href='#education'>Educación</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.facebook} target="_blank">Los amo a todos! 😎💖 #cuchillito </GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>Nosotros</MobileLink>
          
          
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Proyectos</MobileLink>
        
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.facebook} target="_blank">Perfil Fb</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar