import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Container from "../Container";

function getYoutubeEmbedUrl(url?: string) {
  if (!url) return null;

  try {
    const parsed = new URL(url);

    // youtube.com/watch?v=VIDEO_ID
    if (parsed.hostname.includes("youtube.com")) {
      const videoId = parsed.searchParams.get("v");
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    }

    // youtu.be/VIDEO_ID
    if (parsed.hostname.includes("youtu.be")) {
      const videoId = parsed.pathname.replace("/", "");
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    }

    return null;
  } catch {
    return null;
  }
}

export default function GalleryTab({ villa }: { villa: any }) {
  if (!villa.gallery?.length) {
    return <div className="text-sm text-gray-600">No gallery items yet.</div>;
  }

  return (
    <div className="py-10 md:py-20">
      <Container>
      {villa.gallery.map((item: any, i: number) => {
        const isYoutube = item.type === "youtube";
        const embedUrl = getYoutubeEmbedUrl(item.youtubeUrl);
        const img = item.image ? urlFor(item.image).width(1400).quality(80).url() : "";

        return (
          <div
            key={i}
            className="rounded-[18px] overflow-hidden bg-gray-100 border border-gray-100"
          >
            <div className="relative w-full h-[280px] md:h-[600px]">
              {isYoutube ? (
                embedUrl ? (
                  <iframe
                    src={embedUrl}
                    title={item.title || `YouTube video ${i + 1}`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-sm text-gray-500 px-4 text-center">
                    Invalid YouTube link
                  </div>
                )
              ) : img ? (
                <Image
                  src={img}
                  alt={item.title || `Gallery ${i + 1}`}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-sm text-gray-500">
                  No image found
                </div>
              )}
            </div>
          
          </div>
        );
      })}
      </Container>
    </div>
    
  );
}