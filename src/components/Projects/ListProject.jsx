import { Stack } from "@chakra-ui/react";
import projectsData from "./projects";
import ProjectCard from "./projectCard";
import React from "react";

const Project = () => {
  return (
    <Stack
      spacing={{ base: 4, md: 8 }}
      px={{ base: 4, md: 8 }}
      direction={{ base: "column", md: "row" }}
      justify={"center"}
      align={"center"}
      wrap={"wrap"}
      rowGap={{base: 0, md: 8}}
    >
      {projectsData.map((project, index) => (
        <ProjectCard project={project} index={index} key={project.id} />
      ))}
    </Stack>
  );
};
export default Project;