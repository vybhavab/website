import React, { ReactElement } from 'react';
import Projects from 'components/Projects';
import ProjectType from 'types/project.types';
import projectsData from 'data/projects';

interface Props {
  projects: ProjectType[]
}

const ProjectsPage = ({ projects }:Props):ReactElement => (
  <div className="flex flex-wrap place-content-center">
    {projects.map((project) => (
      <Projects project={project} key={project.name} />
    ))}
  </div>
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticProps() {
  return {
    props: {
      projects: projectsData,
    },
  };
}

export default ProjectsPage;
