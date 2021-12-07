import React from 'react';
import { FooterDiv, LottieContainer } from './style';
import Lottie from 'react-lottie'
import footerAnimation from '../../animations/31816-footer-liquid.json'
import FooterLogo from '../../assets/images/footerlogo.png'

const Footer: React.FC = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: footerAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  
  return (
      <FooterDiv>
        <img src={ FooterLogo } alt="footer logo" />
        <LottieContainer>
          <Lottie options={defaultOptions} />
        </ LottieContainer>
      </FooterDiv>
  )
}

export default Footer;