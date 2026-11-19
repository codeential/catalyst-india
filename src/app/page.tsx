import Approach from "@/Component/section/home/Approach";
import Hero from "@/Component/section/home/Hero";
import Vision from "@/Component/section/home/Vision";
import BuildingBridges from "@/Component/section/home/BuildingBridges";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Approach/>
      <Vision />
      <BuildingBridges />
    </main>
  );
}