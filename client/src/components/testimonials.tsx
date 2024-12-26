import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import data from "@/data/data.json";
import { MotionDiv } from "./motion-div";

export function Testimonials() {
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
      <section>
        <div
          className="mx-auto px-4 text-center"
          style={{ color: "initial", maxWidth: 578 }}
        >
          <div className="mx-auto">
            <h2 className="mb-2 text-2xl font-semibold leading-[32px] text-[#111827] dark:text-foreground md:mb-4 md:text-[44px] md:leading-[56px]">
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
              {data.testimonials.map(({ name, testimonial, profession }) => (
                <CarouselItem
                  className="py-2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                  key={name}
                >
                  <div className="relative mt-5 flex min-h-[250px] flex-col justify-between rounded-lg border bg-[#FFF] p-6 align-top dark:bg-secondary dark:text-secondary-foreground md:min-h-[270px]">
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
            <CarouselPrevious className="size-8 translate-x-[3.5rem] border-0 bg-foreground/60 transition-colors hover:bg-foreground/70" />
            <CarouselNext className="size-8 -translate-x-[3.5rem] border-0 bg-foreground/60 transition-colors hover:bg-foreground/70" />
          </Carousel>
        </div>
      </section>
    </MotionDiv>
  );
}
