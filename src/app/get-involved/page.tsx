import GetInvolvedCta from "@/Component/section/get-involved/GetInvolvedCta";
import GetInvolvedEnquiry from "@/Component/section/get-involved/GetInvolvedEnquiry";
import GetInvolvedHero from "@/Component/section/get-involved/GetInvolvedHero";
import GetInvolvedInitiatives from "@/Component/section/get-involved/GetInvolvedInitiatives";
import GetInvolvedRoutes from "@/Component/section/get-involved/GetInvolvedRoutes";
import GetInvolvedVolunteer from "@/Component/section/get-involved/GetInvolvedVolunteer";
import WaysToContribute from "@/Component/section/get-involved/WaysToContribute";

export default function getinvolved() {
  return (
    <main className="flex-1">
        <GetInvolvedHero/>
        <GetInvolvedRoutes/>
        <WaysToContribute/>
        <GetInvolvedInitiatives/>
        <GetInvolvedEnquiry/>
        <GetInvolvedVolunteer/>
        <GetInvolvedCta/>
    </main>
  );
}