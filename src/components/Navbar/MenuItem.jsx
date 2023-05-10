import { Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from 'react';

const MenuItem = ({ children, to, scrollToSection, ...rest }) => {
  return (
    <motion.a
      href={to}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(to);
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
        <Text
          fontSize={{ base: 25, md: "1rem" }}
          fontWeight={"bold"}
          display="block"
          {...rest}
        >
          {children}
        </Text>
    </motion.a>
  );
};
export default MenuItem;