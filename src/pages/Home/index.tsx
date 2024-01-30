import { useState, useEffect } from 'react'
import axios from 'axios'

import Header from '../../components/Header'
 import Card from '../../components/Card'
// import Cart from '../Cart'

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
  const [data, setData ] = useState<CardType[]>()

  useEffect(() => {
    axios.get('http://localhost:3333/products')
    .then(response => setData(response.data));
  }, [])
  console.log(data)

   const handleButtonClick = () => {
     console.log('Botão clicado!');
     // Adicione sua lógica aqui
   };
  return (
    <Container>
      <Content>
        <Header/>
        <ContentCard>
          {data?.map(item =>(
             <Card
              key={item.id} 
              imagemUrl={item.image}
              titulo={item.title}
              valor={item.price}
              onButtonClick={handleButtonClick}
            />
          ))}
         
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