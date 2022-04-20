import * as React from "react";
import ProjectCard from "../components/project-card";
import ExerciseCard from "../components/exercise-card";

const components = {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, bg, children, ...props }) => (
    <ProjectCard {...props} link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
  // eslint-disable-next-line react/display-name
  ExerciseCard: ({ link, title, bg, children, ...props }) => (
    <ExerciseCard {...props} link={link} title={title} bg={bg}>
      {children}
    </ExerciseCard>
  ),
};

export default components;
