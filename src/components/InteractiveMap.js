"use client";

import { useState, useEffect } from "react";

export default function InteractiveMap() {
  const [activeHub, setActiveHub] = useState("dubai");
  const [svgContent, setSvgContent] = useState("");
  const [loading, setLoading] = useState(true);

  const hubs = {
    dubai: {
      id: "AE",
      name: "Dubai (HQ)",
      role: "Global Procurement & Logistics Hub",
      coverage: "Middle East & East Africa routes",
      coords: { x: "62.68%", y: "58.39%" },
      coordsRaw: { x: 632.89, y: 388.87 }
    },
    riyadh: {
      id: "SA",
      name: "Riyadh Office",
      role: "Regional Distribution & Industrial Supply",
      coverage: "Gulf Cooperation Council (GCC)",
      coords: { x: "59.97%", y: "56.76%" },
      coordsRaw: { x: 605.49, y: 378.03 }
    },
    nairobi: {
      id: "KE",
      name: "Nairobi Hub",
      role: "East Africa Logistics Terminal",
      coverage: "Kenya, Uganda, Tanzania, Rwanda",
      coords: { x: "58.68%", y: "67.85%" },
      coordsRaw: { x: 592.44, y: 451.82 }
    },
    johannesburg: {
      id: "ZA",
      name: "Johannesburg Terminal",
      role: "Southern Africa Procurement Center",
      coverage: "South Africa, Mozambique, Zambia",
      coords: { x: "55.73%", y: "79.14%" },
      coordsRaw: { x: 562.70, y: 527.05 }
    },
    lagos: {
      id: "NG",
      name: "Lagos Gateway",
      role: "West Africa Distribution Node",
      coverage: "Nigeria, Ghana, emerging West Africa markets",
      coords: { x: "50.82%", y: "63.72%" },
      coordsRaw: { x: 513.08, y: 424.34 }
    },
  };

  useEffect(() => {
    fetch("/world-low.svg")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load map data");
        return res.text();
      })
      .then((data) => {
        setSvgContent(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative w-full aspect-[1009.67/665.96] min-h-[380px] bg-[#00112b] rounded-2xl overflow-hidden shadow-2xl border border-white/5 group/map">
      {/* Dynamic Style Injection for Active Country Highlight */}
      {!loading && (
        <style dangerouslySetInnerHTML={{ __html: `
          #${hubs[activeHub].id} {
            fill: #1d4d8c !important;
            stroke: #D4A017 !important;
            stroke-width: 1.5px !important;
            filter: drop-shadow(0 0 8px rgba(212, 160, 23, 0.5));
            transition: all 0.5s ease;
          }
        `}} />
      )}

      {/* Background World Map Loader */}
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-[#00112b]">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-4 border-t-[#D4A017] border-white/10 rounded-full animate-spin"></div>
            <span className="text-xs text-gray-400 tracking-wider">Loading global network...</span>
          </div>
        </div>
      ) : (
        <div
          className="w-full h-full [&>svg]:w-full [&>svg]:h-full [&_path]:fill-[#091f3d] [&_path]:stroke-[#13315a] [&_path]:stroke-[0.6] [&_path]:transition-all [&_path]:duration-300 hover:[&_path]:fill-[#0e2c54]"
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      )}

      {/* Flight Paths & Connection Lines */}
      {!loading && (
        <svg
          viewBox="0 0 1009.6727 665.96301"
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        >
          <defs>
            <linearGradient id="route-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4A017" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D4A017" stopOpacity="0.2" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Connection Lines from Dubai (HQ) to other hubs */}
          {Object.entries(hubs).map(([key, hub]) => {
            if (key === "dubai") return null;
            const isActive = activeHub === key || activeHub === "dubai";
            
            // Generate nice curves from Dubai HQ (632.89, 388.87) to the target hub
            let pathD = "";
            if (key === "riyadh") {
              pathD = "M 632.89 388.87 Q 619 373 605.49 378.03";
            } else if (key === "nairobi") {
              pathD = "M 632.89 388.87 Q 622 425 592.44 451.82";
            } else if (key === "johannesburg") {
              pathD = "M 632.89 388.87 Q 615 470 562.70 527.05";
            } else if (key === "lagos") {
              pathD = "M 632.89 388.87 Q 568 395 513.08 424.34";
            }

            return (
              <g key={`route-${key}`}>
                {/* Base curve line */}
                <path
                  d={pathD}
                  fill="none"
                  stroke={isActive ? "#D4A017" : "#0e346b"}
                  strokeWidth={isActive ? "1.5" : "0.75"}
                  strokeDasharray={isActive ? "4,4" : "none"}
                  className="transition-all duration-500"
                  opacity={isActive ? "0.85" : "0.3"}
                />

                {/* Glowing flow animation particle (Airplane) */}
                {isActive && (
                  <g>
                    <animateMotion
                      dur={key === "riyadh" ? "2.2s" : key === "nairobi" ? "3.2s" : "4.2s"}
                      repeatCount="indefinite"
                      path={pathD}
                      rotate="auto"
                    />
                    <path
                      d="M14 12L7.33 19L5.33 19L8.67 12L3.33 12L1.33 14.67L0 14.67L0.67 12L0 9.33L1.33 9.33L3.33 12L8.67 12L5.33 5L7.33 5L14 12Z"
                      fill="#D4A017"
                      transform="translate(-8.4, -14.4) scale(1.2)"
                      filter="url(#glow)"
                    />
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      )}

      {/* Pulsing Interactive Markers */}
      {!loading &&
        Object.entries(hubs).map(([id, hub]) => {
          const isActive = activeHub === id;
          return (
            <button
              key={id}
              onClick={() => setActiveHub(id)}
              className="absolute group/pin cursor-pointer -translate-x-1/2 -translate-y-1/2 z-20 focus:outline-none"
              style={{ left: hub.coords.x, top: hub.coords.y }}
            >
              {/* Outer pulsing ring */}
              <span
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex h-8 w-8 rounded-full opacity-75 transition-all duration-500 ${
                  isActive
                    ? "animate-ping bg-[#D4A017]"
                    : "bg-blue-400/10 group-hover/pin:bg-[#D4A017]/30"
                }`}
              ></span>
              {/* Solid core indicator */}
              <span
                className={`relative inline-flex rounded-full h-4 w-4 border-2 shadow-lg transition-all duration-300 ${
                  isActive
                    ? "bg-[#D4A017] border-white scale-125 shadow-[#D4A017]/50"
                    : "bg-[#00112b] border-[#D4A017] group-hover/pin:bg-[#D4A017] group-hover/pin:border-white"
                }`}
              ></span>
              
              {/* Tiny Tooltip label */}
              <span className="absolute left-1/2 -top-7 -translate-x-1/2 bg-[#001c45]/90 border border-white/10 px-2 py-0.5 rounded text-[10px] text-white font-semibold whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity duration-300 shadow-md">
                {hub.name}
              </span>
            </button>
          );
        })}

      {/* Info Card Drawer overlay (Glassmorphic design) */}
      <div className="absolute bottom-4 left-4 right-4 md:right-auto md:w-80 bg-[#00112b]/85 backdrop-blur-md border border-white/10 p-5 rounded-xl text-white shadow-2xl transition-all duration-500 z-30">
        <span className="font-label-md text-[9px] text-[#D4A017] uppercase tracking-widest block mb-1 font-bold">
          Active Logistics Hub
        </span>
        <h3 className="font-display-lg text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] animate-pulse"></span>
          {hubs[activeHub].name}
        </h3>
        <p className="font-body-md text-[11px] text-gray-300 mb-3.5 leading-relaxed min-h-[32px]">
          {hubs[activeHub].role}
        </p>
        <div className="border-t border-white/10 pt-3 flex items-center justify-between">
          <span className="text-[9px] text-gray-400 uppercase tracking-wider font-semibold">Route Coverage</span>
          <span className="text-[11px] text-[#D4A017] font-semibold">{hubs[activeHub].coverage}</span>
        </div>
      </div>
    </div>
  );
}

