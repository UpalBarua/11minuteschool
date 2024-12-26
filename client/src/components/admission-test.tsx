import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import data from "@/data/data.json";
import { ArrowRightIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export function AdmissionTest() {
  return (
    <section className="full-width grid-container bg-[#F4F7FD] bg-[url('https://cdn.10minuteschool.com/images/background-admission_1678085094236.png')] bg-left-bottom bg-no-repeat py-8 md:py-[120px]">
      <div className="mx-auto mb-10 px-4 text-center">
        <h2 className="flex items-center justify-center gap-2 pb-3 text-sm font-medium text-[#991efa] md:pb-6 md:text-lg">
          <span>ভর্তি পরীক্ষা</span>
        </h2>
        <p className="mb-2 text-2xl font-semibold leading-[32px] text-[#111827] md:mb-4 md:text-[44px] md:leading-[56px]">
          স্বপ্নের ভার্সিটির সম্পূর্ণ প্রস্তুতি{" "}
        </p>
        <p className="md:traccing-normal mb-7 text-sm font-normal leading-[22px] text-[#4B5563] md:mb-4 md:text-lg md:leading-7">
          ইঞ্জিনিয়ারিং-মেডিকেল কিংবা ভার্সিটি-গুচ্ছ - লক্ষ্য যাই হোক, অর্জনের
          পথ এখানেই।
        </p>
      </div>
      <Carousel className="mb-4 w-full max-w-full md:mb-6">
        <CarouselContent>
          {data.admissionTestCourses.map(
            ({ title, imgUrl, instructor, href }) => (
              <CarouselItem
                className="py-2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                key={title}
              >
                <Link
                  href={href}
                  className="block h-full overflow-clip rounded-lg border border-[#E5E7EB] bg-white transition-colors hover:border-green-600"
                >
                  <Image
                    className="w-full"
                    src={imgUrl}
                    alt={title}
                    width={351}
                    height={198}
                  />
                  <div className="flex min-h-[118px] min-w-0 flex-1 flex-col justify-between p-[14px] md:min-h-[145px]">
                    <h3 className="mb-1 line-clamp-2 h-14 text-sm font-semibold md:text-lg">
                      মেডিকেল ফাইনাল এক্সাম ব্যাচ ২০২৪
                    </h3>
                    <p className="max-h-[50px] overflow-hidden truncate text-xs text-[#6B7280] md:text-sm">
                      {instructor}
                    </p>
                    <span className="mt-4 flex items-center gap-x-1 text-xs font-semibold text-green-600 underline-offset-2 hover:underline md:text-sm md:font-medium">
                      বিস্তারিত
                      <ArrowRightIcon className="size-4" />
                    </span>
                  </div>
                </Link>
              </CarouselItem>
            ),
          )}
        </CarouselContent>
        <CarouselPrevious className="size-8 translate-x-[3.5rem] border-0 bg-foreground/60 transition-colors hover:bg-foreground/70" />
        <CarouselNext className="size-8 -translate-x-[3.5rem] border-0 bg-foreground/60 transition-colors hover:bg-foreground/70" />
      </Carousel>
      <Link
        className={buttonVariants({
          size: "lg",
          className: "mx-auto mt-2 max-w-max md:mt-20",
        })}
        href="/"
      >
        <span>সকল কোর্স</span>
        <ChevronRightIcon className="size-6" />
      </Link>
    </section>
  );
}
