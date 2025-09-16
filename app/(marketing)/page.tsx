import { Hero } from "@/components/marketing/hero"
import { Services } from "@/components/marketing/services"
import { About } from "@/components/marketing/about"
import { Portfolio } from "@/components/marketing/portfolio"
import { CTA } from "@/components/marketing/cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <CTA />
    </>
  )
}