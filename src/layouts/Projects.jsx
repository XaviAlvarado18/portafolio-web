import { Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ListProjects from "../components/Projects/ListProject";
import React from "react";

const Projects = () => {
  return (
    <>
      <motion.div
        whileInView={{ opacity: [0,1] }}
        viewport={{ once: true }}
      >
        <Flex
          id="projects"
          as={"section"}
          my={{ base: "24", md: "36" }}
          minH={{base: '85vh', md: '100vh'}} 
          justify={"center"}
          align={{ base: "center", md: "flex-start" }}
          direction={"column"}
          maxW={1350}
          mx={"auto"}
        >
          <Heading color={"yellow"} fontSize={{ base: "4xl", md: "8xl" }}>
            Projects
          </Heading>
          <Text
            mb={{base: 2, md: 16 }}
            px={{ base: 8, md: 0 }}
            color="gray.100"
            textAlign={{ base: "center", md: "left" }}
            fontSize={{ base: "1.1rem", md: "2xl" }}
          >
            A little section of my recents web projects
          </Text>

          <ListProjects />
        </Flex>
      </motion.div>
    </>
  );
};

export default Projects;