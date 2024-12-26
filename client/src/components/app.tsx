import Image from "next/image";
import Link from "next/link";

export function App() {
  return (
    <section className="py-[72px] md:py-28">
      <div className="relative flex flex-col items-center overflow-hidden rounded-[20px] border bg-black px-5 pt-8 shadow md:flex-row md:pt-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={1084}
          height={677}
          fill="none"
          viewBox="0 0 1084 677"
          className="absolute bottom-0 left-0 z-0"
        >
          <g clipPath="url(#clip0_11631_97147)" opacity="0.2">
            <g filter="url(#filter0_f_11631_97147)">
              <ellipse
                cx="486.541"
                cy="481.787"
                fill="#8349FF"
                rx="324.094"
                ry="178.867"
                transform="rotate(-6.481 486.541 481.787)"
              />
            </g>
            <g filter="url(#filter1_f_11631_97147)">
              <path
                fill="url(#paint0_linear_11631_97147)"
                d="M714.294 371.683c29.526-41.833 31.214-73.763 45.947-122.801 28.441-94.659 7.495-156.823 41.298-249.702 68.975-189.515 188.25 407.04 18.598 516.088-106.648 68.552-418.719 84.986-324.641 0 37.572-33.94 73.532-30.356 115.963-57.981 43.791-28.509 72.703-42.914 102.835-85.604z"
              />
            </g>
            <g filter="url(#filter2_f_11631_97147)">
              <path
                fill="#0013FF"
                d="M121.837 400.369C44.269 405.473-6.356 434.105-55.598 500.721c-99.754 134.953 483.072 177.823 401.904 29.562-51.179-93.481-125.391-136.432-224.469-129.914z"
              />
            </g>
            <g filter="url(#filter3_f_11631_97147)">
              <path
                fill="#0FF"
                d="M125.099 437.789c-64.495 4.243-106.589 28.05-147.532 83.44-82.944 112.21 401.663 147.855 334.173 24.58-42.554-77.727-104.26-113.44-186.641-108.02z"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_11631_97147"
              width="973.528"
              height="691.169"
              x="-0.223"
              y="136.203"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_11631_97147"
                stdDeviation="82.049"
              />
            </filter>
            <filter
              id="filter1_f_11631_97147"
              width="702.442"
              height="884.235"
              x="341.302"
              y="-174.477"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_11631_97147"
                stdDeviation="68.374"
              />
            </filter>
            <filter
              id="filter2_f_11631_97147"
              width="749.407"
              height="551.89"
              x="-231.223"
              y="235.627"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_11631_97147"
                stdDeviation="82.049"
              />
            </filter>
            <filter
              id="filter3_f_11631_97147"
              width="569.024"
              height="404.794"
              x="-141.414"
              y="327.855"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_11631_97147"
                stdDeviation="54.699"
              />
            </filter>
            <linearGradient
              id="paint0_linear_11631_97147"
              x1="772.549"
              x2="664.791"
              y1="172.85"
              y2="485.184"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF0095" />
              <stop offset={1} stopColor="#FFCDFF" />
            </linearGradient>
            <clipPath id="clip0_11631_97147">
              <rect width={1084} height={677} fill="#fff" rx={20} />
            </clipPath>
          </defs>
        </svg>
        <div className="section-content relative z-[1] flex flex-col items-center justify-center md:w-1/2 md:items-start md:px-[72px]">
          <h2 className="pb-5 text-center text-xl font-semibold leading-8 text-white md:pb-12 md:text-left md:text-[34px] md:leading-relaxed">
            ডাউনলোড করুন আমাদের মোবাইল অ্যাপ, শেখা শুরু করুন আজ থেকেই
          </h2>
          <div className="store-link">
            <div className="flex">
              <div className="mr-4">
                <Link href="https://play.google.com/store/apps/details?id=com.a10minuteschool.tenminuteschool">
                  <div
                    className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: 0, opacity: 1 }}
                  >
                    <Image
                      alt="svg"
                      width={150}
                      height={48}
                      src="https://10minuteschool.com/images/home/googlePlay.svg?w=150&h=48"
                    />
                  </div>
                </Link>
              </div>
              <div>
                <Link href="https://apps.apple.com/us/app/10-minute-school/id1577061772">
                  <div
                    className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: 0, opacity: 1 }}
                  >
                    <Image
                      alt="svg"
                      width={150}
                      height={48}
                      src="https://10minuteschool.com/images/home/appStore.svg?w=150&h=48"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="section-image z-[1] md:w-1/2 md:pl-12">
          <div
            className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
            style={{ fontSize: 0, opacity: 1 }}
          >
            <Image
              alt="svg"
              width={503}
              height={428}
              src="https://cdn.10minuteschool.com/images/download_app_1668328988106.png?w=503&h=428"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
