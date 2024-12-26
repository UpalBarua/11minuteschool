import { buttonVariants } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Resources() {
  return (
    <section className="my-20">
      <div className="grid grid-cols-1 overflow-hidden rounded-[20px] bg-gradient-to-r from-[#050505] to-[#06081B] py-2 md:grid-cols-2 md:px-10">
        <div className="section-content flex w-full flex-1 flex-col items-center justify-center md:items-start">
          <h2 className="mb-4 text-center text-2xl font-[600] leading-[30px] text-white md:text-left md:text-4xl md:leading-[48px] md:leading-relaxed">
            সেরা শিক্ষকের তৈরি ক্লাস নোট এবং লেকচার শিট প্রয়োজন?
          </h2>
          <div className="flex w-full justify-center px-6 md:max-w-max md:justify-start md:px-0">
            <Link
              className={buttonVariants({
                size: "lg",
                className: "mx-auto mt-2 max-w-max md:mt-20",
              })}
              href=""
            >
              <span className="flex items-center gap-2">
                <DownloadIcon />
                ফ্রি ডাউনলোড করুন
              </span>
            </Link>
          </div>
        </div>
        <div className="section-image flex justify-center md:justify-end">
          <div
            className="w-full max-w-[250px] opacity-0 transition-opacity duration-300 ease-in-out md:max-w-[356px]"
            style={{ fontSize: 0, opacity: 1 }}
          >
            <Image
              src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/image_pdf_1685354763931.png?w=356&h=341"
              alt="svg"
              width={356}
              height={341}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
