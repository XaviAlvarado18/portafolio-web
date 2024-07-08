import { Box, Stack, Button } from "@chakra-ui/react";
import MenuItem from "./MenuItem";
import React, { useState } from "react";
import { ButtonPrimary } from "../button";

const MenuLinks = ({ open, toggle, scrollToSection }) => {
  const [language, setLanguage] = useState("English");

  const handleLanguageToggle = () => {
    setLanguage((prevLanguage) => (prevLanguage === "English" ? "Spanish" : "English"));
  };

  const dataNav = [
    { id: 1, text: language === "English" ? "Español" : "English", link: "language" },
  ];

  return (
    <Box
      display={{ base: open ? "block" : "none", md: "block" }}
      w={{ base: "100%", md: "auto" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={10}
        h={{ base: '100vh', md: 'auto' }}
        align="center"
        justify={{ base: "center", md: "space-between", lg: "flex-end" }}
        direction={{ base: "column", md: "row" }}
        pt={{ base: 8, md: 0, lg: 0 }}
      >
        {dataNav.map((item) => (
          <MenuItem
            key={item.id}
            scrollToSection={scrollToSection}
            onClick={toggle}
            _hover={{ color: "purple", transition: "300ms" }}
            to={item.link}
          >
            {item.text}
          </MenuItem>
        ))}
        <Button
          onClick={handleLanguageToggle}
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
          {language}
        </Button>
      </Stack>
    </Box>
  );
};

export default MenuLinks;