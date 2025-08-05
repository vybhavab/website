import { Mail, Camera } from "lucide-react";
import Github from "@/components/icons/github";
import Linkedin from "@/components/icons/linkedin";
import X from "@/components/icons/x";

export const personalData = {
  name: "Vybhav Achar Bhargav",
  tagline: "@vybhavab on the internet",
  socials: [
    { name: "GitHub", url: "https://github.com/vybhavab", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com/in/vybhavab", icon: Linkedin },
    { name: "Email", url: "mailto:vybhavab@gmail.com", icon: Mail },
    { name: "X", url: "https://x.com/vybhavab", icon: X },
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
