import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import { SocialLinks } from "../components/footer/SocialLinks";
import React from "react";

const Footer = () => {
  return (
    <Flex
      my={{ base: "100px", md: 100 }}
      direction={{ base: "column", md: "row" }}
      align={"center"}
      justify={{base: 'center', md: "space-between"}}
      maxW={1350}
      mx={"auto"}
      gap={4}
      as={"section"}
    >
      <Flex
        w={{ base: "100%", md:'auto' }}
        justify={"center"}
        flexDirection={'column'}
      >
        <Heading
          px={{ base: 8, md: 0 }}
          textAlign={"center"}
          color={"yellow"}
          fontSize={{ base: "2xl", md: "4xl" }}
          as={"h2"}
          lineHeight={"10"}
          my={{ base: 0, md: 2 }}
        >
          Kristopher Javier Alvarado López
        </Heading>
        <Text
          color={"gray.400"}
          textAlign={{ base: "center", md: "initial" }}
          fontSize={{ base: "xl", md: "3xl" }}
          fontWeight={"light"}
          as={"span"}
          mb={1}
        >
          Estudiante de Ingeniería en Computación
        </Text>
      </Flex>
      <SocialLinks size={7} />
      <Box mb={{ base: 4, md: 0 }}></Box>
    </Flex>
  );
};
export default Footer;