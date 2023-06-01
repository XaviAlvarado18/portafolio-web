import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ContactForm from "../components/Contact/ContactForm";
import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
  return (
    <motion.div whileInView={{ opacity: [0, 1] }} viewport={{once: true}}>
      <Flex
        id={"contact"}
        direction={{ base: "column", md: "row" }}
        align={"center"}
        minH={{base: '85vh', md: '100vh'}} 
        justify={"center"}
        maxW={1350}
        mx={"auto"}
        gap={4}
        as={"section"}

      >
        <Box as={"div"} textAlign={{ base: "center", md: "initial" }}>
          <Heading
            px={{ base: 8, md: 0 }}
            color={"yellow"}
            fontSize={{ base: "3xl", md: "8xl" }}
            as={"h2"}
            lineHeight={"10"}
            my={8}
          >
            Contact me!
            <br />
            <Text
              color={"gray.300"}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight={"normal"}
              as={"span"}
            >
              Hire me
            </Text>
          </Heading>
          <Text
            as={"p"}
            px={{ base: 8, md: 0 }}
            fontSize={{ base: "1rem", md: "xl" }}
            color={"gray.200"}
          >
            
          </Text>
        </Box>
        <ContactForm />
      </Flex>
    </motion.div>
  );
};
export default Contact;