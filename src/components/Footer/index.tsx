import React from 'react';
import { FooterDiv } from './style';

import FooterLogo from '../../assets/img/footerlogo.png'

const Footer: React.FC = () => {
  return (
      <FooterDiv>
        <img src={ FooterLogo } alt="footer logo" />
      </FooterDiv>
  )
}

export default Footer;