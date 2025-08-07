import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import WhContentSection from "@/components/WhContentSection"

export default function Modulo4() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main >
        <Hero
                title="Ferramenta 5W2H"
                subtitle="Como funciona o programa “Aprendendo a lidar com dinheiro” da BEĨ Educação e a metodologia de aplicação do material"
                />
        
        <WhContentSection />
      </main>
      <Footer />
    </div>
  )
}

