"use client"

import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";
import { MessageCircle } from "lucide-react";

const Introduction = () => {
    return (
        <div className="z-20 w-full flex flex-col items-center justify-center">
            
            <div className="
                relative z-20
                grid items-center
                grid-cols-1 md:grid-cols-2
                px-6 py-10
                md:px-20 md:py-20
            ">

                {/* AVATAR — pequeño en móvil, absoluto en desktop */}
                <Image
                    src="/avatarj.png"
                    priority
                    width={300}
                    height={300}
                    alt="Avatar"
                    className="
                        relative
                        justify-self-center
                        mb-4
                        pt-4
                        w-80 h-80
                        md:w-[300px] md:h-[300px]
                        md:absolute
                        md:left-1/2 md:top-1/2
                        md:translate-x-[20%]
                        md:translate-y-[-55%]
                        pointer-events-none
                    "
                />

                {/* TEXTO + BOTONES */}
                <div className="flex flex-col justify-center max-w-md">

                    <h1 className="
                        mb-4
                        text-lg
                        md:text-4xl
                        leading-tight
                        text-black dark:text-white
                        text-center md:text-left
                        md:mb-10
                    ">
                        Si puedes imaginarlo, <br />

                        <TypeAnimation
                            sequence={[
                                'puedes crearlo con código',
                                1000,
                                'puedes mejorarlo',
                                1000,
                                'puedes ponerlo en marcha',
                                1000,
                                'puedes construirlo',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="
                        mx-auto
                        mb-3
                        text-sm
                        md:text-xl
                        text-black dark:text-white
                        text-center md:text-left
                        max-w-[380px]
                        md:mx-0 md:mb-8
                    ">
                        Desarrollador de software orientado a calidad y seguridad,
                        enfocado en construir y mantener soluciones tecnológicas
                        funcionales y eficientes.
                    </p>

                    {/* BOTONES */}
                    <div className="
                        flex flex-col
                        sm:flex-row
                        items-center
                        justify-center md:justify-start
                        gap-2 md:gap-10
                    ">

                        <Link
                            href="/portfolio"
                            className="
                                px-3 py-2
                                my-2 md:my-5
                                text-sm md:text-md
                                border-2
                                rounded-xl
                                transition-all
                                w-fit
                                text-black dark:text-white
                                border-secondary
                                hover:shadow-xl hover:shadow-secondary
                            "
                        >
                            Ver proyectos
                        </Link>

                        <a
                            href="https://wa.me/51928161600?text=Hola,%20vi%20tu%20portafolio%20y%20quiero%20contactarte"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                flex items-center gap-2
                                px-3 py-2
                                my-2 md:my-5
                                text-sm md:text-md
                                border-2
                                rounded-xl
                                transition-all
                                w-fit
                                text-black dark:text-white
                                border-secondary
                                hover:shadow-xl hover:shadow-secondary
                            "
                        >
                            <span>WhatsApp</span>
                            <MessageCircle size={18} />
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
