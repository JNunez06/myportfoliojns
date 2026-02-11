"use client"

import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const AboutMePage = () => {
    return (
        <>
            <TransitionPage /> 
            <ContainerPage offsetTop="mt-40 md:mt-28">
                <Avatar />
                <h1 className="flex items-center justify-center text-center md:text-left text-2xl md:text-5xl mt-6 md:mt-5 px-4">
                    Toda mi{' '} 
                    <span className="font-bold text-secondary">
                        trayectoria profesional
                    </span>
                </h1>
                <TimeLine />

            </ContainerPage>
        </>
    );
}

export default AboutMePage;