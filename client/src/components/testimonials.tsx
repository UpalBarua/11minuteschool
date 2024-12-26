import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    testimonial:
      "কোর্সটির প্রতিটি সেকশনে ছিল স্পষ্ট নির্দেশনা । বিশেষ করে, “Reading” এবং “Writing” সেকশন এতটাই informative ছিল যা আমার জন্য Mock Test এবং Real Exam কে সহজ করে তুলেছিল। আমার সবচেয়ে ভালো লেগেছে “Writing Part”.",
    name: "Tahiya Faiza",
    profession: "Teaching Assistant, Brac University",
  },
  {
    testimonial:
      "অফলাইনে শেখার মত সময় হয়ে উঠছিল না তাই অনলাইন কোর্স কে বেছে নেওয়া । কোর্সটিতে খুব সুন্দর করে হরফ তানভীন মাদ পড়ানো হয়েছে । খুব সহজেই প্রতিদিন প্র্যাকটিস করে খুব দ্রুত শুদ্ধ তেলাওয়াত আয়ত্ত করতে পেরেছি।",
    name: "Zakirul Islam",
    profession: "Businessman",
  },
  {
    testimonial:
      "আমার একটি অনলাইন পেজ ছিল কিন্তু পেইজটিকে নিয়ে কিভাবে সামনে আগাবে কোন কিছু বুঝতে পারছিলাম না । কোর্সটি করার মাধ্যমে কিভাবে একটি বেসিক পোস্ট দিবো কিভাবে ইউজ করব কিভাবে কন্টাক্ট করবো শিখতে পেরেছি।",
    name: "Hasibur Rahman",
    profession: "Online Business Owner",
  },
  {
    testimonial:
      "টেন মিনিট স্কুলের অনলাইন ব্যাচে ইংরেজি ক্লাস করার পর ইংরেজি বিষয়ে আমি ৯০+ মার্কস পেয়েছি। এছাড়াও টেন মিনিট স্কুলের লাইভ চ্যাট, পোল এবং লিডারবোর্ড ফিচারটি চমৎকার যা আমাদের প্রতিনিয়ত পড়াশোনার আগ্রহ বাড়াতে সাহায্য করেছে।",
    name: "Mushfik Jaman",
    profession: "Class 8, Bedkashi Collegiate School, Khulna",
  },
  {
    testimonial:
      "অনলাইন ব্যাচের ক্লাসের সবচেয়ে চমৎকার বিষয় হলো ক্লাসে পড়ানোর টেকনিক। প্রত্যেকটি শিক্ষক এত যত্ন করে ক্লাসগুলো করান যে আমার বাচ্চা ক্লাসগুলো খুব এঞ্জয় করে। পড়াশোনা এমন মজারই হওয়া দরকার! এছাড়া, মান্থলি এক্সাম, লেকচার শীট গুলো ও খুবই মানসম্মত।",
    name: "Miftahul Jannat",
    profession: "Class 7",
  },
] as const;

export function Testimonials() {
  return (
    <section>
      <div
        className="mx-auto px-4 text-center"
        style={{ color: "initial", maxWidth: 578 }}
      >
        <div className="mx-auto">
          <h2 className="mb-2 text-2xl font-semibold leading-[32px] text-[#111827] md:mb-4 md:text-[44px] md:leading-[56px]">
            কেন আমরাই শিক্ষার্থী ও অভিভাবকগণের প্রথম পছন্দ?
          </h2>
        </div>
      </div>
      <div className="mb-20">
        <div className="text-center">
          <h2 className="mb-5 text-center text-lg font-semibold md:mb-8 md:text-[28px] md:font-semibold md:leading-[44px]" />
        </div>
        <Carousel className="mb-4 w-full max-w-full md:mb-6">
          <CarouselContent>
            {testimonials.map(({ name, testimonial, profession }) => (
              <CarouselItem
                className="py-2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                key={name}
              >
                <div className="relative mt-5 flex min-h-[250px] flex-col justify-between rounded-lg border bg-[#FFF] p-6 align-top md:min-h-[270px]">
                  <div>
                    <div
                      className="absolute -top-4 left-5 z-[2] flex h-[38px] w-[38px] flex-row items-center justify-center rounded-full bg-[#FCE0D6] p-2"
                      id="quote"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={10}
                          height={10}
                          fill="none"
                          viewBox="0 0 20 30"
                        >
                          <path
                            fill="#D33242"
                            d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                          />
                        </svg>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={10}
                          height={10}
                          fill="none"
                          viewBox="0 0 20 30"
                        >
                          <path
                            fill="#D33242"
                            d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="my-4">
                      <div className="line-clamp-6 text-[16px] font-[500px] leading-[26px]">
                        {testimonial}
                      </div>
                    </div>
                  </div>
                  <div className="TestimonialSlider_testimonial_user__2Uxrv flex gap-4">
                    <div>
                      <h3>{name}</h3>
                      <p className="line-clamp-1 text-sm text-gray-400">
                        {profession}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="size-8 translate-x-[2rem] border-0 bg-foreground/60 transition-colors hover:bg-foreground/70" />
          <CarouselNext className="hover:bg-white/bg-foreground/70 size-8 -translate-x-[2rem] border-0 bg-foreground/60 transition-colors" />
        </Carousel>
      </div>
    </section>
  );
}
