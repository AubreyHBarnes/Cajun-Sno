import { Box, useStyleConfig, Image, Heading, Text } from '@chakra-ui/react'

  // 1. Using the default props defined in style config
 export default function CategoryCard({ categoryName }) {

    function CategoryCard(props) {
        const { variant, ...rest } = props
      
        const styles = useStyleConfig('CategoryCard', { variant })
      
        // Pass the computed styles into the `__css` prop
        return <Box __css={styles} {...rest} />
      }
    return (
      <CategoryCard>
        <Heading mt={6} maxW={60} size='lg' textAlign='center' color='gray.700'>
          {categoryName}
        </Heading>
      </CategoryCard>
    )
  }
  
  // 2. Overriding the default
//   function Usage() {
//     return (
//       <Card variant='smooth'>
//         <Image
//           src='https://chakra-ui.com/eric.jpg'
//           rounded='full'
//           w={32}
//           h={32}
//           boxShadow='md'
//         />
//         <Heading mt={6} maxW={60} size='lg' textAlign='center' color='gray.700'>
//           Welcome back, Eric
//         </Heading>
//         <Text mt={6} mb={6} size='sm' color='blackAlpha.500'>
//           Use your fingerprint to continue.
//         </Text>
//         <Image src='/fingerprint.png' w={32} h={32} />
//       </Card>
//     )
//   }