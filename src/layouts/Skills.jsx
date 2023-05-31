import { Flex, Heading, Text } from "@chakra-ui/react";
import Skill from "../components/skills/Skill";
import { motion } from "framer-motion";
import React from "react";


const Skills = () => {
  return (
    <>
      <motion.div
        animate={{ opacity: [0,1] }}
        transition={{ duration: 1 }}
      >
        <Flex
          justify={"center"}
          align={{ base: "center", md: "flex-start" }}
          direction={"column"}
          mb={{ base: "24", md: "36" }}
          minH={{base: '85vh', md: '100vh'}} 
          id="skills"
          maxW={1350}
          mx={"auto"}
        >
          <Heading color={"yellow"} fontSize={{ base: "4xl", md: "8xl" }}>
            Skills
          </Heading>
          <Text
            my={5}
            px={{ base: 8, md: 0 }}
            color="gray.100"
            textAlign={{ base: "center", md: "left" }}
            fontSize={{ base: "1.1rem", md: "2xl" }}
          >
            Soy un apasionado de la tecnología, en mi día a día trato de aprender cosas nuevas, además, 
            me gusta construir mis proyectos con diferentes lenguajes/habilidades:
          </Text>
          <Skill />
        </Flex>
      </motion.div>
    </>
  );
};
export default Skills;