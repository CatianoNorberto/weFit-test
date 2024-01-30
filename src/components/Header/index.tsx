import React from 'react'
import Imagem from '../../assets/imagens/CartIcon.png'

import { Container, Content, CartContent, ItemTitle } from './styles'

function Header() {
  return (
    <Container>
      <Content>
        <h2>WeMovies</h2>
        <CartContent>
          <ItemTitle>
            <h2>Meu Carrinho</h2>
            <p>0 item</p>
          </ItemTitle>
          <img src={Imagem} alt="CartImagem" />
        </CartContent>
      </Content>
    </Container>
  )
}

export default Header