import { Container } from './style'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Lottie from 'react-lottie'
import animation from '../../animations/welcome.json'

const Home: React.FC = () => {
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
        <h1>Olá!</h1>
        <div className="lottie">
          <Lottie options={defaultOptions} />
        </div>
        <h5>Entre ou cadastre-se</h5>
      </Container>
      <Footer />
    </>
  )
}

export default Home
