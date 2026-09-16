import FAQSection from "../components/Contact/FAQSection";
import InquirySection from "../components/Contact/InquirySection";
import WhereWeAreSection from "../components/Contact/WhereWeAreSection";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
    title: "Contact Scenery Villas | Inquiries and Reservations Bentota",
    description: "Get in touch with Scenery Villas. Book your private villa in Bentota, inquire about group rates, or ask us about local experiences. We are here to help.",
}

export default function Contact() {
    return(
        <>
        <Navbar />
        <PageHero
            title="Let's Plan Your Escape"
            paragraph="Have a villa in mind or need guidance? Our team can help you by phone, email, or form."
            image="https://res.cloudinary.com/vjp4gpfl/image/upload/v1789197003/e6edd39f87350afd433a4f94d74631795fbd21be.webp"
         />
        <InquirySection />
        <FAQSection />
        <WhereWeAreSection />
        <WhatsAppButton />
        </>
    )
}