import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import SmartContentSection from "@/components/SmartContentSection"

export default function Smart() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main >
        <Hero
                title="Ferramentas SMART"
                subtitle="Como funciona o programa “Aprendendo a lidar com dinheiro” da BEĨ Educação e a metodologia de aplicação do material"
                />
        <SmartContentSection />
      </main>
      <Footer />
    </div>
  )
}

