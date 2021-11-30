import { Route, Link } from 'react-router-dom'
import jwt from 'jsonwebtoken'

const PrivateRoute: any = ({ component: Component, path: Path, ...rest }: any) => {
  const isLoggedIn: string | null = localStorage.getItem('@userLoginToken')

  const isSectionActive: any = () => {
    if (isLoggedIn === null) {
      return false
    } else {
      const onlyToken = isLoggedIn
      const tokenPayload: any = jwt.decode(onlyToken)
      const expSeconds = tokenPayload.exp
      const timeNow = Date.now() / 1000

      return timeNow > expSeconds ? false : true
    }
  }

  return (

      <Route 
      {...rest} 
      render={ () => ( //apaguei o props do render e do Component por conta de um erro de tipagem
        isSectionActive() ? (<Component />) : (<Link to="/" />)
      )}
      />
  )
}

export default PrivateRoute
