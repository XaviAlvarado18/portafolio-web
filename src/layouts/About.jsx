import { Flex, Heading, Text } from "@chakra-ui/react";
import AboutInfo from "../components/about/aboutInfo";
import React from "react";

const About = () => {
  return (
   
      <Flex
        direction={"column"}
        align={{ base: "center", md: "flex-start" }}
        maxW={1350}
        mx={"auto"}
        my={{ base: "10", md: "30" }}
        minH={{base: '90vh', md: '100vh'}} 

      >
        <Heading
          color={"yellow"}
          fontSize={{ base: "3xl", md: "8xl" }}
          lineHeight={"10"}
        >
          About me!
        </Heading>
        <Text
          color={"gray.300"}
          my={{base: 0, md: 8}}
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight={"normal"}
          textAlign={{ base: "center", md: "initial" }}
          as={"span"}
        >
          Who I am
        </Text>
        <AboutInfo />
      </Flex>
  );
};
export default About;