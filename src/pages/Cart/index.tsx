import { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom'

import CartContext from "../../context/cartContext";
import NotFile from '../NotFile';
import ResponsiveCart from '../../components/ResponsiveCart';

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
            <tr>
              <th className='ImgTitle'>Produto</th>
              <th>Qtd</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
            {products.map((item) =>(
              <tr key={item.id}>
                <td className='ImgTitle'>
                  <img src={item.image} alt="" />
                  <div className='Title'>
                    <h2>{item.title}</h2>
                    <p>R$ {item.price}</p>
                  </div>
                </td>
                <td>
                  <div className='counter'>
                    <span onClick={() => handleDecrease(item.id)}>-</span>
                    <div className='number'>
                      <p>{item.quantity ?? 1}</p>
                    </div>
                    <span onClick={() => handleIncrease(item.id)}>+</span>
                  </div>
                </td>
                <td>
                  <p className='subtotal'>R$ {(item.price * item.quantity).toFixed(2)}</p>
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
                <h2>R$ {total.toFixed(2)}</h2>
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