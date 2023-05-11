import { Flex } from "@chakra-ui/react"
import React from "react"

const NavContainer = ({children}) => {
  return(
    <Flex 
    as="nav" 
    px={8} 
    maxW={'100%'} 
    justifyContent={'space-between'} 
    alignItems='center'
    
    > 
    
    {children}
    </Flex>
  )
}
export default NavContainer