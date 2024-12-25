import { ArrowRightIcon } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    title: "IELTS LIVE Batch",
    instructor: "Zawad Hasan Adib +4",
    imgUrl:
      "https://cdn.10minuteschool.com/images/thumbnails/ielts-live-batch-10-thumbnail.jpg",
    href: "/",
  },
  {
    title: "Spoken English Junior LIVE Batch",
    instructor: "Rukhsar Sanjaree +4",
    imgUrl:
      "https://cdn.10minuteschool.com/images/catalog/media/sej-thumbnial_1734278669669.jpg",
    href: "/",
  },
  {
    title: "ঘরে বসে Spoken English",
    instructor: "Munzereen Shahid",
    imgUrl:
      "https://cdn.10minuteschool.com/images/thumbnails/skills/ghore-boshe-Spoken-English-course-thumbnail-by-Munzereen-Shahid-16x9.jpg",
    href: "/",
  },
  {
    title: "IELTS Course by Munzereen Shahid",
    instructor: "Munzereen Shahid",
    imgUrl:
      "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png",
    href: "/",
  },
  {
    title: "Complete English Grammar Course",
    instructor: "Munzereen Shahid",
    imgUrl:
      "https://cdn.10minuteschool.com/images/thumbnails/complete-grammar-course-thumbnail.jpg",
    href: "/",
  },
  {
    title: "সহজে Spoken আরবি",
    instructor: "Mahade Hasan",
    imgUrl:
      "https://cdn.10minuteschool.com/images/Thumbnails/sohoje_spoken_arbi_16x9.jpg",
    href: "/",
  },
  {
    title: "IELTS Reading & Listening Mock Tests",
    instructor: "",
    imgUrl:
      "https://cdn.10minuteschool.com/images/Thumbnails/IELTS-Listening-Reading-Mock-Tests-Course-Thumbnail_discount-30_16_9.jpg",
    href: "/",
  },
  {
    title: "২৪ ঘণ্টায় কোরআন শিখি",
    instructor: "মাওলানা শাইখ মুহাম্মাদ জামাল উদ্দীন",
    imgUrl:
      "https://cdn.10minuteschool.com/images/catalog/media/%C3%A0%C2%A7%C2%A8%C3%A0%C2%A7%C2%AA-%C3%A0%C2%A6%C2%98%C3%A0%C2%A6%C2%A3%C3%A0%C2%A7%C2%8D%C3%A0%C2%A6%C2%9F%C3%A0%C2%A6%C2%BE%C3%A0%C2%A6%C2%AF%C3%A0%C2%A6%C2%BC-%C3%A0%C2%A6%C2%95%C3%A0%C2%A7%C2%8B%C3%A0%C2%A6%C2%B0%C3%A0%C2%A6%C2%86%C3%A0%C2%A6%C2%A8-%C3%A0%C2%A6%C2%B6%C3%A0%C2%A6%C2%BF%C3%A0%C2%A6%C2%96%C3%A0%C2%A6%C2%BF---Course-Thumbnail-PSD_1732445930516.jpg",
    href: "/",
  },
] as const;

export function Courses() {
  return (
    <div className="relative">
      <div className="no-scrollbar relative flex snap-x snap-mandatory flex-nowrap gap-4 overflow-x-scroll scroll-smooth">
        {courses.map(({ title, href, imgUrl, instructor }) => (
          <Link
            className="flex h-full w-52 cursor-pointer snap-start snap-always flex-col overflow-hidden rounded bg-[#121220] transition-colors md:min-w-[272px] md:rounded-lg"
            href={href}
            key={title}
          >
            <Image src={imgUrl} alt={title} width={272} height={152} />
            <div className="flex flex-1 flex-col justify-between gap-2 p-4">
              <h2 className="mb-1 line-clamp-2 h-14 text-sm font-semibold text-white md:text-lg">
                {title}
              </h2>
              <h3 className="max-h-[50px] overflow-hidden truncate text-xs text-[#6B7280] md:text-sm">
                {instructor}
              </h3>
              <span className="mt-4 flex items-center gap-x-1 text-green-500 underline-offset-2 hover:underline">
                বিস্তারিত
                <ArrowRightIcon className="size-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
