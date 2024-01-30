import { useNavigate } from 'react-router-dom'

import ImgSuccess from '../../assets/imagens/successImg.png'

import { 
  Container, 
  Content, 
} from './styles'

function Success() {
  const navigate = useNavigate();

  const handleHome = () =>{
    navigate('/')
  }

  return (
    <Container>
      <Content>
        <h2>Compra realizada com sucesso!</h2>
        <img src={ImgSuccess} alt="" />
        <button onClick={handleHome}>Voltar</button>
      </Content>
    </Container>
  )
}

export default Success