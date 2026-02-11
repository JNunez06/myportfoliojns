"use client";

import { motion, useMotionValue, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function FuturisticPortfolioSlider({ data }) {
  const containerRef = useRef(null);

  const CARD_WIDTH = 280;
  const GAP = 32;
  const STEP = CARD_WIDTH + GAP;
  const travel = data.length * STEP;

  const SPEED = 25;  

  const x = useMotionValue(0);
  const controls = useAnimationControls();

  const [dragging, setDragging] = useState(false);
  const [mounted, setMounted] = useState(false);

   const startAutoScroll = async () => {
    const current = x.get();

    const remaining = Math.abs(-travel - current);
    const duration = (remaining / travel) * SPEED;

    await controls.start({
      x: -travel,
      transition: {
        duration,
        ease: "linear",
      },
    });

    x.set(0);

    controls.start({
      x: -travel,
      transition: {
        duration: SPEED,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !dragging) {
      startAutoScroll();
    }
  }, [mounted, dragging]);

  return (
    <div className="relative w-full overflow-hidden py-10 perspective-[1200px]">

      {/* glow fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent blur-2xl pointer-events-none" />

      <motion.div
        ref={containerRef}
        className="flex gap-8 w-max cursor-grab active:cursor-grabbing"
        style={{ x }}
        animate={controls}

        drag="x"
        dragConstraints={{ left: -travel, right: 0 }}
        dragElastic={0.08}
        dragMomentum={true}

        onDragStart={() => {
          setDragging(true);
          controls.stop();
        }}

        onDragEnd={() => {
          setDragging(false);
          // No llamar startAutoScroll aquí directamente
          // Se ejecutará automáticamente por el useEffect
        }}
      >
        {[...data, ...data].map((item, index) => (
          <motion.div
            key={`${item.id}-${index}`}
            whileHover={{
              scale: 1.1,
              rotateY: 10,
              z: 40,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative min-w-[280px] h-[360px] rounded-2xl overflow-hidden group
                       bg-black/40 backdrop-blur-xl border border-cyan-400/20 shadow-2xl
                       transform-gpu"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* glow animado */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              initial={false}
              whileHover={{ backgroundPosition: "200% 0%" }}
              transition={{ duration: 1.2 }}
              style={{
                backgroundImage:
                  "linear-gradient(120deg, transparent, rgba(0,255,255,0.25), transparent)",
                backgroundSize: "200% 100%",
              }}
            />

            {/* contenido */}
            <div className="absolute bottom-0 p-4 w-full">
              <h3 className="text-lg font-bold text-white mb-3 tracking-wide">
                {item.title}
              </h3>

              <div className="flex gap-3">
                <a
                  href={item.urlGithub}
                  target="_blank"
                  className="px-3 py-1 text-sm rounded-xl bg-purple-500/20 border border-purple-400/40 hover:bg-purple-400/30 transition"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* borde glow */}
            <div className="absolute inset-0 rounded-2xl border border-cyan-400/0 group-hover:border-cyan-400/60 transition" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}