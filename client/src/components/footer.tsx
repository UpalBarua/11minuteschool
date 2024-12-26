import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="grid-container mb-24 md:mb-0">
      <div className="flex flex-col pt-12 md:flex-row md:border-[#E4E4E4]">
        <div className="mx-lg:mb-7 mx-lg:mr-6 mb-7 flex w-full flex-col items-center md:mb-0 md:items-start">
          <Link className="mb-4" href="/">
            <div
              className="rounded-md opacity-0 transition-opacity duration-300 ease-in-out"
              style={{ fontSize: 0, objectFit: "contain", opacity: 1 }}
            >
              <Image
                alt="Instructor"
                width={116}
                height={32}
                src="https://10minuteschool.com/images/logo.svg?w=116&h=32"
              />
            </div>
          </Link>
          <h3 className="mb-[14px] text-base font-semibold md:font-medium">
            ডাউনলোড করুন আমাদের মোবাইল অ্যাপ
          </h3>
          <div className="flex">
            <div className="mr-4">
              <Link href="https://play.google.com/store/apps/details?id=com.a10minuteschool.tenminuteschool">
                <div
                  className="rounded-md opacity-0 transition-opacity duration-300 ease-in-out"
                  style={{ fontSize: 0, opacity: 1 }}
                >
                  <Image
                    alt="google play"
                    width={156}
                    height={49}
                    src="https://cdn.10minuteschool.com/images/google-play-icon_1695731678094.png?w=156&h=49"
                  />
                </div>
              </Link>
            </div>
            <div>
              <Link href="https://apps.apple.com/us/app/10-minute-school/id1577061772">
                <div
                  className="rounded-md opacity-0 transition-opacity duration-300 ease-in-out"
                  style={{ fontSize: 0, opacity: 1 }}
                >
                  <Image
                    alt="ios download"
                    width={156}
                    height={49}
                    src="https://cdn.10minuteschool.com/images/ios-store-icon_1695731704002.png?w=156&h=49"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-lg:mx-0 mx-lg:border-b mx-lg:border-[#E4E4E4] mx-0 flex w-full justify-center border-b border-[#E4E4E4] pb-8 md:mx-14 md:border-none">
          <div className="flex w-full max-w-sm justify-center">
            <div className="mr-4 w-1/2">
              <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">
                কোম্পানি
              </h3>
              <ul className="mb-4 flex flex-col justify-center text-gray-600 md:mb-0 md:justify-start md:gap-4">
                <li>
                  <Link
                    href="https://app.10minuteschool.com/careers"
                    className="hover:text-green mb-2 text-sm font-medium md:text-base"
                  >
                    ক্যারিয়ার / নিয়োগ বিজ্ঞপ্তি
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLScWh9jjyWnUKdDKET1-LHvdTxuU6-ssd0GLTI-0JlQ2MH6RzA/viewform"
                    className="hover:text-green mb-2 text-sm font-medium md:text-base"
                  >
                    শিক্ষক হিসাবে যোগ দিন
                  </Link>
                </li>
                <li>
                  <a
                    href="https://affiliation.10minuteschool.com/"
                    className="hover:text-green mb-2 text-sm font-medium md:text-base"
                  >
                    অ্যাফিলিয়েট হিসাবে যোগ দিন
                  </a>
                </li>
                <li>
                  <Link
                    href="https://app.10minuteschool.com/privacy-policy"
                    className="hover:text-green mb-2 text-sm font-medium md:text-base"
                  >
                    প্রাইভেসি পলিসি
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://app.10minuteschool.com/refund-policy"
                    className="hover:text-green mb-2 text-sm font-medium md:text-base"
                  >
                    রিফান্ড পলিসি
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://app.10minuteschool.com/terms-and-conditions"
                    className="hover:text-green mb-2 text-sm font-medium md:text-base"
                  >
                    ব্যবহারকারীর শর্তাবলি
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-1/2">
              <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">
                অন্যান্য
              </h3>
              <ul className="mb-4 flex flex-col justify-center text-gray-600 md:mb-0 md:justify-start md:gap-4">
                <li>
                  <Link
                    href="https://blog.10minuteschool.com/"
                    className="hover:text-green mb-2 text-sm font-medium md:text-base"
                  >
                    ব্লগ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/store/all"
                    className="hover:text-green mb-2 text-sm font-medium md:text-base"
                  >
                    বুক স্টোর
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://10minuteschool.com/content"
                    className="hover:text-green mb-2 text-sm font-medium md:text-base"
                  >
                    ফ্রি নোটস ও গাইড
                  </Link>
                </li>
                <li>
                  <Link
                    href="/jobs-prep"
                    className="hover:text-green mb-2 text-sm font-medium md:text-base"
                  >
                    চাকরি প্রস্তুতি কোর্সসমূহ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/certificate"
                    className="hover:text-green mb-2 text-sm font-medium md:text-base"
                  >
                    সার্টিফিকেট ভেরিফাই করুন
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resource"
                    className="hover:text-green mb-2 text-sm font-medium md:text-base"
                  >
                    ফ্রি ডাউনলোড
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="ml-0 flex w-full flex-col md:ml-4">
          <div className="hidden md:block">
            <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">
              আমাদের যোগাযোগ মাধ্যম
            </h3>
            <p className="mb-4 text-base font-normal">
              কল করুন{/* */}:{/* */}{" "}
              <span>
                <Link className="text-green" href="tel:16910">
                  16910
                </Link>{" "}
                {/* */}(24x7)
              </span>
            </p>
            <p className="mb-4 text-base font-normal">
              হোয়াটসঅ্যাপ{/* */}:{/* */}{" "}
              <span>
                <Link
                  className="text-green"
                  href="https://api.whatsapp.com/send?phone=+8801896016252&text=I need your assistance"
                >
                  +8801896016252
                </Link>
                (24x7)
              </span>
            </p>
            <p className="mb-4 text-base font-normal">
              দেশের বাহির থেকে{/* */}:{/* */}{" "}
              <span>
                <Link className="text-green" href="tel:+8809610916910">
                  +880 9610916910
                </Link>
              </span>
            </p>
            <p className="mb-2 text-base font-normal">
              ইমেইল{/* */}:{/* */}{" "}
              <span className="text-green">support@10minuteschool.com</span>
            </p>
          </div>
          <div className="mx-auto mb-3 mt-5 flex w-full max-w-[256px] gap-6 md:mx-0">
            <div>
              <Link
                href="https://www.facebook.com/10minuteschool/"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                  style={{ fontSize: 0, opacity: 1 }}
                >
                  <Image
                    alt="facebook"
                    width={32}
                    height={32}
                    src="https://cdn.10minuteschool.com/images/facebook_1695730910971.png?w=32&h=32"
                  />
                </div>
              </Link>
            </div>
            <div>
              <Link
                href="https://www.instagram.com/10ms_insta/"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                  style={{ fontSize: 0, opacity: 1 }}
                >
                  <Image
                    alt="instagram"
                    width={32}
                    height={32}
                    src="https://cdn.10minuteschool.com/images/instagram_1695731442397.png?w=32&h=32"
                  />
                </div>
              </Link>
            </div>
            <div>
              <Link
                href="https://www.linkedin.com/company/10ms/"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                  style={{ fontSize: 0, opacity: 1 }}
                >
                  <Image
                    alt="linkedin"
                    width={32}
                    height={32}
                    src="https://cdn.10minuteschool.com/images/linkedin_1695731507042.png?w=32&h=32"
                  />
                </div>
              </Link>
            </div>
            <div>
              <Link
                href="https://www.youtube.com/channel/UCL89KKkLs0tZKld-iIS3NGw"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                  style={{ fontSize: 0, opacity: 1 }}
                >
                  <Image
                    alt="youtube"
                    width={32}
                    height={32}
                    src="https://cdn.10minuteschool.com/images/youtube_1695731538726.png?w=32&h=32"
                  />
                </div>
              </Link>
            </div>
            <div>
              <Link
                href="https://www.tiktok.com/@10minuteschool?lang=en"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                  style={{ fontSize: 0, opacity: 1 }}
                >
                  <Image
                    alt="Tiktok"
                    width={32}
                    height={32}
                    src="https://cdn.10minuteschool.com/images/Tiktok_1695731564895.png?w=32&h=32"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-5 text-center">
        <p className="text-xs font-normal text-gray-600 md:text-sm">
          {" "}
          স্বত্ব © ২০১৫ - ২০২৪ টেন মিনিট স্কুল কর্তৃক সর্বস্বত্ব সংরক্ষিত{" "}
        </p>
      </div>
      <button
        className="fixed bottom-[86px] right-0 z-10 m-5 flex items-center gap-2 px-2 py-2 text-white md:bottom-0 md:px-6 md:py-[14px]"
        style={{
          background:
            "linear-gradient(226.1deg, rgb(8, 206, 51) 0%, rgb(20, 156, 82) 101.24%)",
          borderRadius: "28px 28px 4px",
          zIndex: 49,
          right: 0,
        }}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 24 24"
          height={22}
          width={22}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z" />
          <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z" />
        </svg>
        <span className="hidden md:inline-block">সরাসরি কথা বলুন</span>
      </button>
    </footer>
  );
}
