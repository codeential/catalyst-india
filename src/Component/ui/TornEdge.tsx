type TornEdgeProps = {
  className?: string;
  /** Changes the shape of the tear. Any positive whole number works. */
  seed?: number;
};

const WIDTH = 1440;
const HEIGHT = 80;
const STEPS = 140;

function buildPath(seed: number) {
  let state = Math.abs(Math.floor(seed)) % 2147483647 || 1;
  const rand = () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };

  const stepW = WIDTH / STEPS;
  let y = HEIGHT * 0.5;
  const points: string[] = [];

  for (let i = 0; i <= STEPS; i++) {
    // Drift toward a random target so the edge wanders instead of zigzagging evenly
    const target = HEIGHT * (0.3 + rand() * 0.4);
    y = y * 0.55 + target * 0.45;
    // Occasional deeper bite out of the paper
    const bite = rand() > 0.93 ? rand() * HEIGHT * 0.22 : 0;

    const px = Math.min(WIDTH, Math.max(0, i * stepW + (rand() - 0.5) * stepW * 0.7));
    const py = Math.min(HEIGHT - 10, Math.max(6, y + bite));
    points.push(`${px.toFixed(1)} ${py.toFixed(1)}`);
  }

  return `M0 ${HEIGHT} L${points.join(" L")} L${WIDTH} ${HEIGHT} Z`;
}

export default function TornEdge({ className = "", seed = 7 }: TornEdgeProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      preserveAspectRatio="none"
      className={`pointer-events-none block w-full ${className}`}
    >
      <path d={buildPath(seed)} fill="currentColor" />
    </svg>
  );
}