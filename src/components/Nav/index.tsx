import React from 'react'
import { NavBar } from './style'
import { Link } from 'react-router-dom'

import NavLogo from '../../assets/img/navlogo.png'

const Footer: React.FC = () => {
  return (
    <div>
      <NavBar>
        <img src={ NavLogo } alt="logo.png" />
        <div className="nav-links">
          <Link to= "/" >Home</Link>
          <Link to= "/signin" >Entrar</Link>
          <Link to= "/signup" >Cadastrar</Link>
          <Link to= "/contact" >Contato</Link>
        </div>
      </NavBar>
    </div>
  )
}

export default Footer;