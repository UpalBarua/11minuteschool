import Image from "next/image";
import { MotionDiv } from "./motion-div";
import Link from "next/link";

import data from "@/data/data.json";

const icon = (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.2263 3.7481C10.9508 3.7481 11.5382 3.16074 11.5382 2.43618C11.5382 1.71163 10.9508 1.12426 10.2263 1.12426C9.50172 1.12426 8.91435 1.71163 8.91435 2.43618C8.91435 3.16074 9.50172 3.7481 10.2263 3.7481ZM10.2263 4.87261C11.5719 4.87261 12.6627 3.78178 12.6627 2.43618C12.6627 1.09058 11.5719 -0.000244141 10.2263 -0.000244141C8.88067 -0.000244141 7.78984 1.09058 7.78984 2.43618C7.78984 3.78178 8.88067 4.87261 10.2263 4.87261Z"
      fill="#183CAF"
    />
    <path
      d="M17.873 11.9253C18.6826 11.9253 19.339 12.5816 19.339 13.3913V16.656C19.339 17.3876 18.8536 17.9776 18.2519 17.9776C17.233 17.9776 16.407 17.1516 16.407 16.1327V13.3913C16.407 12.5816 17.0634 11.9253 17.873 11.9253Z"
      fill="#183CAF"
    />
    <path
      d="M2.13783 11.9255C1.32821 11.9255 0.671875 12.5819 0.671875 13.3915V16.6562C0.671875 17.3878 1.1572 17.9778 1.75894 17.9778C2.77783 17.9778 3.60379 17.1519 3.60379 16.133V13.3915C3.60379 12.5819 2.94746 11.9255 2.13783 11.9255Z"
      fill="#183CAF"
    />
    <path
      d="M17.3494 6.91567V18.0911C17.3494 19.1134 16.5206 19.9422 15.4983 19.9422H4.50657C3.48424 19.9422 2.65547 19.1134 2.65547 18.0911V6.91567C2.65547 4.36532 4.72294 2.29785 7.27329 2.29785H12.7316C15.2819 2.29785 17.3494 4.36532 17.3494 6.91567V6.91567Z"
      fill="#306BF4"
    />
    <path
      d="M15.6591 12.3007V17.1257C15.6591 17.5959 15.2779 17.9772 14.8076 17.9772H5.20303C4.73278 17.9772 4.35156 17.5959 4.35156 17.1257V12.3007C4.35156 11.8304 4.73278 11.4492 5.20303 11.4492H14.8076C15.2779 11.4492 15.6591 11.8304 15.6591 12.3007Z"
      fill="#ACCCFD"
    />
    <path
      d="M14.1014 13.1321V13.3634C14.1014 13.443 14.037 13.5075 13.9574 13.5075H6.05146C5.97191 13.5075 5.90742 13.443 5.90742 13.3634V13.1321C5.90742 13.0525 5.97191 12.988 6.05146 12.988H13.9574C14.037 12.988 14.1014 13.0525 14.1014 13.1321Z"
      fill="#306BF4"
    />
    <path
      d="M12.4626 7.4854C12.4626 8.67892 11.496 9.64548 10.3025 9.64548C9.10914 9.64548 8.14258 8.67892 8.14258 7.4854C8.14258 6.292 9.10914 5.32544 10.3025 5.32544C11.496 5.32544 12.4626 6.292 12.4626 7.4854V7.4854Z"
      fill="#D5E6FE"
    />
  </svg>
);

export function SscAndHsc() {
  return (
    <section className="full-width grid-container justify-items-center bg-[#F4F7FD] py-8 dark:bg-[#111827] md:py-32">
      <MotionDiv
        initial={{
          y: 100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.75,
        }}
        viewport={{
          once: true,
        }}
      >
        <div className="mx-w-[80ch] mx-auto mb-10 px-4 text-center">
          <h2 className="flex items-center justify-center gap-2 pb-3 text-sm font-medium text-[#183CAF] md:pb-6 md:text-lg">
            {icon}
            <span>SSC &amp; HSC</span>
          </h2>
          <h2 className="mb-2 text-2xl font-semibold leading-[32px] md:mb-4 md:text-[44px] md:leading-[56px]">
            SSC ও HSC শিক্ষার্থীদের জন্য
          </h2>
        </div>
        <div className="max-w-screen-xl overflow-x-auto md:w-3/4 lg:w-full">
          <div className="justify-start gap-6 md:flex md:flex-nowrap lg:justify-center">
            {data.sscAndHscCourses.map(({ imgUrl, title, price, href }) => (
              <Link href={href} key={imgUrl}>
                <div className="xs:border-dashed my-0 mb-4 flex h-full w-full cursor-pointer flex-row gap-4 rounded-none border-b border-foreground/20 pb-4 transition-colors duration-200 sm:max-w-[200px] sm:flex-col sm:rounded sm:border sm:pb-0 md:min-w-64 md:hover:border-green-500">
                  <div className="w-auto min-w-[100px] max-w-[144px] overflow-hidden rounded sm:max-w-full sm:rounded-b-none">
                    <Image src={imgUrl} alt={title} width={272} height={152} />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-between rounded-bl-[4px] rounded-br-[4px] p-0 sm:p-[14px]">
                    <h2 className="mb-1 line-clamp-2 text-sm font-semibold md:text-lg">
                      {title}
                    </h2>
                    <p className="text-sm font-[600] text-[#1DAB55] md:text-lg">
                      ৳ {price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </MotionDiv>
    </section>
  );
}
