import React, { useState, useCallback, FormEvent } from 'react';
import { Link } from "react-router-dom"
import { Container } from './style';
import { api } from '../../services/api'

interface IData {
  name: string;
  email: string;
}

const Contact: React.FC = () => {
  const [ data, setData ] = useState<IData>({} as IData);

  const handleSubmit = useCallback( (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    api.post('', data);
  }, [data] )

  return (
    <Container>
      <div className="form-wrapper">
        <h1>Contact</h1>
        Name: {data?.name}
        <br />
        Email: {data?.email}
        <div className="card">
          <form onSubmit={ handleSubmit }>
            <input type="text" placeholder="nome" onChange={ e => setData({ ...data, name: e.target.value }) }/>
            <input type="text" placeholder="email" onChange={ e => setData({ ...data, email: e.target.value }) }/>
            <input type="submit" placeholder="cadastrar"/>
          </form>
        </div>
        <Link to="/">Voltar para Home</Link>
      </div>
    </Container>
  );
}

export default Contact;