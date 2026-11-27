import DonateFaq from "@/Component/section/donate/DonateFaq";
import DonateForm from "@/Component/section/donate/DonateForm";
import DonateHero from "@/Component/section/donate/DonateHero";

export default function donate(){
    return(
        <main className="flex-1 ">
            <DonateHero/>
            <DonateForm/>
            <DonateFaq/>
         </main>
    )
}