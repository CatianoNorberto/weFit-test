import { useContext } from "react";
import CartContext from '../../context/cartContext';
import Mdaddshoppingcart from '../../assets/imagens/mdaddshoppingcart.png'

interface CardProps {
  id: string;
  image: string;
  title: string;
  price: number;
} 

import { Container, Content } from './styles'

function Card({ id, image, title, price }: CardProps) {
  const { productAlreadyAdded, addCart } = useContext(CartContext);

  return (
    <Container>
      <Content>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>R$ {price.toFixed(2)}</p>

        <div style={{ width: '100%'}}>
          <button
            style={{
              backgroundColor: productAlreadyAdded(id) ? '#039B00' : '#009EDD',
              cursor: productAlreadyAdded(id) ? 'not-allowed' : 'pointer',
            }}
            onClick={() =>
              addCart({
                id: id,
                price: price,
                image: image,
                title: title,
                quantity: 1,
              })
            }
          >
            <div>
              <img src={Mdaddshoppingcart} alt="" />
              <span>{productAlreadyAdded(id) ? 1 : 0}</span>
            </div>
            <p style={{ color: productAlreadyAdded(id) ? '#FFFFFF' : '#FFFFFF' }}>
              {productAlreadyAdded(id) ? 'Item Adicionado' : 'Adicionar ao carrinho'}
            </p>
          </button>
        </div>
      </Content>
    </Container>
  )
}

export default Card