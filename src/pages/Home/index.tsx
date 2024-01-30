import { useState, useEffect } from 'react'
import axios from 'axios'

import Card from '../../components/Card'
import Loading from '../../components/Loading'

import { Container, Content, ContentCard } from './styles'

type CardType = {
  id: string;
  image: string;
  title: string;
  price: number;
}

function Home() {
  const [data, setData ] = useState<CardType[]>()

  useEffect(() => {
    axios.get('http://localhost:3333/products')
    .then(response => {
      setTimeout(() => {
        setData(response.data)
      }, 3000)
    });
  }, [])

  return (
    <Container>
      <Content>
        <ContentCard>
          {data?.length? data?.map(item =>(
             <Card
              key={item.id} 
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          )): <Loading />}
        </ContentCard>
      </Content>
    </Container>
  )
}

export default Home