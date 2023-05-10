import { Flex } from "@chakra-ui/react";
import { Waveform } from "@uiball/loaders";
import React from "react";

const Loader = () => {
 
  return <Flex h={{base: "80vh", md: '100vh'}} w={{base: '100vw', md: '100%'}} justifyContent={"center"} alignItems={"center"}>
    <Waveform size={40} lineWeight={3.5} speed={1} color="#5800FF" />
  </Flex>
};

export default Loader;