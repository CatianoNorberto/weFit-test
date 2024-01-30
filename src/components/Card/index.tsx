import Mdaddshoppingcart from '../../assets/imagens/mdaddshoppingcart.png'

interface CardProps {
  imagemUrl: string;
  titulo: string;
  valor: number;
  onButtonClick: () => void;
} 

import { Container, Content } from './styles'

function Card({ imagemUrl, titulo, valor, onButtonClick }: CardProps) {
  return (
    <Container>
      <Content>
        <img src={imagemUrl} alt={titulo} />
        <h2>{titulo}</h2>
        <p>R$ {valor.toFixed(2)}</p>
        <button onClick={onButtonClick}>
          <div>
            <img src={Mdaddshoppingcart} alt="" />
            <span>0</span>
          </div>
          <p>Adicionar ao carrinho</p>
        </button>
      </Content>
    </Container>
  )
}

export default Card