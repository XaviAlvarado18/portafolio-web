import { Flex, Heading, Text } from "@chakra-ui/react";
import HeroContainer from "./HeroContainer";
import { SocialLinks } from "../footer/SocialLinks";
import React from "react";

const Hero = () => {
  return (
    <HeroContainer>
      <Flex
        w={"full"}
        mx={0}
        align={"center"}
        justify={"center"}
        direction="column"
        gap={8}
      >
        <Heading
          fontSize={{ base: "3xl", md: "5xl", lg: "7xl" }}
          textAlign={"center"}
        >
          <Text as={"span"}>
            Hola, yo soy{" "}
            <Text as="span" color={"purple"}>
              Javier Alvarado
            </Text>{" "}
            un
          </Text>
          <br />{" "}
          <Text
            color={"yellow"}
            as={"span"}
            position={"relative"}
            _before={{
              content: '""',
              width: "full",
              height: "5px",
              borderRadius: "8px",
              background: "yellow",
              position: "absolute",
              bottom: 0,
            }}
          >
            estudiante de ingenieria
          </Text>{" "}
           en computacion
        </Heading>
        <Text
          fontSize={{ base: "1rem", md: "3xl", lg: "4xl" }}
          color={"gray.100"}
        >
          I create and code webs, and I love what I do.
        </Text>
        <SocialLinks size={12} />
      </Flex>
    </HeroContainer>
  );
};
export default Hero;