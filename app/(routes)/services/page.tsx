import AvatarServices from "@/components/avatar-services";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import { MessageCircle } from "lucide-react";


const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            <AvatarServices />
            <div className=" flex flex-col items-center justify-center mt-40 max-w-5xl gap-6 mx-auto md:grid-cols-2 sm:grid">
                <div className="max-w-[450px]">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary"> servicios.</span></h1>
                    <p className="flex flex-col justify-center mb-3 text-1xl text-black dark:text-white">Ofrezco servicios de desarrollo web frontend especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, como HTML, CSS y JavaScript, diseño interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea.</p>
                    <a
                        href="https://wa.me/51928161600?text=Hola,%20vi%20tu%20portafolio%20y%20quiero%20contactarte"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit mx-auto md:mx-0 text-black dark:text-white border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary"
                    >
                        <span >Contáctame al WhatsApp</span>
                        <MessageCircle size={20} />
                    </a>

                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;