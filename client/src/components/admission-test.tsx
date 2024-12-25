import { ArrowRightIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const courses = [
  {
    imgUrl:
      "https://cdn.10minuteschool.com/images/thumbnails/medical-final-exam-batch-2024-thumbnail-new.jpg?w=351&h=198",
    title: "মেডিকেল ফাইনাল এক্সাম ব্যাচ ২০২৪",
    instructor: "Dr Sushmita Biswas +1",
    href: "/",
  },
  {
    imgUrl: "https://cdn.10minuteschool.com/images/du_a_qs_up2.jpg?w=351&h=198",
    title: "ঢাবি-ক কোশ্চেন সলভ কোর্স",
    instructor: "CM Rezaul Karim +7",
    href: "/",
  },
  {
    imgUrl:
      "https://cdn.10minuteschool.com/images/k-12-courses/adm_medicalqs_v4.jpeg?w=351&h=198",
    title: "Medical Admission Question Solve Course",
    instructor: "Sharif Alam +9",
    href: "/",
  },
  {
    imgUrl:
      "https://cdn.10minuteschool.com/images/thumbnails/gst-b-unit-admission-course-thumbnail.jpg?w=351&h=198",
    title: "গুচ্ছ B Unit এডমিশন কোর্স - ২০২৪",
    instructor: "Farhan Sakib +9",
    href: "/",
  },
  {
    imgUrl:
      "https://cdn.10minuteschool.com/images/thumbnails/gst-c-unit-admission-course-thumbnail.jpg?w=351&h=198",
    title: "গুচ্ছ C Unit এডমিশন কোর্স - ২০২৪",
    instructor: "Farhan Sakib +6",
    href: "/",
  },
  {
    imgUrl:
      "https://cdn.10minuteschool.com/images/thumbnails/gst-a-unit-admission-course-thumbnail.jpg?w=351&h=198",
    title: "গুচ্ছ A Unit এডমিশন কোর্স - ২০২৪",
    instructor: "Farhan Sakib +13",
    href: "/",
  },
  {
    imgUrl:
      "https://cdn.10minuteschool.com/images/thumbnails/du-written-private-batch-bangla-and-english-thumbnail.jpg?w=351&h=198",
    title: "DU Written (Bangla & English) Private Batch",
    instructor: "Farhan Sakib +4",
    href: "/",
  },
  {
    imgUrl:
      "https://cdn.10minuteschool.com/images/thumbnails/Admission_2024/medical-admission-2024-course-thumbnail.jpg?w=351&h=198",
    title: "মেডিকেল এডমিশন কোর্স - ২০২৪",
    instructor: "Dr Sushmita Biswas +1",
    href: "/",
  },
  {
    imgUrl:
      "https://cdn.10minuteschool.com/images/thumbnails/dhaka-university-b-unit-admission-course-thumbnail.jpg?w=351&h=198",
    title: "ঢাকা ভার্সিটি B Unit এডমিশন কোর্স - ২০২৪",
    instructor: "Farhan Sakib +9",
    href: "/",
  },
  {
    imgUrl:
      "https://cdn.10minuteschool.com/images/thumbnails/dhaka-university-c-unit-admission-course-thumbnail.jpg?w=351&h=198",
    title: "ঢাকা ভার্সিটি C Unit এডমিশন কোর্স - ২০২৪",
    instructor: "Farhan Sakib +11",
    href: "/",
  },
] as const;

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
      <div className="tenms-carousel light right relative">
        <div className="w-full overflow-hidden">
          <div className="mx-lg:hidden blocc absolute right-0 top-1/2 z-[3] -translate-y-1/2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={33}
              height={32}
              fill="none"
              viewBox="0 0 33 32"
              className="xl:mr-[-40px]"
            >
              <path
                fill="#000"
                fillOpacity="0.5"
                fillRule="evenodd"
                d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="mx-lg:hidden pointer-events-none absolute left-0 top-1/2 z-[2] block -translate-y-1/2 cursor-pointer opacity-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={33}
              height={32}
              fill="none"
              viewBox="0 0 33 32"
              className="rotate-180 xl:ml-[-40px]"
            >
              <path
                fill="#000"
                fillOpacity="0.5"
                fillRule="evenodd"
                d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="no-scrollbar relative flex snap-x snap-mandatory flex-nowrap gap-4 overflow-x-scroll scroll-smooth">
          {courses.map(({ title, imgUrl, instructor, href }) => (
            <Link href={href} key={title}>
              <div className="h-full w-64 overflow-hidden rounded-lg border border-[#E5E7EB] bg-white transition-colors hover:border-green-600 md:min-w-[272px] md:max-w-[272px] md:rounded-[10px]">
                <Image src={imgUrl} alt={title} width={351} height={198} />
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
              </div>
            </Link>
          ))}
        </div>
      </div>
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
