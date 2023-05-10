import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IconLink } from "./IconLink";
import Icons from "./Icons";
import { variants } from "../../constants/variants";

export const SocialLinks = ({ size }) => {
  return (
    <Flex gap={5} my={5}>
      {Icons.map((item, index) => (
        <motion.div
        key={item.id}
        initial={"hidden"}
        whileInView={"visible"}
        custom={{ delay: (index + 1) * 0.05 }}
        variants={variants}
        viewport={{ once: false }}
        >
          <IconLink
            size={size}
            href={item.href}
            icon={item.icon}
          />
        </motion.div>
      ))}
    </Flex>
  );
};