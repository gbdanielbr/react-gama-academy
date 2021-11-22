import React, { useState } from 'react';
import { Link } from "react-router-dom"

import { Container } from './style';

const Home: React.FC = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  return (
    <Container>
      { isLoading ? (
        <div>
          <p>Carregando...</p>
        </div>
      ):(
        <div>
          <h1>Home</h1>
          <Link to="/contact">Acessar página de contato</Link>
        </div>
      )}

      <div className="button-container">
        <button onClick={ () => setIsLoading(!isLoading) }> Clique aqui </button>
      </div>

    </Container>
  );
}

export default Home;