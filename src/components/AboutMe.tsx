import React, { ReactElement } from 'react';

const AboutMe = ():ReactElement => (
  <div>
    <h1 className="text-xl lg:text-2xl">What I&apos;m up to</h1>
    <ul className="list-disc list-inside">
      <li>creating exciting tools for users on effect house</li>
      <li>building fun webapps</li>
      <li>capturing memories through photography</li>
      <li>experimenting with new coffee brewing systems</li>
    </ul>
  </div>
);

export default AboutMe;
