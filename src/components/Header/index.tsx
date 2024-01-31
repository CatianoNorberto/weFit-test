import { useContext } from 'react'
import { Link } from 'react-router-dom'

import Imagem from '../../assets/imagens/CartIcon.png'
import CartContext from '../../context/cartContext';

import { Container, Content, CartContent, ItemTitle } from './styles'

function Header() {
  const { products } = useContext(CartContext)
  return (
    <Container>
      <Content>
        <h1>WeMovies</h1>
        <Link to='/products'>
          <CartContent>
            <ItemTitle>
              <h2>Meu Carrinho</h2>
              <p>{products.length ?? 0} item</p>
            </ItemTitle>
            <img src={Imagem} alt="CartImagem" />
          </CartContent>
        </Link>
      </Content>
    </Container>
  )
}

export default Header