import React from 'react';
import { Container } from './style'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Lottie from 'react-lottie'
import animation from '../../animations/welcome.json'

const Dash: React.FC = () => {

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
  
  return (
    <>
      <Nav />
      <Container>
        <h1>Dashboard em construção</h1>
        <div className="lottie">
          <Lottie options={defaultOptions} />
        </div>
        <h5>Desculpe pelo transtorno!</h5>
      </Container>
      <Footer />
    </>
  )
}

export default Dash