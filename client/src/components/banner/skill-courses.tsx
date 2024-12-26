import Image from "next/image";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LearnMore } from "@/components/ui/learn-more";
import data from "@/data/data.json";

export function SkillCourses() {
  return (
    <div className="relative grid justify-items-center gap-y-4 rounded-[2rem] border border-[#64523D] bg-[linear-gradient(180deg,rgba(150,96,20,0.40)_0%,rgba(59,37,6,0.40)_100%)] px-6 pb-4 pt-10 text-center md:pb-8">
      <h2 className="absolute left-1/2 top-0 mb-10 inline-block -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F29D1F] bg-[#583112] px-5 py-1 text-[#F29D1F]">
        অনলাইন কোর্স
      </h2>
      <p className="leading-relaxed md:max-w-[25ch] md:text-2xl md:leading-relaxed">
        পছন্দের স্কিল শিখুন, নিজেকে সেরা করে গড়ে তুলুন
      </p>
      <Carousel className="mb-4 w-full max-w-full md:mb-6">
        <CarouselContent>
          {data.skillCourses.map(({ src, href }) => (
            <CarouselItem
              className="basis-1/3 py-2 sm:basis-1/4 md:basis-1/5"
              key={src}
            >
              <Link
                className="w-24 flex-shrink-0 snap-start"
                href={href}
                key={src}
              >
                <Image
                  className="rounded-md shadow-lg transition-all duration-300 hover:shadow"
                  src={src}
                  alt="image"
                  width={94}
                  height={133}
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="size-7 translate-x-[2rem] border-0 bg-white/20 transition-colors hover:bg-white/30" />
        <CarouselNext className="size-7 -translate-x-[2rem] border-0 bg-white/20 transition-colors hover:bg-white/30" />
      </Carousel>
      <LearnMore label="৩০+ ফ্রি কোর্সে এনরোল হতে ক্লিক করুন" href="/" />
    </div>
  );
}
