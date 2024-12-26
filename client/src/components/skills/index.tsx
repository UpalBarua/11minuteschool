import { Brands } from "./brands";
import { Courses } from "./courses";

const courseDetails = [
  "দেশসেরা শিক্ষক",
  "৫ লাখ+শিক্ষার্থী",
  "৭০+ অনলাইন কোর্স",
] as const;

const icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    viewBox="0 0 25 24"
  >
    <g clipPath="url(#clip0_9507_68394)">
      <path
        fill="#EE7673"
        d="M10.897 6.54a.704.704 0 00-.658-.34l-5.713.442a1.856 1.856 0 00-1.414.832L.714 11.101A1.28 1.28 0 00.61 12.33c.178.402.543.682.978.75l4.633.717a.702.702 0 00.7-.316l3.964-6.2a.703.703 0 00.01-.74zM17.96 13.603a.703.703 0 00-.74.01l-6.201 3.964a.703.703 0 00-.316.7l.717 4.634A1.28 1.28 0 0012.691 24c.248 0 .494-.072.708-.214l3.627-2.398c.484-.32.787-.835.832-1.414l.441-5.713a.703.703 0 00-.34-.658z"
      />
      <path
        fill="#FFCD6B"
        d="M9.542 19.325c.28.28.677.411 1.067.346 5.724-.957 10.254-5.696 11.978-9.03 1.915-3.702 1.986-7.614 1.886-9.449A1.232 1.232 0 0023.309.028c-1.835-.1-5.747-.03-9.449 1.886-3.334 1.724-8.073 6.254-9.03 11.978-.065.39.066.788.345 1.067l4.367 4.366z"
      />
      <path
        fill="#FDC72E"
        d="M1.218 19.779a.7.7 0 00.497-.206l2.296-2.296a.703.703 0 00-.995-.994L.721 18.578a.703.703 0 00.497 1.2zM6.114 18.387a.703.703 0 00-.995 0L.706 22.8a.703.703 0 00.994.994l4.414-4.413a.703.703 0 000-.994zM8.219 20.49a.703.703 0 00-.995 0L4.93 22.785a.703.703 0 10.994.994l2.296-2.295a.703.703 0 000-.994z"
      />
      <path
        fill="#fff"
        d="M16.94 5.452c-.54 0-1.08.205-1.491.617a2.095 2.095 0 00-.618 1.491 2.112 2.112 0 004.219 0c0-.563-.22-1.093-.618-1.491a2.103 2.103 0 00-1.492-.617z"
      />
    </g>
    <defs>
      <clipPath id="clip0_9507_68394">
        <path fill="#fff" d="M0 0H24V24H0z" transform="translate(.5)" />
      </clipPath>
    </defs>
  </svg>
);

export function Skills() {
  return (
    <section className="full-width grid-container bg-black py-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 grid justify-items-center text-center text-white">
          <h2 className="flex items-center justify-center gap-2 pb-3 text-sm font-medium md:pb-6 md:text-lg">
            {icon}
            <span>স্কিলস</span>
          </h2>
          <p className="mb-2 text-2xl font-semibold leading-[32px] md:mb-4 md:text-[44px] md:leading-[56px]">
            দেশসেরা স্কিল ডেভেলপমেন্ট প্লাটফর্ম
          </p>
          <div className="mb-7 text-sm font-normal leading-[22px] text-[#9CA3AF] md:mb-4 md:text-lg md:leading-7 md:tracking-normal">
            <ul className="flex flex-wrap justify-center gap-3 md:gap-6">
              {courseDetails.map((detail) => (
                <li className="flex items-center gap-1 md:gap-4" key={detail}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#6294F8"
                      fillRule="evenodd"
                      d="M16.295 9.605l-4.568 6a1 1 0 01-.789.395h-.007c-.307 0-.597-.142-.787-.383l-2.432-3.108a1 1 0 111.575-1.232l1.633 2.087 3.784-4.97a1 1 0 011.591 1.211zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
                      clipRule="evenodd"
                    />
                    <mask
                      id="mask0_9507_68408"
                      style={{ maskType: "alpha" }}
                      width={20}
                      height={21}
                      x={2}
                      y={2}
                      maskUnits="userSpaceOnUse"
                    >
                      <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M16.295 9.605l-4.568 6a1 1 0 01-.789.395h-.007c-.307 0-.597-.142-.787-.383l-2.432-3.108a1 1 0 111.575-1.232l1.633 2.087 3.784-4.97a1 1 0 011.591 1.211zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
                        clipRule="evenodd"
                      />
                    </mask>
                    <g mask="url(#mask0_9507_68408)">
                      <path fill="#6294F8" d="M0 0H24V24H0z" />
                    </g>
                  </svg>{" "}
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Courses />
        <Brands />
      </div>
    </section>
  );
}
