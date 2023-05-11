import { Box, Icon } from "@chakra-ui/react"
import React from "react"

export const IconLink = ({icon, href, size}) => {
  return(
    <Box as="a" href={href} target={'_blank'}>
        <Icon as={icon} h={size} w={size} _hover={{color:'purple', transition: '300ms ease-in-out'}} />
    </Box>
  )
}