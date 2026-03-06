import ContactQuickLinks from "../components/Contact/ContactQuickLinks";
import FAQSection from "../components/Contact/FAQSection";
import ContactHero from "../components/Contact/hero";
import InquirySection from "../components/Contact/InquirySection";
import QuickChat from "../components/Contact/quickchat";
import WhereWeAreSection from "../components/Contact/WhereWeAreSection";
import Navbar from "../components/Navbar";



export default function Contact() {
    return(
        <>
        <Navbar />
        <ContactHero />
        <ContactQuickLinks />
        <InquirySection />
        <FAQSection />
        <WhereWeAreSection />
        <QuickChat />
        </>
    )
}