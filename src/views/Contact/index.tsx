import React from 'react';
import { Link } from "react-router-dom"
import { Container } from './style';

const Contact: React.FC = () => {
  return (
    <Container>
      <div className="form-wrapper">
        <h1>Contact</h1>
        <div className="card">
          <form onSubmit={() => {}}>
            <input type="text" placeholder="nome"/>
            <input type="text" placeholder="e-mail"/>
            <input type="submit" placeholder="cadastrar"/>
          </form>
        </div>
        <Link to="/">Voltar para Home</Link>
      </div>
    </Container>
  );
}

export default Contact;