"use client"

import Link from "next/link";

import { itemsNavbar } from "@/data";

import { MotionTransition } from "./transition-component";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const router = usePathname()

    return (
        <MotionTransition position="right" className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
            <nav>
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-slate-200 text-black dark:bg-slate-500  backdrop-blur-sm">
                    {itemsNavbar.map((item) => (    
                        <div
                            key={item.id}
                            className={`flex items-center justify-center px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-stone-500 ${router === item.link && 'bg-stone-500'}`}
                            data-tooltip-target="tooltip-default">
                            <Link href={item.link}>{item.icon} </Link>
                            <Link href={item.link}>{item.title} </Link>
                        </div>
                    ))}
                </div>
            </nav>
        </MotionTransition>
    );
}

export default Navbar;