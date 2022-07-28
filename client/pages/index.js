import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Container
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';

import CustomCard from '../components/CustomCardEx';

const IndexPg = () => {
  
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/snoballs')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
  
  
  return (
    <>

      <Container>
        <p>{data[0].flavor}</p>
        <CustomCard />  
      </Container>
    </>
  );
}

export default IndexPg