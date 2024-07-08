import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import MenuLinksFooter from "./MenuLinksFooter";
import MenuToggle from "./MenuToggle";
import NavContainer from "./NavContainer";
import React from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => setScrollPosition(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const sectionPosition = section.offsetTop;

      window.scrollTo({
        top: sectionPosition,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div animate={{ y: [-50, 0] }} transition={{ duration: 0.3 }}>
      <Footer>
        <NavContainer>
          <MenuLinksFooter
            open={open}
            toggle={toggle}
            scrollToSection={scrollToSection}
          />
          <MenuToggle toggle={toggle} isOpen={open} />
        </NavContainer>
      </Footer>
    </motion.div>
  );
}

export default Navbar;