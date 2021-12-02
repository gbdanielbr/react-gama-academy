import { Link } from "react-router-dom"
import { Container } from './style';
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <Container>
          <div>
            <h1>Home</h1>
          </div>
      </Container>
      <Footer />
    </>
  )
}

export default Home;