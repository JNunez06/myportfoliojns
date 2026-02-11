"use client"

import Image from 'next/image'

const CircleImage = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
            <Image src="/ondasbg.png"  width={1920}   height={1200} className="w-full h-full mx- mt-28" alt="Particles " />
        </div>

    );
}

export default CircleImage;