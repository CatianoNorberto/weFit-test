import React from 'react'
import { MdDelete } from "react-icons/md";

interface CartProps {
  imagemUrl: string;
  titulo: string;
  valor: number;
  onButtonClick: () => void;
}

import { 
  Container, 
  Content, 
  CardContent,
  TitlesHeader,
  QuiteContent,
  CoverTitle,
  Counter,
  Action,
  DeleteContent,
  Divider
} from './styles'

function Cart({ imagemUrl, titulo, valor, onButtonClick }: CartProps) {
  return (
    <Container>
      <Content>
        <CardContent>
          <TitlesHeader>
            <h2>Produto</h2>
            <h2></h2>
            <h2>Qtd</h2>
            <h2>Subtotal</h2>
            <h2></h2>
          </TitlesHeader>
          <QuiteContent>
            <CoverTitle>
              <img src={imagemUrl} alt="" />
              <div>
                <h2>{titulo}</h2>
                <p>R$ {valor}</p>
              </div>
            </CoverTitle>
            <Counter>
              <span>-</span>
              <div className='number'>
                <p>1</p>
              </div>
              <span>+</span>
            </Counter>
            <div><p className='subtotal'>R$ {valor}</p></div>
            <DeleteContent>
              <MdDelete size={24} color='#009EDD'/>
            </DeleteContent>
          </QuiteContent>
          <Divider></Divider>
          <Action>
            <button onClick={onButtonClick}>Finalizar Pedido</button>
            <div className='total'>
              <p>Total</p>
              <h2>R$ 20,90</h2>
            </div>
          </Action>
        </CardContent>
      </Content>
    </Container>
  )
}

export default Cart