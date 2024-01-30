import { useNavigate } from 'react-router-dom'

import ImgNotFile from '../../assets/imagens/NotFileImg.png'

import { 
  Container, 
  Content, 
  Divider
} from './styles'

function NotFile() {
  const navigate = useNavigate();

  const handleHome = () =>{
    navigate('/')
  }

  return (
    <Container>
      <Content>
        <h2>Parece que não tem nada aqui:(</h2>
        <img src={ImgNotFile} alt="" />
        <Divider></Divider>
        <button onClick={handleHome}>Voltar</button>
      </Content>
    </Container>
  )
}

export default NotFile