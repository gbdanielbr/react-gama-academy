import React from 'react'
import { NavBar } from './style'
import { Link } from 'react-router-dom'
import NavLogo from '../../assets/images/navlogo.png'

const Footer: React.FC = () => {

  return (
    <div>
      <NavBar>
        <img src={ NavLogo } alt="logo.png" />
        <div className="nav-links">
          <Link to= "/" >Home</Link>
          <Link to= "/signup" >Cadastrar</Link>
          <Link to= "/signin" >Entrar</Link>
        </div>
      </NavBar>
    </div>
  )
}

export default Footer;