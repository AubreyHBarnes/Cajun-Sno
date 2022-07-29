import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Container
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';

import CategoryCard from '../components/CategoryCard';

const IndexPg = () => {
  
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/categories')
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0])
        setData(data[0].name)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
  
  
  return (
    <>

      <Container>
        {
          data.map(singleCategory => (
            <CategoryCard categoryName={singleCategory} />  
          ))
        }
        
      </Container>
    </>
  );
}

export default IndexPg