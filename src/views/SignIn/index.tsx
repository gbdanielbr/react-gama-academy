import React, { useState, useCallback } from 'react';
import { Container } from './style';

const SignIn: React.FC = () => {
  return (
    <Container>
      <div className="card">
        <h5>Login</h5>
        <form onSubmit={ () => alert('Test')}>
          <input type="text" placeholder="Usuário"/>
          <input type="password" placeholder="Senha"/>
          <input type="submit" value="Entrar"/>
        </form>
      </div>
    </Container>
  );
}

export default SignIn;