import Image from "next/image";
import { MotionTransition } from "./transition-component";

const AvatarServices = () => {
    return (
        <MotionTransition position='right' className="bottom-0 left-0 hidden md:inline-block md:absolute">
            <Image src="/servicesnew.png" width="400" height="400" className="w-20 h-50 " alt="Particles " />
        </MotionTransition>
    );
}

export default AvatarServices;