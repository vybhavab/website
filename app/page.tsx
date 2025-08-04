import { personalData } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelloWorldAnimation } from "@/components/hello-world-animation";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main className="container mx-auto px-4 py-16 md:py-24">
        <section id="hero" className="flex flex-col items-center text-center mb-20 md:mb-28 gap-2">
          <HelloWorldAnimation />
          <h1 className="text-6xl md:text-8xl font-bold mt-4">I'm Vybhav</h1>
          <p className="text-xl text-muted-foreground/50">(VY-buv)</p>
          <p className="text-lg md:text-xl text-muted-foreground mt-6">
            I'm&nbsp;
            <Link
              href="https://www.keybase.io/vybhavab"
              className="underline font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              @vybhavab
            </Link>
            &nbsp;on the internet. Currently a Founding Engineer at&nbsp;
            <Link href="https://www.glyf.space" className="underline font-bold" target="_blank" rel="noopener">
              glyf
            </Link>
          </p>
        </section>

        <section id="experience" className="mb-20 md:mb-28">
          <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
            {personalData.workExperience.map((job, index) => (
              <Link href={job.domain} target="_blank" rel="noopener noreferrer" className="group h-full" key={index}>
                <Card className="w-full p-4 group-hover:bg-muted h-full transition-colors">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-baseline">
                      <p className="font-semibold">{job.role}</p>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                    </div>
                    <div className="text-xs text-muted-foreground">{job.period}</div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground">{job.description}</div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <footer id="contact" className="text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground mb-6">Find me on the web or drop me an email.</p>
          <div className="flex justify-center gap-4">
            {personalData.socials.map((social) => (
              <Button key={social.name} variant="outline" size="icon" asChild>
                <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </footer>
      </main>
    </div>
  );
}
