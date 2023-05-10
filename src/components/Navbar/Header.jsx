import { Box } from "@chakra-ui/react"
import React from 'react';

const Header = ({children}) => {
  return(
    <Box 
    as="header" 
    w={'full'}  
    mx={'auto'} 
    px={4} 
    backdropFilter='auto' 
    backdropBlur='8px' 
    top={4} 
    wrap="wrap"
    pos="fixed" 
    zIndex={99} 
    >
      {children}
    </Box>
  )
}
export default Header;