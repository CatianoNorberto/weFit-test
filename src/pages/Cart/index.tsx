import { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom'

import ResponsiveCart from '../../components/ResponsiveCart';
import NotFile from '../NotFile';
import ImgVectorNeg from '../../assets/imagens/vectorneg.png'
import ImgVectorPos from '../../assets/imagens/vectorpos.png'

import { formatMoney } from '../../utils/formatMoney'
import CartContext from "../../context/cartContext";

import { 
  Container, 
  Content, 
  CardContent,
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
          <table>
            <tr className='headerTitle'>
              <th className='ImgTitle'>Produto</th>
              <th>Qtd</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
            {products.map((item) =>(
              <tr key={item.id} style={{ marginBottom: 20 }}>
                <td className='ImgTitle'>
                  <img src={item.image} alt="" />
                  <div className='Title'>
                    <h2>{item.title}</h2>
                    <p>{formatMoney(item.price)}</p>
                  </div>
                </td>
                <td>
                  <div className='counter'>
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
                </td>
                <td>
                  <p className='subtotal'>{formatMoney(item.price * item.quantity)}</p>
                </td>
                <td className='action'>
                  <button onClick={() => removeProduct(item.id)}>
                    <MdDelete size={24} color='#009EDD'/>
                  </button>
                </td>
              </tr>
            ))}
          </table>
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
        <ResponsiveCart/>
      </Content>
    </Container>
  )
}

export default Cart