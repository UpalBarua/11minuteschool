import Link from "next/link";
import Image from "next/image";
import { LearnMore } from "@/components/ui/learn-more";

const skillCourses = [
  {
    src: "https://cdn.10ms.com/builder/sections/resources/images/IELTS-Live-Batch-Web-Carousel-5_%281%29_1724224897864.jpg?w=94&h=133",
  },
  {
    src: "https://cdn.10ms.com/builder/sections/resources/images/GBEG_1719211393710.jpg?w=94&h=133",
  },
  {
    src: "https://cdn.10ms.com/builder/sections/resources/images/GBSE_1718879517937.jpg?w=94&h=133",
  },
  {
    src: "https://cdn.10minuteschool.com/images/ielts_1700654663556.png?w=94&h=133",
  },
  {
    src: "https://cdn.10ms.com/builder/sections/resources/images/Emkf_1718879537672.jpg?w=94&h=133",
  },
  {
    src: "https://cdn.10minuteschool.com/images/facebook_marketing_1700654446863.jpg?w=94&h=133",
  },
  {
    src: "https://cdn.10minuteschool.com/images/graphic_design_kore_freelancing_1733747339479.jpg?w=94&h=133",
  },
  {
    src: "https://cdn.10ms.com/builder/sections/resources/images/YT_1727870084815.jpg?w=94&h=133",
  },
] as const;

export function SkillCourses() {
  return (
    <div className="relative grid justify-items-center gap-y-4 rounded-[2rem] border border-[#64523D] bg-[linear-gradient(180deg,rgba(150,96,20,0.40)_0%,rgba(59,37,6,0.40)_100%)] px-6 pb-4 pt-10 text-center md:pb-8">
      <h2 className="absolute left-1/2 top-0 mb-10 inline-block -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F29D1F] bg-[#583112] px-5 py-1 text-[#F29D1F]">
        অনলাইন কোর্স
      </h2>
      <p className="leading-relaxed md:max-w-[25ch] md:text-2xl md:leading-relaxed">
        পছন্দের স্কিল শিখুন, নিজেকে সেরা করে গড়ে তুলুন
      </p>
      <div className="mb-4 max-w-full md:mb-6">
        <div className="tenms-carousel right dark relative">
          <div className="w-full max-w-full overflow-hidden">
            <div className="mx-lg:hidden absolute right-0 top-1/2 z-[3] block -translate-y-1/2 cursor-pointer">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-mr-2"
              >
                <g filter="url(#filter0_b_1199_1409)">
                  <rect
                    width={24}
                    height={24}
                    rx={12}
                    fill="white"
                    fillOpacity="0.2"
                  />
                  <path
                    d="M10.5004 15.2292L13.7337 11.9958L10.5004 8.7625C10.1754 8.4375 10.1754 7.9125 10.5004 7.5875C10.8254 7.2625 11.3504 7.2625 11.6754 7.5875L15.5004 11.4125C15.8254 11.7375 15.8254 12.2625 15.5004 12.5875L11.6754 16.4125C11.3504 16.7375 10.8254 16.7375 10.5004 16.4125C10.1837 16.0875 10.1754 15.5542 10.5004 15.2292Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_1199_1409"
                    x="-10.9091"
                    y="-10.9091"
                    width="45.8182"
                    height="45.8182"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="5.45455"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_1199_1409"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_1199_1409"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="mx-lg:hidden pointer-events-none absolute left-0 top-1/2 z-[2] block -translate-y-1/2 cursor-pointer opacity-10">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-ml-3"
              >
                <g filter="url(#filter0_b_1199_1411)">
                  <rect
                    x={24}
                    y={24}
                    width={24}
                    height={24}
                    rx={12}
                    transform="rotate(-180 24 24)"
                    fill="white"
                    fillOpacity="0.2"
                  />
                  <path
                    d="M13.4996 8.77083L10.2663 12.0042L13.4996 15.2375C13.8246 15.5625 13.8246 16.0875 13.4996 16.4125C13.1746 16.7375 12.6496 16.7375 12.3246 16.4125L8.49961 12.5875C8.17461 12.2625 8.17461 11.7375 8.49961 11.4125L12.3246 7.5875C12.6496 7.2625 13.1746 7.2625 13.4996 7.5875C13.8163 7.9125 13.8246 8.44583 13.4996 8.77083Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_1199_1411"
                    x="-10.9091"
                    y="-10.9091"
                    width="45.8182"
                    height="45.8182"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="5.45455"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_1199_1411"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_1199_1411"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className="no-scrollbar relative flex max-w-lg snap-x snap-mandatory flex-nowrap gap-4 overflow-x-scroll scroll-smooth">
            {skillCourses.map(({ src }, i) => (
              <Link
                className="w-24 flex-shrink-0 snap-start"
                id={`slide_#${i}`}
                href="/"
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
            ))}
          </div>
        </div>
      </div>
      <LearnMore label="৩০+ ফ্রি কোর্সে এনরোল হতে ক্লিক করুন" href="/" />
    </div>
  );
}
