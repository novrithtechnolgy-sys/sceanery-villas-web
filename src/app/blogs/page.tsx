import BlogPage from "../components/Blogs/Blogs";
import FeaturedStory from "../components/Blogs/FeaturedStory";
import BlogsHero from "../components/Blogs/hero";
import Inspired from "../components/Blogs/Inspired";
import Newsletter from "../components/Blogs/Newsletter";
import Navbar from "../components/Navbar";


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