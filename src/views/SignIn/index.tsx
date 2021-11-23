import React, { useState, useCallback } from 'react';
import { Container } from './style';

const SignIn: React.FC = () => {
  return (
    <Container>
      <form onSubmit={ () => alert('Test')}>
        <input type="text" placeholder="Informe seu nome"/>
        <input type="text" placeholder="Informe seu email"/>
        <input type="submit" value="Entrar"/>
      </form>
    </Container>
  );
}

export default SignIn;