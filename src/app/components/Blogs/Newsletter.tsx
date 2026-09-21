import Button from "../Button";
import Container from "../Container";



export default function Newsletter() {
    return (
        <section className="bg-white py-[32px] md:py-[64px] pb-[64px] md:pb-[128px]">
            <Container>
                <div className="text-center max-w-6xl mx-auto">
                  {/* Title */}
                    <h2 className="                
                    font-heading
                    text-[22px]
                    md:text-[32px]
                    xl:text-[38px]
                    font-bold
                    md:leading-[42px]
                    xl:leading-[48px]
                    tracking-[-0.5px]
                    text-gray-900
                    text-center
                ">
                        Get A Slice Of Paradise
                        <span className="text-[#FF751F]"> In Your Inbox</span>
                    </h2>

                    {/* Description */}
                    <p className="                mt-4
                font-body
                font-regular
                text-[14px]
                leading-[26px]
                text-gray-700
                md:mt-8
                md:text-[16px]
                lg:leading-[30px]
                text-center
        ">
                    Sign up for our newsletter to receive exclusive offers, seasonal updates,
                    and travel inspiration. 
                    <br />
                    We promise not to spam.
                    </p>

                    {/* Form */}
                    <form
                    action="https://digitalescapeslk.us9.list-manage.com/subscribe/post?u=5670b29db76c562f712305898&id=d37ac9142b&f_id=001b50e1f0"
                    method="post"
                    target="_blank"
                    className="mt-4 md:mt-14 flex flex-col md:flex-row items-center justify-center gap-6"
                    >
                    {/* Email Input */}
                    <input
                        type="email"
                        name="EMAIL"
                        placeholder="Your Email Address"
                        required
                        className="w-full md:w-[420px] px-5 py-3 rounded-full border border-gray-300 outline-none text-[14px] font-body"
                    />

                    {/* Bot protection field (Mailchimp requirement) */}
                    <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                        <input
                        type="text"
                        name="b_5670b29db76c562f712305898_d37ac9142b"
                        tabIndex={-1}
                        defaultValue=""
                        />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit">
                        Subscribe
                    </Button>
                    </form>
                </div>
            </Container>
        </section>
    )
}