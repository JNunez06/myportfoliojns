"use client";

import { socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";
import ThemeToggle from "./themeToggle";

const Header = () => {
  

  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 inline-block w-full top-5 md:top-10"
    >
      <header>
        <div className="container justify-between max-w-6xl mx-auto md:flex items-center">

          <Link href="/">
            <h1 className="my-3 text-4xl leading-[32px] text-black dark:text-white font-bold text-center md:text-left">
              J<span className="text-secondary">DEV</span>
            </h1>
          </Link>
          
          <div className="flex items-center justify-center gap-7">  
          {socialNetworks.map(({ logo, src, id }) => (
              <Link
                key={id}
                href={src}
                target="_blank"
                className="transition-all duration-300 hover:text-secondary"
              >
                {logo}
              </Link>
            ))}
            <ThemeToggle/> 
          </div>

        </div>
      </header>
    </MotionTransition>
  );
};

export default Header;
