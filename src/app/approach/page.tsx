import ApproachCTA from "@/Component/section/approach/ApproachCTA";
import ApproachHero from "@/Component/section/approach/ApproachHero";
import BuildingBridges from "@/Component/section/approach/BuildingBridges";
import FourCs from "@/Component/section/approach/FourCs";
import Transformation from "@/Component/section/approach/Transformation";
import WhatWeBelieve from "@/Component/section/approach/WhatWeBelieve";

export default function approch() {
  return (
    <main className="flex-1">
        <ApproachHero/>
        <FourCs/>
        <Transformation/>
        <WhatWeBelieve/>
        <BuildingBridges/>
        <ApproachCTA/>
    </main>
  );
}