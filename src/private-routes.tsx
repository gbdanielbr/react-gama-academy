import { Route, Redirect } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

const PrivateRoute = ({ component: Component, path: Path, ...rest }: any) => {
  const isLoggedIn: string | null = localStorage.getItem('@userLoginToken')

  const isSectionActive: any = () => {
    if (isLoggedIn === null) {
      return false
    } else {
      const onlyToken = isLoggedIn
      const tokenPayload: any = jwt_decode(onlyToken)
      const expSeconds = tokenPayload.exp
      const timeNow = Date.now() / 1000

      return timeNow > expSeconds ? false : true
    }
  }

  return(
      <Route {...rest} render={ props => (
        isSectionActive() ? <Component {...props} /> : <Redirect to="/" />
      )}/>
  )
}

export default PrivateRoute
