import EcosystemCta from "@/Component/section/ecosystem/EcosystemCta";
import EcosystemHero from "@/Component/section/ecosystem/EcosystemHero";
import EcosystemMap from "@/Component/section/ecosystem/EcosystemMap";
import EcosystemPartners from "@/Component/section/ecosystem/EcosystemPartners";
import EcosystemShared from "@/Component/section/ecosystem/EcosystemShared";

export default function work() {
  return (
    <main className="flex-1">
        <EcosystemHero/>
        <EcosystemMap/>
        <EcosystemPartners/>
        <EcosystemShared/>
        <EcosystemCta/>
    </main>
  );
}