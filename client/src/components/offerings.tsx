"use client";

import data from "@/data/data.json";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { MotionDiv } from "./motion-div";

import { buttonVariants } from "@/components/ui/button";

const icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
  >
    <mask
      id="mask0_9494_69179"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{ maskType: "alpha" }}
    >
      <path fill="#D9D9D9" d="M0 0H24V24H0z" />
    </mask>
    <g mask="url(#mask0_9494_69179)">
      <path
        fill="#F0766A"
        fillRule="evenodd"
        d="M12.226 5.748a1.312 1.312 0 100-2.624 1.312 1.312 0 000 2.624zm0 1.125a2.436 2.436 0 100-4.873 2.436 2.436 0 000 4.873z"
        clipRule="evenodd"
      />
      <path
        fill="#F0766A"
        d="M19.873 13.925c.81 0 1.466.657 1.466 1.466v3.265c0 .732-.485 1.322-1.087 1.322a1.845 1.845 0 01-1.845-1.845V15.39c0-.81.657-1.466 1.466-1.466zM4.138 13.925c-.81 0-1.466.657-1.466 1.466v3.265c0 .732.485 1.322 1.087 1.322a1.845 1.845 0 001.845-1.845v-2.741c0-.81-.657-1.466-1.466-1.466z"
      />
      <path
        fill="#F79C89"
        d="M19.35 8.916V20.09a1.851 1.851 0 01-1.852 1.851H6.506a1.851 1.851 0 01-1.85-1.85V8.915a4.618 4.618 0 014.617-4.618h5.458a4.618 4.618 0 014.618 4.618z"
      />
      <path
        fill="#FFF5F5"
        d="M17.66 14.3v4.826c0 .47-.382.851-.852.851H7.203a.852.852 0 01-.851-.851V14.3c0-.47.38-.852.851-.852h9.605c.47 0 .851.381.851.852z"
      />
      <path
        fill="#F79C89"
        d="M16.101 15.132v.231c0 .08-.064.145-.144.145H8.051a.144.144 0 01-.144-.145v-.23c0-.08.065-.145.144-.145h7.906c.08 0 .144.065.144.144z"
      />
      <path
        fill="#F9FAFB"
        d="M14.463 9.485a2.16 2.16 0 11-4.32.002 2.16 2.16 0 014.32-.002z"
      />
    </g>
  </svg>
);

export function Offerings() {
  return (
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
      <section className="grid justify-items-center py-8 md:py-28">
        <div className="max-w-[80ch] px-4 text-center md:mb-20">
          <h2 className="flex items-center justify-center gap-2 pb-3 text-sm font-medium text-[#ff5733] md:pb-6 md:text-lg">
            {icon}
            <span>ক্লাস ৬-১০</span>
          </h2>
          <p className="mb-2 text-2xl font-semibold leading-[32px] md:mb-4 md:text-[44px] md:leading-[56px]">
            বছর জুড়ে অনলাইন ব্যাচে কী কী থাকছে?
          </p>
          <p className="mb-7 text-sm font-normal leading-[22px] text-muted-foreground md:mb-4 md:text-lg md:leading-7 md:tracking-normal">
            সেরা শিক্ষকদের পরিচর্যায় দেশের যেকোন প্রান্ত থেকে অব্যাহত থাকুক
            পড়াশুনার অগ্রযাত্রা{" "}
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {data.offerings.map(({ videoId, title, description }) => (
            <li className="rounded-md border p-4" key={title}>
              <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-md">
                <LiteYouTubeEmbed id={videoId} title={title} />
              </div>
              <h3 className="pb-2 text-xl font-semibold">{title}</h3>
              <p className="text-sm font-normal text-muted-foreground md:text-base">
                {description}
              </p>
            </li>
          ))}
        </ul>
        <Link
          className={buttonVariants({ size: "lg", className: "mt-2 md:mt-20" })}
          href="/"
        >
          <span>আপনার ক্লাস বেছে নিন</span>
          <ChevronRightIcon className="size-6" />
        </Link>
      </section>
    </MotionDiv>
  );
}
