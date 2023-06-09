import uvg from '../../img/uvege.jpg'
import { Box, Image } from '@chakra-ui/react'
import React from 'react';

const Logo = ({open}) => {
  return(
    <Box>
      <Image 
      boxSize={{base: 12, md: 16}} 
      position={open ? 'absolute' : 'initial'}
      borderRadius='full' 
      objectFit={'cover'}
      boxShadow={'-1px 2px 1px #5800FF'} 
      top={6}
      src={uvg}
      alt='logo' />
    </Box>
  )
}
export default Logo