"use client";

import { useEffect, useState, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";

export const CoverParticles = () => {
  const [init, setInit] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Init engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  // Detect dark mode (Tailwind class strategy)
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Config dinámica según tema
  const options = useMemo(() => {
    const particleColor = isDark ? "#ffffff" : "#0f172a";
    const linkColor = isDark ? "#ffffff" : "#0f172a";

    return {
      fpsLimit: 120,
      fullScreen: { enable: false },

      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
          resize: true,
        },
        modes: {
          push: {
            quantity: 5,
          },
          repulse: {
            distance: 160,
            duration: 0.5,
            speed: 1,
          },
        },
      },

      particles: {
        color: { value: particleColor },

        links: {
          color: linkColor,
          distance: 140,
          enable: true,
          opacity: 0.35,
          width: 1,
        },

        move: {
          enable: true,
          speed: 0.9,
          direction: "none",
          random: false,
          straight: false,
          outModes: { default: "bounce" },
        },

        number: {
          density: { enable: true, area: 900 },
          value: 70,
        },

        opacity: {
          value: 0.45,
        },

        shape: {
          type: "circle",
        },

        size: {
          value: { min: 1, max: 4 },
        },
      },

      detectRetina: true,
    };
  }, [isDark]);

  if (!init) return null;

  return (
    <div className="absolute inset-0 -z-10">
      <Particles id="tsparticles" options={options} />
    </div>
  );
};
