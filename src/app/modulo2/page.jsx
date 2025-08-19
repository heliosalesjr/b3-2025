import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import Modulo2ContentSection from "@/components/Modulo3ContentSection"


export default function Modulo2() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main >
      <Hero
        title="O Módulo 3"
        subtitle="Como planejar aulas e orientar os estudantes a realizar os projetos em sala de aula"
        />
        
      <Modulo2ContentSection />

      </main>
      <Footer />
    </div>
  )
}

