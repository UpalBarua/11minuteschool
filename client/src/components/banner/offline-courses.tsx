import { LearnMore } from "@/components/ui/learn-more";
import data from "@/data/data.json";
import Image from "next/image";
import Link from "next/link";

export function OfflineCourses() {
  return (
    <div className="relative grid justify-items-center gap-y-4 rounded-[2rem] border border-[#592327] bg-[linear-gradient(180deg,rgba(123,21,21,0.40)_0%,rgba(59,6,6,0.40)_100%)] px-2 pb-8 pt-10 text-center md:col-span-2 md:px-6">
      <h2 className="absolute left-1/2 top-0 mb-10 inline-block -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E64040] bg-[#441818] px-5 py-1 text-[#E64040]">
        অফলাইন সেন্টার
      </h2>
      <p className="leading-relaxed md:max-w-[35ch] md:text-2xl md:leading-relaxed">
        অনলাইনে ৫ লক্ষাধিক শিক্ষার্থীকে ইংরেজি শিখিয়ে আমরা এখন অফলাইনে
      </p>
      <div className="no-scrollbar max-w-full snap-x snap-mandatory overflow-x-auto">
        <ul className="mb-6 flex flex-nowrap items-center gap-2 md:justify-center">
          {data.locations.map(({ label, href }) => (
            <a
              className="flex snap-center items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-sm"
              key={label}
              href={href}
              target="_blank"
            >
              <span className="inline-block rounded-full bg-white/5 p-2">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                    strokeWidth={0}
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="whitespace-nowrap">{label}া</span>
            </a>
          ))}
        </ul>
      </div>
      <div className="mb-6 flex flex-col justify-center gap-4 md:flex-row">
        {data.offlineCourses.map(({ href, name, imgUrl, description }) => (
          <Link
            className="flex flex-1 items-center gap-3 rounded-2xl px-4 py-3 backdrop-blur-sm md:max-w-[33.33%]"
            href={href}
            key={name}
            style={{
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255, 255, 255, 0.10)",
            }}
          >
            <div>
              <div
                className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                style={{ fontSize: 0, opacity: 1 }}
              >
                <Image
                  className="rounded-lg"
                  src={imgUrl}
                  alt="image"
                  width={94}
                  height={94}
                />
              </div>
            </div>
            <div className="flex-1 text-left">
              <span className="text-xs text-[#EEA513]">ভর্তি চলছে .....</span>
              <h4 className="mb-1 text-sm">{name}</h4>
              <p className="text-xs text-gray-400">{description}</p>
            </div>
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.72 18.78a.75.75 0 0 1 0-1.06L14.44 12 8.72 6.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center gap-6">
        <LearnMore label="ফ্রি ক্লাস বুক করুন" href="/" />
        <LearnMore label="বিস্তারিত জানুন" href="/" />
      </div>
    </div>
  );
}
