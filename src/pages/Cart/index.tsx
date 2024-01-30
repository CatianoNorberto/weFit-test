import { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom'

import CartContext from "../../context/cartContext";
import NotFile from '../NotFile';
import { 
  Container, 
  Content, 
  CardContent,
  TitlesHeader,
  QuiteContent,
  CoverTitle,
  Counter,
  Action,
  Divider
} from './styles'

function Cart() {
  const navigate = useNavigate();

  const handleButtonSuccess = () => {
    navigate('/success')
  };

  const {
    products,
    removeProduct,
    handleIncrease,
    handleDecrease,
    total,
  } = useContext(CartContext);

  if (products.length === 0) {
    // Se não houver nenhum produto, renderize o componente NotFile
    return <NotFile />;
  }

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
          {products?.map((item) => (
            <QuiteContent key={item.id}>
              <CoverTitle>
                <img src={item.image} alt="" />
                <div>
                  <h2>{item.title}</h2>
                  <p>R$ {item.price}</p>
                </div>
              </CoverTitle>
              <Counter>
                <span onClick={() => handleDecrease(item.id)}>-</span>
                <div className='number'>
                  <p>{item.quantity ?? 1}</p>
                </div>
                <span onClick={() => handleIncrease(item.id)}>+</span>
              </Counter>
              <div><p className='subtotal'>R$ {(item.price * item.quantity).toFixed(2)}</p></div>
              <button onClick={() => removeProduct(item.id)}>
                <MdDelete size={24} color='#009EDD'/>
              </button>
            </QuiteContent>
          ))}
          
          <Action>
            <Divider></Divider>
            <div className='actionBtn'>
              <button onClick={handleButtonSuccess}>Finalizar Pedido</button>
              <div className='total'>
                <p>Total</p>
                <h2>R$ {total.toFixed(2)}</h2>
              </div>
            </div>
          </Action>
        </CardContent>
      </Content>
    </Container>
  )
}

export default Cart