import { Box } from "@chakra-ui/react";
import React from 'react';

const Footer = ({ children }) => {
  return (
    <Box
      as="footer"
      w={'full'}
      mx={'auto'}
      px={4}
      backdropFilter='auto'
      backdropBlur='8px'
      bottom={4}
      wrap="wrap"
      pos="fixed"
      zIndex={99}
    >
      {children}
    </Box>
  );
};

export default Footer;