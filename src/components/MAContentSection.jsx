import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import FadeInWhenVisible from "./FadeInWhenVisible"

import MatrizSmart from './content/MatrizSmart'
import SmartQuiz from './content/SmartQuiz'
import MetAvaIntro from './content/MetAvaIntro'
import MetAvErro from './content/MetAvErro'
import MetAvaTipos from './content/MetAvaTipos'
import MetAvaAt from './content/MetAvaAt'


const MAContentSection = () => {
  return (
    <section id="content" className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">
          <FadeInWhenVisible>
            <MetAvaIntro />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <MetAvErro />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <MetAvaTipos />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <MetAvaAt />
          </FadeInWhenVisible>
          {/* Next Page Button */}
          <div className="flex justify-center mt-8">
            <Button asChild>
              <Link href="/5wh2">Próxima Página: Ferramenta 5W2H</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MAContentSection