import Button from "../Button";
import Container from "../Container";



export default function Newsletter() {
    return (
        <section className="py-20">
            <Container>
                <div className="text-center max-w-6xl mx-auto">
                  {/* Title */}
                    <h2 className="font-[timesTen] text-[20px] md:text-[36px] xl:text-[46px]  leading-tight italic">
                        Get A Slice Of Paradise
                        <span className="not-italic font-semibold"> In Your Inbox</span>
                    </h2>

                    {/* Description */}
                    <p className="mt-8 font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] text-gray-700 leading-relaxed">
                    Sign up for our newsletter to receive exclusive offers, seasonal updates,
                    and travel inspiration. We promise not to spam.
                    </p>

                    {/* Form */}
                    <form className="mt-14 flex flex-col md:flex-row items-center justify-center gap-6">

                        {/* Email Input */}
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className="w-full md:w-[420px] px-5 py-4 rounded-full border border-gray-300 outline-none text-[14px] font-[helvetica]"
                        />

                        {/* Button */}
                        <Button
                            type="submit"                        >
                            Subscribe
                        </Button>

                    </form>
                </div>
            </Container>
        </section>
    )
}