"use client";

import { useState } from "react";
import { dataAboutPage } from "@/data";
import { ChevronRight } from "lucide-react";

const TimeLine = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="relative max-w-4xli mx-auto mt-5">
      {/* línea vertical */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-orange-500/40" />

      <div className="flex flex-col gap-10">
        {dataAboutPage.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div key={item.id} className="relative flex items-start gap-6 group">
              {/* punto */}
              <div className="relative z-10 flex flex-col items-center w-10 md:w-32 shrink-0">
                <div className="px-3 py-1 text-xs font-semibold rounded-full bg-sky-500/90 text-white mb-3">
                  {item.date.toUpperCase()}
                </div>
                <div className="w-4 h-4 rounded-full bg-orange-500 border-4 border-neutral-900 shadow-lg" />
              </div>

              {/* card */}
              <div
                onClick={() => toggle(item.id)}
                className="flex-1 cursor-pointer rounded-2xl border border-neutral-800 bg-neutral-400/80  dark:bg-neutral-900/80  backdrop-blur p-3 md:p-3 shadow-xl transition-all duration-300 hover:border-orange-500/60 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-orange-400 font-semibold mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                  <ChevronRight
                    className={`text-orange-500 opacity-70 transition-transform duration-300 ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  />
                </div>

                {/* descripción desplegable */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-neutral-800 dark:text-neutral-200 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeLine;