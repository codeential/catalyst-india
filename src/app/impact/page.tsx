import ClosingCta from "@/Component/section/impact/ClosingCta";
import FeaturedStory from "@/Component/section/impact/FeaturedStory";
import ImpactHero from "@/Component/section/impact/ImpactHero";
import ImpactJourney from "@/Component/section/impact/ImpactJourney";
import ImpactStats from "@/Component/section/impact/ImpactStats";
import LeadershipNetwork from "@/Component/section/impact/LeadershipNetwork";
import MoreStories from "@/Component/section/impact/MoreStories";
import ReportsUpdates from "@/Component/section/impact/ReportsUpdates";

export default function work() {
  return (
    <main className="flex-1">
        <ImpactHero/>
        <ImpactStats/>
        <ImpactJourney/>
        <FeaturedStory/>
        <MoreStories/>
        <LeadershipNetwork/>
        <ReportsUpdates/>
        <ClosingCta/>
    </main>
  );
}