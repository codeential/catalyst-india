import Hero from "@/Component/section/home/Hero";
import Values from "@/Component/section/home/Values";
import Approach from "@/Component/section/home/OurApproach";
import OurWorkToday from "@/Component/section/home/OurWorkToday";
import Legacy from "@/Component/section/home/Legacy";
import OurEcosystem from "@/Component/section/home/OurEcosystem";
import OurImpact from "@/Component/section/home/OurImpact";
import BuildGreatCity from "@/Component/section/home/BuildGreatCity";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <Values />
      <Approach />
      <OurWorkToday/>
      <Legacy/>
      <OurEcosystem/>
      <OurImpact/>
      <BuildGreatCity/>
    </main>
  );
}