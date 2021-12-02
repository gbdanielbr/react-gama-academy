import React, { useState, useCallback, FormEvent } from 'react'
import { toast } from 'react-toastify'
import Loader from '../../components/Loader'
import { useHistory, Link } from 'react-router-dom'
import { Container } from './style'
import { api } from '../../services/api'

interface IData {
  email: string
  password: string
}

const SignIn: React.FC = () => {
  const [data, setData] = useState<IData>({} as IData);
  const [ load, setLoad ] = useState(false);
  const history = useHistory();
  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoad(true);
    api.post('session', data).then(
      response => {
        const sessionToken = JSON.stringify(response.data.token)
        localStorage.setItem('@userLoginToken', sessionToken)
        toast.success('Login realizado com sucesso!', {
          hideProgressBar: false,
          onClose: () => history.push('/dashboard')
        })
      }
    ).catch( e => {
      toast.error('Oops.. Algo deu errado!');
      setLoad(false);
    })
  }, [data, history])

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
        <h5>Login</h5>
        <form onSubmit={handleSubmit}>
          <input type="text" 
            placeholder="E-mail" 
            onChange={ e => setData({...data, email: e.target.value})} 
          />
          <input type="password" 
            placeholder="Senha"
            onChange={ e => setData({...data, password: e.target.value})}   
          />
          <input type="submit" value="ENTRAR" />
        </form>
        <Link to="/signup">Não tem uma conta? Cadastre-se.</Link>
      </div>
    </Container>
  )
}

export default SignIn
