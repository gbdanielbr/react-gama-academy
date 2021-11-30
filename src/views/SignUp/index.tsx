import React, { useState, useCallback, FormEvent } from 'react'
import { toast } from 'react-toastify'
import Loader from '../../components/Loader'
import { useNavigate, Link } from 'react-router-dom'
import { Container } from './style'
import { api } from '../../services/api'

interface IData {
  name: string
  email: string
  password: string
}

const SignUp: React.FC = () => {
  const [data, setData] = useState<IData>({} as IData);
  const [ load, setLoad ] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoad(true);
    api.post('users', data).then(
      response => {
        toast.success('Cadastro realizado com sucesso!', {
          hideProgressBar: false,
          onClose: () => navigate('/signin')
        })
      }
    ).catch( e => {
      toast.error('Oops.. Algo deu errado!');
      setLoad(false);
    })
  }, [data, navigate])

  if (load) {
    return (
      <Container>
        <Loader />
      </Container>
    )
  }

  return (
    <Container>
      <div className="card">
        <h5>Cadastre-se</h5>
        <form onSubmit={handleSubmit}>
          <input type="text" 
            placeholder="Nome"
            onChange={ e => setData({...data, name: e.target.value})}   
          />
          <input type="text" 
            placeholder="E-mail" 
            onChange={ e => setData({...data, email: e.target.value})} 
          />
          <input type="password" 
            placeholder="Senha"
            onChange={ e => setData({...data, password: e.target.value})}   
          />
          <input type="submit" value="ENVIAR" />
        </form>
        <Link to="/signin">Já tem uma conta? Entre aqui.</Link>
      </div>
    </Container>
  )
}

export default SignUp