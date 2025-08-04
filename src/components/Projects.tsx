import React from 'react';
import ProjectType from 'types/project.types';
import { CodeIcon, GlobeIcon } from '@heroicons/react/outline';
import Link from 'next/link';

interface Props {
  project: ProjectType
}

const Project = ({ project }: Props): JSX.Element => (
  <div className="card w-96 md:w-1/3 bg-base-300 shadow-xl m-2">
    <div className="card-body">
      <h2 className="card-title">{project.name}</h2>
      <p>{project.description}</p>
      <div className="card-actions justify-end">
        <div className="contents overflow-y-auto">
          {project.linkToSite && (
            <Link href={project.linkToSite}>
              <div className="p-2 rounded-lg hover:bg-info hover:text-info-content">
                <GlobeIcon className="h-5 w-5" viewBox="0 0 24 24" />
              </div>
            </Link>
          )}
          {project.linkToSource && (
            <Link href={project.linkToSource}>
              <div className="p-2 rounded-lg hover:bg-info hover:text-info-content">
                <CodeIcon className="h-5 w-5" viewBox="0 0 24 24" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default Project;
