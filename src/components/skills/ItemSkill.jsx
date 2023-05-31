import { Flex, Heading, Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { variants } from "../../constants/variant";
import React from "react";

function ItemSkill({ item, index }) {
  
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      custom={{ delay: (index + 1) * 0.05 }}
      variants={variants}
      viewport={{ once: false }}
    >
      <Flex
        key={item.id}
        direction={"column"}
        gap={5}
        align={"center"}
        p={6}
        _hover={{ color: "yellow", transition: "300ms" }}
      >
        <Heading color={"gray.100"} fontSize={{ base: "xl", md: "xl" }}>
          {item.alt}
        </Heading>
        <Box
          position={"relative"}
          p={4}
          overflow={"hidden"}
          border={"1px solid GrayText"}
          rounded={8}
          _hover={{
            border: "1px solid yellow",
            transition: "300ms",
          }}
        >
          <Image
            maxW={"60px"}
            rounded="full"
            src={item.image}
            alt={item.alt}
            zIndex={"88"}
            transition={"300ms ease-in-out"}
          />
        </Box>
      </Flex>
    </motion.div>
  );
}

export default ItemSkill;