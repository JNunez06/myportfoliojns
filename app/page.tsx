"use client"

import { CoverParticles } from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";
import CircleImage from "@/components/circle-image";

export default function Home() {
  return (
    <main>
      <TransitionPage />

      <div className="
        relative min-h-screen
        bg-no-repeat
        bg-gradient-cover-light 
        dark:bg-gradient-cover-dark
        overflow-hidden
      ">

        {/* Partículas */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          <CoverParticles />
        </div>

        {/* Imagen decorativa — oculta en móvil */}
        <div className="
          absolute inset-0
          flex justify-center items-center
          z-10 pointer-events-none
        ">
          <CircleImage />
        </div>

        {/* Contenido principal */}
        <div className="
          relative z-20
          flex justify-center
          px-4
          pt-24 md:pt-20
        ">
          <Introduction />
        </div>

      </div>
    </main>
  );
}
