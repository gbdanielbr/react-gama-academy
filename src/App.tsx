import ReactRoutes from "./routes"
import GlobalStyle from "./styles/globalStyle"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <ReactRoutes />
    </>
  )
}

export default App;