type DomeProps = { x: number; y: number; w: number; h: number; finial?: number };

/** Slightly bulbous Mughal dome on a lotus-petal band, with an optional finial. */
function Dome({ x, y, w, h, finial = 0 }: DomeProps) {
  const r = w / 2;
  const top = y - h;
  return (
    <g>
      <rect x={x - r - 2} y={y - 3} width={w + 4} height={3} />
      <path
        d={`M${x - r} ${y - 3}
            C${x - r * 1.2} ${y - h * 0.6} ${x - r * 0.4} ${top + h * 0.1} ${x} ${top}
            C${x + r * 0.4} ${top + h * 0.1} ${x + r * 1.2} ${y - h * 0.6} ${x + r} ${y - 3} Z`}
      />
      {finial > 0 && (
        <>
          <rect x={x - 0.75} y={top - finial} width={1.5} height={finial + 2} />
          <circle cx={x} cy={top - finial} r={2.5} />
        </>
      )}
    </g>
  );
}

/** Slender tapering minaret with a balcony and a small domed pavilion on top. */
function Minaret({ x, y, h, w = 10 }: { x: number; y: number; h: number; w?: number }) {
  const top = y - h;
  const half = w / 2;
  return (
    <g>
      <path
        d={`M${x - half - 2} ${y} L${x - half + 1} ${top + 16} L${x + half - 1} ${top + 16} L${x + half + 2} ${y} Z`}
      />
      <rect x={x - half - 3} y={top + 12} width={w + 6} height={4} />
      <rect x={x - half} y={top + 4} width={2.5} height={8} />
      <rect x={x + half - 2.5} y={top + 4} width={2.5} height={8} />
      <path d={`M${x - half - 1} ${top + 4} Q${x} ${top - 10} ${x + half + 1} ${top + 4} Z`} />
      <rect x={x - 0.75} y={top - 12} width={1.5} height={9} />
    </g>
  );
}

/** Small pillared pavilion (chhatri) with a dome and finial. */
function Chhatri({ x, y, w = 16, h = 24 }: { x: number; y: number; w?: number; h?: number }) {
  const half = w / 2;
  const slab = y - h;
  return (
    <g>
      <rect x={x - half} y={y - 3} width={w} height={3} />
      <rect x={x - half} y={slab} width={w} height={3} />
      <rect x={x - half + 1} y={slab + 3} width={2.5} height={h - 6} />
      <rect x={x - 1.25} y={slab + 3} width={2.5} height={h - 6} />
      <rect x={x + half - 3.5} y={slab + 3} width={2.5} height={h - 6} />
      <path d={`M${x - half - 1} ${slab} Q${x} ${slab - w * 0.9} ${x + half + 1} ${slab} Z`} />
      <rect x={x - 0.75} y={slab - w * 0.45 - 5} width={1.5} height={6} />
    </g>
  );
}

/** Humayun's-Tomb-style monument: stepped plinth, arched facade, drum, big dome, corner chhatris. */
function Tomb({ x, y }: { x: number; y: number }) {
  const bodyTop = y - 60;
  return (
    <g>
      <rect x={x - 100} y={y - 8} width={200} height={8} />
      <rect x={x - 90} y={y - 14} width={180} height={6} />
      {/* Facade with pointed-arch recesses cut out */}
      <path
        fillRule="evenodd"
        d={`M${x - 75} ${y - 14} V${bodyTop} H${x + 75} V${y - 14} Z
            M${x - 18} ${y - 14} V${y - 38} Q${x - 18} ${y - 52} ${x} ${y - 56} Q${x + 18} ${y - 52} ${x + 18} ${y - 38} V${y - 14} Z
            M${x - 58} ${y - 14} V${y - 34} Q${x - 58} ${y - 42} ${x - 50} ${y - 46} Q${x - 42} ${y - 42} ${x - 42} ${y - 34} V${y - 14} Z
            M${x + 42} ${y - 14} V${y - 34} Q${x + 42} ${y - 42} ${x + 50} ${y - 46} Q${x + 58} ${y - 42} ${x + 58} ${y - 34} V${y - 14} Z`}
      />
      <rect x={x - 36} y={y - 78} width={72} height={18} />
      <Dome x={x} y={y - 78} w={80} h={54} finial={18} />
      <Chhatri x={x - 62} y={bodyTop} />
      <Chhatri x={x + 62} y={bodyTop} />
    </g>
  );
}

/** Dome-topped gatehouse with a pointed arch. */
function Gatehouse({ x, y, w, domeH, finial }: { x: number; y: number; w: number; domeH: number; finial: number }) {
  const half = w / 2;
  const top = y - 36;
  return (
    <g>
      <path
        fillRule="evenodd"
        d={`M${x - half} ${y} V${top} H${x + half} V${y} Z
            M${x - 10} ${y} V${y - 18} Q${x - 10} ${y - 28} ${x} ${y - 32} Q${x + 10} ${y - 28} ${x + 10} ${y - 18} V${y} Z`}
      />
      <Dome x={x} y={top} w={w - 8} h={domeH} finial={finial} />
    </g>
  );
}

export default function Skyline({ className = "" }: { className?: string }) {
  const svgClass = "h-auto w-[38%] max-w-[300px] shrink-0 lg:max-w-[360px]";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between ${className}`}
    >
      {/* LEFT: tomb, minarets, gatehouse, chhatris */}
      <svg viewBox="0 0 500 220" className={svgClass} fill="currentColor">
        <rect x="0" y="200" width="500" height="20" />
        <Minaret x={30} y={200} h={105} />
        <Tomb x={165} y={200} />
        <Minaret x={292} y={200} h={90} />
        <Gatehouse x={370} y={200} w={60} domeH={36} finial={12} />
        <Chhatri x={440} y={200} w={14} h={34} />
        <Chhatri x={475} y={200} w={12} h={24} />
      </svg>

      {/* RIGHT: gatehouse, minarets, small dome, India Gate */}
      <svg viewBox="0 0 500 220" className={svgClass} fill="currentColor">
        <rect x="0" y="200" width="500" height="20" />
        <Chhatri x={22} y={200} w={14} h={30} />
        <Gatehouse x={100} y={200} w={64} domeH={42} finial={14} />
        <Minaret x={172} y={200} h={105} />
        <Minaret x={204} y={200} h={75} w={9} />
        <Gatehouse x={255} y={200} w={40} domeH={28} finial={10} />
        <Chhatri x={305} y={200} w={12} h={24} />

        {/* India Gate */}
        <rect x="355" y="190" width="130" height="10" />
        <path
          fillRule="evenodd"
          d="M368 190 L372 84 H468 L472 190 Z M396 190 V132 A24 24 0 0 1 444 132 V190 Z"
        />
        <rect x="362" y="76" width="116" height="8" />
        <rect x="374" y="68" width="92" height="8" />
        <rect x="386" y="62" width="68" height="6" />
        <path d="M398 62 Q420 44 442 62 Z" />
      </svg>
    </div>
  );
}