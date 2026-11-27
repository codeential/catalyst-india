import ContactDetails from "@/Component/section/contact/ContactDetails";
import ContactForm from "@/Component/section/contact/ContactForm";
import ContactHero from "@/Component/section/contact/ContactHero";
import StayConnected from "@/Component/section/contact/StayConnected";
import WorkWithUs from "@/Component/section/contact/WorkWithUs";

export default function contact(){
    return(
        <>
            <ContactHero/>
            <ContactDetails/>
            <ContactForm/>
            <WorkWithUs/>
            <StayConnected/>
        </>
    )
}