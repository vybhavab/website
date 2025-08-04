import { Github, Linkedin, Mail, Twitter, Camera } from "lucide-react";

export const personalData = {
  name: "Vybhav Achar Bhargav",
  tagline: "@vybhavab on the internet",
  socials: [
    { name: "GitHub", url: "https://github.com/VybhavAB", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com/in/VybhavAB", icon: Linkedin },
    { name: "Email", url: "mailto:VybhavAB@gmail.com", icon: Mail },
    { name: "Twitter", url: "https://twitter.com/vybhavab", icon: Twitter },
    { name: "Unsplash", url: "https://unsplash.com/@vybhavab", icon: Camera },
  ],
  workExperience: [
    {
      company: "Glyf",
      role: "Founding Engineer",
      period: "Present",
      domain: "https://glyf.space",
      description: "Bringing AI to motion graphics",
    },
    {
      company: "Tiktok",
      role: "UI Software Engineer",
      period: "April 2022 – August 2024",
      domain: "https://effecthouse.tiktok.com",
      description: "Built Effect House, Tiktok's filter creation platform",
    },
    {
      company: "Edible Arrangements",
      role: "Software Engineering Intern",
      period: "June 2021 – March 2022",
      domain: "https://www.ediblearrangements.com/",
      description:
        "Replatformed a legacy web application to React. Built out a back of house system for a edible stores",
    },
  ],
};
