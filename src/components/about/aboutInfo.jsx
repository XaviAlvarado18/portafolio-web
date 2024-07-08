import { Image, Text, Box, Container, Flex } from "@chakra-ui/react";
import foto from "../../img/me.jpg";
import React, {useState, useEffect} from "react";
import texts from '../../texts/español.json'

const AboutInfo = () => {

  const [introduccion, setIntroduccion] = useState('');

  useEffect(() => {
    // Simulamos la carga del JSON
    setIntroduccion(texts.introduccion);
  }, []);

  return (
    <Container
      rounded={8}
      py={8}
      px={{ base: 2, md: 16 }}
      textAlign={{ base: "center", md: "left" }}
      maxW={"full"}
    >
      <Flex
        align={"center"}
        justify={"center"}
        direction={{ base: "column", md: "row" }}
        gap={{ base: 8, md: 10 }}
      >
        <Box position={"relative"}>
          <Box
            w={{ base: "200px", md: "350px" }}
            bg={"purple"}
            transform="rotate(-3deg)"
            height={{ base: "200px", md: "350px" }}
            position={"absolute"}
            boxShadow={{base: '10px 1px 50px #070A52', md: '10px 1px 100px #070A52'}}
            left={0}
            top={0}
            borderRadius={8}
          />
          <Image
            alt="Kristopher Javier Alvarado Lopez"
            src={foto}
            transform={"rotate(8deg)"}
            maxW={{ base: "200px", md: "350px" }}
            rounded={8}
            boxShadow={{base: '10px 1px 85px #5800FF', md: '10px 1px 155px #5800FF'}}
            objectFit={"cover"}
          />
        </Box>
          <Box p={{ base: 3, md: 10 }} borderRadius={"8px"}>
            <Text
              as={"p"}
              fontSize={{ base: "1rem", md: "xl" }}
              color={"white"}
              fontWeight={"normal"}
              dangerouslySetInnerHTML={{ __html: introduccion }}
            >
            </Text>
          </Box>
        </Flex>
    </Container>
  );
};
export default AboutInfo;