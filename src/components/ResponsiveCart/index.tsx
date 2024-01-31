import { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom'

import ImgVectorNeg from '../../assets/imagens/vectorneg.png'
import ImgVectorPos from '../../assets/imagens/vectorpos.png'

import { formatMoney } from '../../utils/formatMoney'
import CartContext from "../../context/cartContext";

import { 
  Container, 
  Content, 
  CardContent,
  QuiteContent,
  CoverTitle,
  Counter,
  Action,
  Divider
} from './styles'

function ResponsiveCart() {
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

  return (
    <Container>
      <Content>
        <CardContent>
          {products.map((item) => (
            <QuiteContent key={item.id}>
              <CoverTitle>
                <img src={item.image} alt="" />
              </CoverTitle>
            <div className="division">
              <Counter>
                <div>
                  <h2>{item.title}</h2>
                </div>
                <p>{formatMoney(item.price)}</p>
                <button onClick={() => removeProduct(item.id)}>
                  <MdDelete size={24} color='#009EDD'/>
                </button>
              </Counter>
              <div className="ContainerCounter">
                <div className="counter">
                  <span onClick={() => handleDecrease(item.id)}>
                    <img src={ImgVectorNeg} alt="" />
                  </span>
                  <div className='number'>
                    <p>{item.quantity ?? 1}</p>
                  </div>
                  <span onClick={() => handleIncrease(item.id)}>
                    <img src={ImgVectorPos} alt="" />
                  </span>
                </div>
                <div>
                  <h2 className="title">Subtotal</h2>
                  <p className='subtotal'>{formatMoney(item.price * item.quantity)}</p>
                </div>
              </div>
            </div>
          </QuiteContent>
          ))}
            
          <Action>
            <Divider></Divider>
            <div className='actionBtn'>
              <button onClick={handleButtonSuccess}>Finalizar Pedido</button>
              <div className='total'>
                <p>Total</p>
                <h2>R$ {formatMoney(total)}</h2>
              </div>
            </div>
          </Action>
        </CardContent>
      </Content>
      
    </Container>
  )
}

export default ResponsiveCart