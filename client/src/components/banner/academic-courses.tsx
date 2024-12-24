import { LearnMore } from "@/components/ui/learn-more";
import Image from "next/image";

const academicCourses = [
  {
    label: "ক্লাস ৬,৭,৮",
    icon: "https://cdn.10minuteschool.com/images/image_6344663_1733036653015.png?w=65&h=65",
  },
  {
    label: "ক্লাস ৬,৭,৮",
    icon: "https://cdn.10minuteschool.com/images/image_6344663_1733036653015.png?w=65&h=65",
  },
  {
    label: "ক্লাস ৬,৭,৮",
    icon: "https://cdn.10minuteschool.com/images/image_6344663_1733036653015.png?w=65&h=65",
  },
  {
    label: "ক্লাস ৯, ১০ ",
    icon: "https://cdn.10minuteschool.com/images/9-10_1732778140427.png?w=65&h=65",
  },
  {
    label: "SSC ২৫",
    icon: "https://cdn.10minuteschool.com/images/ssc_1732778162589.png?w=65&h=65",
  },
  {
    label: "HSC ২৫, ২৬",
    icon: "https://cdn.10minuteschool.com/images/hscbag_1732778180651.png?w=65&h=65",
  },
] as const;

export function AcademicCourses() {
  return (
    <div className="relative grid justify-items-center gap-y-4 rounded-[2rem] border border-[#253A71] bg-[linear-gradient(180deg,rgba(19,57,146,0.40)_0%,rgba(6,14,83,0.40)_100%)] px-4 pb-4 pt-10 text-center md:px-6 md:pb-8">
      <h2 className="absolute left-1/2 top-0 mb-10 inline-block -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2B72FF] bg-[#15275D] px-5 py-1 text-[#2B72FF]">
        অনলাইন কোর্স
      </h2>
      <p className="leading-relaxed md:max-w-[25ch] md:text-2xl md:leading-relaxed">
        অনলাইন ব্যাচ ২০২৫ এর সকল কোর্সে ভর্তি চলছে!
      </p>
      <ul className="no-scrollbar flex max-w-full items-center gap-2 overflow-x-auto md:gap-4">
        {academicCourses.map(({ icon, label }, i) => (
          <li
            key={i + icon}
            className="flex size-full min-w-[7.5rem] cursor-pointer flex-col items-center justify-center rounded-2xl bg-background/10 px-2 py-5 text-background backdrop-blur-md transition-all duration-300"
          >
            <Image
              className="max-w-[40px] md:max-w-[65px]"
              src={icon}
              alt="image"
              width={65}
              height={65}
            />
            <h4 className="mt-2.5 whitespace-nowrap text-xs md:text-base">
              {label}
            </h4>
          </li>
        ))}
      </ul>
      <LearnMore label="ফ্রি ক্লাস বুক করুন" href="/" />
    </div>
  );
}