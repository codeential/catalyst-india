import OurWorkCta from "@/Component/section/work/OurWorkCta";
import OurWorkHero from "@/Component/section/work/OurWorkHero";
import OurWorkHowWeWork from "@/Component/section/work/OurWorkHowWeWork";
import OurWorkInitiatives from "@/Component/section/work/OurWorkInitiatives";
import OurWorkLegacy from "@/Component/section/work/OurWorkLegacy";

export default function work() {
  return (
    <main className="flex-1">
        <OurWorkHero/>
        <OurWorkInitiatives/>
        <OurWorkHowWeWork/>
        <OurWorkLegacy/>
        <OurWorkCta/>
    </main>
  );
}