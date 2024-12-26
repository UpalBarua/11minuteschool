import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import data from "@/data/data.json";

export function Courses() {
  return (
    <Tabs defaultValue={data.categorisedCourses[0].title}>
      <TabsList asChild className="bg-transparent">
        <Carousel className="mb-20 w-full max-w-full">
          <CarouselContent className="gap-x-4">
            {data.categorisedCourses.map(({ title, coursesCount }) => (
              <TabsTrigger
                className="!hover:bg-[#1c2741] min-h-24 w-full cursor-pointer snap-start flex-col items-center rounded-xl border border-transparent !bg-[#111827] p-6 py-2 transition-all duration-300 hover:border-green-500 sm:basis-1/2 md:basis-1/3 lg:basis-1/6"
                key={title}
                value={title}
              >
                <CarouselItem>
                  <p className="mb-2 whitespace-nowrap text-sm text-gray-300 md:text-base">
                    {title}
                  </p>
                  <p className="whitespace-nowrap text-xs text-gray-400 md:text-sm">
                    {coursesCount}
                  </p>
                </CarouselItem>
              </TabsTrigger>
            ))}
          </CarouselContent>
          <CarouselPrevious className="size-8 translate-x-[2rem] border-0 bg-background/60 transition-colors hover:bg-background/70" />
          <CarouselNext className="size-8 -translate-x-[2rem] border-0 bg-foreground/60 transition-colors hover:bg-foreground/70" />
        </Carousel>
      </TabsList>
      {data.categorisedCourses.map(({ title, courses }) => (
        <TabsContent value={title} key={title}>
          <Carousel>
            <CarouselContent className="gap-x-4">
              {courses.map(({ title, href, imgUrl, instructor }) => (
                <CarouselItem
                  className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                  key={title}
                >
                  <Link
                    className="flex h-full w-52 cursor-pointer snap-start snap-always flex-col overflow-hidden rounded bg-[#121220] transition-colors md:min-w-[272px] md:rounded-lg"
                    href={href}
                  >
                    <Image src={imgUrl} alt={title} width={272} height={152} />
                    <div className="flex flex-1 flex-col justify-between gap-2 p-4">
                      <h2 className="mb-1 line-clamp-2 h-14 text-sm font-semibold text-white md:text-lg">
                        {title}
                      </h2>
                      <h3 className="max-h-[50px] overflow-hidden truncate text-xs text-[#6B7280] md:text-sm">
                        {instructor}
                      </h3>
                      <span className="mt-4 flex items-center gap-x-1 text-xs font-semibold text-green-500 underline-offset-2 hover:underline md:text-sm md:font-medium">
                        বিস্তারিত
                        <ArrowRightIcon className="size-4" />
                      </span>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="size-8 translate-x-[2rem] border-0 bg-foreground/60 transition-colors hover:bg-foreground/70" />
            <CarouselNext className="hover:bg-white/bg-foreground/70 size-8 -translate-x-[2rem] border-0 bg-foreground/60 transition-colors" />
          </Carousel>
        </TabsContent>
      ))}
    </Tabs>
  );
}
