import React, { useState, useCallback } from 'react';
import { Container } from './style';

const SignIn: React.FC = () => {

  return (
    <Container>
      <div className="card">
        <h5>Cadastre-se</h5>
        <form onSubmit={ () => alert('Test')}>
          <input type="text" placeholder="Informe seu nome"/>
          <input type="text" placeholder="Informe seu email"/>
          <input type="submit" value="Cadastrar"/>
        </form>
      </div>
    </Container>
  );
}

export default SignIn;