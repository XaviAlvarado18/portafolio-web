import { Link, Button } from "@chakra-ui/react";
import React from "react";

export const ButtonPrimary = ({ children, href, ...rest }) => {
  return (
    <Link target={"_blank"}   _hover={{ textDecor: "none" }} href={href}>
      <Button {...rest}>{children}</Button>
    </Link>
  );
};