import * as React from "react";
import ProjectCard from "../components/project-card";
import ExerciseCard from "../components/exercise-card";
import TechCard from "../components/tech-card";

const components = {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, bg, children, image, ...props }) => (
    <ProjectCard {...props} image={image} link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
  // eslint-disable-next-line react/display-name
  ExerciseCard: ({ link, title, bg, children, image, ...props }) => (
    <ExerciseCard {...props} image={image} link={link} title={title} bg={bg}>
      {children}
    </ExerciseCard>
  ),
  // eslint-disable-next-line react/display-name
  TechCard: ({ link, title, bg, children, image, ...props }) => (
    <TechCard {...props} title={title} image={image} bg={bg} />
  ),
};

export default components;
