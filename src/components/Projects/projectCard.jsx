import { motion } from "framer-motion";
import { variants } from "../../constants/variant";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ButtonPrimary } from "../button";
import React from "react";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      custom={{ delay: (index + 1) * 0.1 }}
      variants={variants}
      viewport={{ once: false }}
    >
      <Flex
        direction={"column"}
        justify={"center"}
        align={"center"}
        gap={6}
        p={{ base: 8, md: 2 }}
        _hover={{ opacity: 0.8, transition: "300ms" }}
      >
        <Heading fontSize={{ base: "1rem", md: "xl" }}>{project.title}</Heading>
        <Image alt={project.title} src={project.src} maxW={{base: 300, md: 400}} rounded={8} />
        <Flex gap={3} p={0} my={0}>
          {project.technologies.map((tec, index) => (
            <Text
              key={index}
              opacity={0.8}
              bg={"gray.800"}
              color={"white"}
              rounded={5}
              fontSize={{base: 11, md: 'md'}}
              fontWeight={600}
              px={4}
              as={"span"}
            >
              {tec}
            </Text>
          ))}
        </Flex>
        <Flex gap={5}>
          <ButtonPrimary
            href={project.url}
            rounded={"full"}
            bg={"purple"}
            color={"white"}
            fontWeight={"bold"}
            boxShadow="rgb(99 51 255 / 19%) 5px 5px 15px 5px"
            _hover={{
              opacity: 0.8,
              transform: "translateY(-3px)",
            }}
            _active={{ opacity: 0.5 }}
            fontSize={{base: 13, md: 'md'}}
          >
            View demo
          </ButtonPrimary>
          <ButtonPrimary
            href={project.code}
            rounded={"full"}
            fontSize={{base: 13, md: 'md'}}
            bg={"yellow"}
            color={"black"}
            fontWeight={"bold"}
            boxShadow="rgb(99 51 255 / 19%) 5px 5px 15px 5px"
            _hover={{
              opacity: 0.8,
              transform: "translateY(-3px)",
            }}
            _active={{ opacity: 0.5 }}
          >
            {"<Code />"}
          </ButtonPrimary>
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default ProjectCard;