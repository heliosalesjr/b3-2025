import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import EncerramentoContentSection from "@/components/EncerramentoContentSection"
export default function Diagnostico() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main >
        <Hero
                title="Encerramento"
                subtitle="Como funciona o programa “Aprendendo a lidar com dinheiro” da BEĨ Educação e a metodologia de aplicação do material"
                />
       
       <EncerramentoContentSection />
      </main>
      <Footer />
    </div>
  )
}
