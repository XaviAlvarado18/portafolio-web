import { Box, Stack } from "@chakra-ui/react";
import { ButtonPrimary } from "../button";
import MenuItem from "./MenuItem";
import React from "react";

const MenuLinks = ({ open, toggle, scrollToSection }) => {

 
  const dataNav = [
    { id: 1, text: "Home", link: "home" },
    { id: 2, text: "Skills", link: "skills" },
    { id: 3, text: "Projects", link: "projects" },
    { id: 4, text: "Contact Me", link: "contact" },
  ];
  return (
    <Box
      display={{ base: open ? "block" : "none", md: "block" }}
      w={{ base: "100%", md: "auto" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={10}
        h={{base: '100vh', md: 'auto'}}
        align="center"
        justify={{ base: "center", md: "space-between", lg: "flex-end" }}
        direction={{ base: "column", md: "row" }}
        pt={{ base: 8, md: 0, lg: 0 }}
      >
       
        {dataNav.map((item) => (
          <MenuItem
            key={item.id}
            scrollToSection={
              scrollToSection
            }
            onClick={toggle}
            _hover={{ color: "purple", transition: "300ms" }}
            to={item.link}
          >
            {item.text}
          </MenuItem>
        ))}
        <ButtonPrimary
          href={
            "https://drive.google.com/file/d/1psLOPRLa6UMZdjR6flHY2p-oQN2kO7x8/view?usp=sharing"
          }
          rounded={"full"}
          bg={"purple"}
          color={"white"}
          fontWeight={"bold"}
          boxShadow="rgb(99 51 255 / 19%) 5px 5px 15px 5px"
          _hover={{
            opacity: 0.8,
            transform: "translateY(-5px)",
          }}
          _active={{ opacity: 0.5 }}
        >
          Download CV
        </ButtonPrimary>
      </Stack>
    </Box>
  );
};
export default MenuLinks;