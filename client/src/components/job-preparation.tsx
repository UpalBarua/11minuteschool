import { ArrowRightIcon, ChevronRightIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import data from "@/data/data.json";

const icon = (
  <svg
    width={21}
    height={20}
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.943 10.7675V17.5648C18.943 18.0798 18.3361 18.4973 17.5874 18.4973H3.41424C2.66554 18.4973 2.05859 18.0798 2.05859 17.5648V10.7675C2.05859 10.2525 2.66554 9.83496 3.41424 9.83496H17.5874C18.3361 9.83496 18.943 10.2525 18.943 10.7675Z"
      fill="#C7C6FD"
    />
    <path
      d="M19.9124 5.28371V11.8775C19.9124 12.6262 19.3055 13.2332 18.5568 13.2332H2.44451C1.69581 13.2332 1.08887 12.6262 1.08887 11.8775V5.28371C1.08887 4.53501 1.69581 3.92807 2.44451 3.92807H18.5568C19.3055 3.92807 19.9124 4.53501 19.9124 5.28371Z"
      fill="#6572EF"
    />
    <path
      d="M11.5649 13.1908V15.4597C11.5649 15.5774 11.4369 15.6505 11.3356 15.5906L10.5853 15.1473C10.5329 15.1163 10.4678 15.1161 10.4152 15.1467L9.64742 15.5932C9.54606 15.6522 9.41895 15.5791 9.41895 15.4618V13.1908H11.5649Z"
      fill="#6572EF"
    />
    <path
      d="M12.2293 12.4778V14.007C12.2293 14.2069 12.0673 14.369 11.8674 14.369H9.13441C8.93451 14.369 8.77246 14.2069 8.77246 14.007V12.4778C8.77246 12.2779 8.93451 12.1159 9.13441 12.1159H11.8674C12.0673 12.1159 12.2293 12.2779 12.2293 12.4778Z"
      fill="white"
    />
    <path
      d="M13.6348 3.92913H12.5503V2.81486C12.5503 2.68862 12.447 2.58534 12.3208 2.58534H8.67927C8.55303 2.58534 8.44975 2.68862 8.44975 2.81486V3.92913H7.36523V2.65669C7.36523 2.01832 7.88274 1.50082 8.52111 1.50082H12.4789C13.1173 1.50082 13.6348 2.01832 13.6348 2.65669V3.92913Z"
      fill="#C7C6FD"
    />
  </svg>
);

export function JobPreparation() {
  return (
    <div className="full-width grid-container mb-10 bg-white py-8 md:mb-0 md:py-[120px]">
      <div className="mx-auto mb-10 px-4 text-center">
        <h2 className="flex items-center justify-center gap-2 pb-3 text-sm font-medium text-[#4355f3] md:pb-6 md:text-lg">
          {icon}
          <span>চাকরি প্রস্তুতি</span>
        </h2>
        <p className="mb-2 text-2xl font-semibold leading-[32px] text-[#111827] md:mb-4 md:text-[44px] md:leading-[56px]">
          সরকারি চাকরির সর্বোচ্চ প্রস্তুতি
        </p>
        <p className="mb-7 text-sm font-normal leading-[22px] text-[#4B5563] md:mb-4 md:text-lg md:leading-7 md:tracking-normal">
          বিসিএস কিংবা ব্যাংকে চাকরি - টার্গেট যেটাই হোক, সলিউশন এখানেই!
        </p>
      </div>
      <Carousel className="mb-4 w-full max-w-full md:mb-6">
        <CarouselContent>
          {data.jobCourses.map(({ title, imgUrl, instructor, href }) => (
            <CarouselItem
              className="py-2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              key={title}
            >
              <Link
                className="block h-full overflow-clip rounded-lg border border-[#E5E7EB] bg-white transition-colors hover:border-green-600"
                href={href}
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
          ))}
        </CarouselContent>
        <CarouselPrevious className="size-8 translate-x-[2rem] border-0 bg-foreground/60 transition-colors hover:bg-foreground/70" />
        <CarouselNext className="hover:bg-white/bg-foreground/70 size-8 -translate-x-[2rem] border-0 bg-foreground/60 transition-colors" />
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
    </div>
  );
}
