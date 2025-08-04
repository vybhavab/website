import { personalData } from "@/lib/data"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HelloWorldAnimation } from "@/components/hello-world-animation"

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main className="container mx-auto max-w-3xl px-4 py-16 md:py-24">
        <section id="hero" className="text-center mb-20 md:mb-28">
          <HelloWorldAnimation />
          <h1 className="text-6xl md:text-8xl font-bold mt-4">I'm Vybhav</h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-6">{personalData.tagline}</p>
          <p className="text-md md:text-lg text-muted-foreground">{personalData.currentRole}</p>
        </section>

        <section id="about" className="mb-20 md:mb-28 text-center">
          <h2 className="text-3xl font-bold mb-8">Here's what I enjoy</h2>
          <div className="flex justify-center gap-2 flex-wrap max-w-2xl mx-auto">
            {personalData.interests.map((interest) => (
              <Badge key={interest} variant="secondary" className="text-md px-4 py-1">
                {interest}
              </Badge>
            ))}
          </div>
        </section>

        <section id="experience" className="mb-20 md:mb-28">
          <h2 className="text-3xl font-bold mb-8 text-center">My Journey</h2>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-full max-w-2xl space-y-4">
              {personalData.workExperience.map((job, index) => (
                <Card key={index} className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{job.role}</p>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">{job.period}</div>
                  </div>
                </Card>
              ))}
            </div>
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
  )
}
