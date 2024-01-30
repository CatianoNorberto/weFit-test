import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Card from '../../components/Card'
// import Cart from '../Cart'
import Loading from '../../components/Loading'
import HomemAranhaImg from '../../assets/imagens/homem-aranha.png'
// import Success from '../Success'

import { Container, Content, ContentCard } from './styles'

type CardType = {
  id: string;
  image: string;
  title: string;
  price: string;
}

function Home() {
  const navigate = useNavigate();
  const [data, setData ] = useState<CardType[]>()

  useEffect(() => {
    axios.get('http://localhost:3333/products')
    .then(response => {
      setTimeout(() => {
        setData(response.data)
      }, 2000)
    });
  }, [])

   const handleButtonCart = () => {
     navigate('/products')
   };
  return (
    <Container>
      <Content>
        <ContentCard>
          {data?.length? data?.map(item =>(
             <Card
              key={item.id} 
              imagemUrl={item.image}
              titulo={item.title}
              valor={item.price}
              onButtonClick={handleButtonCart}
            />
          )): <Loading />}
        </ContentCard>
      </Content>
      {/* <Cart 
        imagemUrl={HomemAranhaImg}
        titulo='Homem Aranha'
        valor={200.00}
        onButtonClick={handleButtonClick}
      /> */}
    </Container>
  )
}

export default Home