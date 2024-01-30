import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/index'
import { CartProvider } from './context/cartContext'

import GlobalStyle from "./styles/global";
function App() {
  return (
    <CartProvider>
      <Router>
        <GlobalStyle/>
        <Routes/>
      </Router>
    </CartProvider>
    
  )
}

export default App
