import BlogPage from "../components/Blogs/Blogs";
import FeaturedStory from "../components/Blogs/FeaturedStory";
import BlogsHero from "../components/Blogs/hero";
import Inspired from "../components/Blogs/Inspired";
import Newsletter from "../components/Blogs/Newsletter";
import Navbar from "../components/Navbar";

export const metadata = {
    title: "The Journal | Travel Tips, Guides and Stories from Bentota Sri Lanka",
    description: "Read our latest guides on Bentota travel. From the best time to visit Sri Lanka to planning a family reunion or a yoga retreat. The official blog of Scenery Villas.",
}

export default function BlogsPage() {
    return (
        <>
            <Navbar />
            <BlogsHero />
            <FeaturedStory />
            <BlogPage />
            <Newsletter />
            <Inspired />
        </>
    )
}