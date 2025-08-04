import { Github, Linkedin, Mail, Twitter, Camera } from "lucide-react"

export const personalData = {
  name: "Vybhav Achar Bhargav",
  tagline: "I build things for the web.",
  currentRole: "I'm currently a founding engineer at Glyf, bringing AI into the world of motion-graphics.",
  interests: ["Coffee", "Speedrunning", "Photography", "Golf", "Building", "Learning"],
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
    },
    {
      company: "Bytedance",
      role: "UI Software Engineer",
      period: "April 2022 – Present",
    },
    {
      company: "Netsolace",
      role: "Software Engineering Intern",
      period: "June 2021 – March 2022",
    },
  ],
}
