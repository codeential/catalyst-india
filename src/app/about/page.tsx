import AboutAffiliation from "@/Component/section/about/AboutAffiliation";
import AboutCta from "@/Component/section/about/AboutCta";
import AboutFounding from "@/Component/section/about/AboutFounding";
import AboutGovernance from "@/Component/section/about/AboutGovernance";
import AboutHero from "@/Component/section/about/AboutHero";
import AboutIntro from "@/Component/section/about/AboutIntro";
import AboutMission from "@/Component/section/about/AboutMission";

export default function about() {
  return (
    <main className="flex-1">
        <AboutHero/>
        <AboutIntro/>
        <AboutMission/>
        <AboutFounding/>
        <AboutAffiliation/>
        <AboutGovernance/>
        <AboutCta/>
    </main>
  );
}