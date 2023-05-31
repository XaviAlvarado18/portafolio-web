import { Image, Text, Box, Container, Flex } from "@chakra-ui/react";
import foto from "../../img/me.jpg";
import React from "react";

const AboutInfo = () => {
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
            >
              ¡Mucho gusto! {" "}
              <Text as={"span"} fontWeight={"bold"} color={"yellow"}>
                Mi nombre es Kristopher Javier Alvarado López
              </Text>{" "}
              estudiante de tercer año de la carrera de{" "}
              <Text as={"span"} fontWeight={"bold"} color={"yellow"}>
                Ingeniería en Ciencia de la Computación y Tecnologías de la Información
              </Text>{" "}
              en la Universidad del Valle de Guatemala. <br />
              Tengo conocimientos en varios lenguajes de programación, desde programación estructurada,
              programación orientada a objetos, estructuras de datos, programación de plataformas móviles,
              programación de de microprocesadores, bases de datos y{" "}
              <Text as={"span"} fontWeight={"bold"} color={"yellow"}>
                programación de páginas web. <br/>
              </Text>
              <br/> Tambien cuento con experiencia como {" "}
              <Text as={"span"} fontWeight={"bold"} color={"blue.400"}>
              Analista de Infraestructura y Soporte <br/>
              </Text>
               en Sitecpro, dando soporte a agencias bancarias que utilizan todos nuestros sistemas{" "}
              <Text as={"span"} fontWeight={"bold"} color={"yellow"}>
                Total Image Expedientes, Total Image Admin, CREA, Control y Cuadre etc.
              </Text>
            </Text>
          </Box>
        </Flex>
    </Container>
  );
};
export default AboutInfo;