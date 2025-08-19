import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import MonitoramentoContentSection from "@/components/MonitoramentoContentSection"

export default function Monitoramento() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main >
        <Hero
                title="Monitoramento"
                subtitle="Como funciona o programa “Aprendendo a lidar com dinheiro” da BEĨ Educação e a metodologia de aplicação do material"
                />
       
        <MonitoramentoContentSection />
      </main>
      <Footer />
    </div>
  )
}

