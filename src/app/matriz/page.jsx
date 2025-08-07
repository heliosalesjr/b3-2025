import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import MatrizContentSection from "@/components/MatrizContentSection"

export default function Modulo2() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main >
        <Hero
                title="Matriz de Habilidades"
                subtitle="Como funciona o programa “Aprendendo a lidar com dinheiro” da BEĨ Educação e a metodologia de aplicação do material"
                />
       
        <MatrizContentSection />
      </main>
      <Footer />
    </div>
  )
}

