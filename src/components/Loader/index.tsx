import React from 'react'
import Lottie from 'react-lottie'
import animation from '../../animations/76060-loader.json'
import { Container } from './style'

const Loader: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Container>
      <div>
        <Lottie options={defaultOptions} height={200} width={200} />
        <h5 className='text'>Aguarde...</h5>
      </div>
    </Container>
  )
}

export default Loader
