import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const courses = [
  {
    imgUrl:
      "https://cdn.10minuteschool.com/images/thumbnails/BCS_Preli_Recorded_Course_Thumbnail.jpg?w=351&h=198",
    title: "বিসিএস প্রিলি রেকর্ডেড কোর্স",
    instructor: "Farhan Sakib +20",
    href: "",
  },
  {
    imgUrl:
      "https://cdn.10minuteschool.com/images/skills/Updated_Thumbnail_v3/BankJ.jpg?w=351&h=198",
    title: "ব্যাংক জবস কোর্স",
    instructor: "Akif Masumi +8",
    href: "",
  },
  {
    imgUrl:
      "https://cdn.10minuteschool.com/images/skills/Updated_Thumbnail_v3/shorkari_chakri_prostuti_rac.jpg?w=351&h=198",
    title: "সরকারি চাকরি প্রস্তুতি বেসিক কোর্স",
    instructor: "Akif Masumi +10",
    href: "",
  },
  {
    imgUrl:
      "https://cdn.10minuteschool.com/images/thumbnails/english-for-govt-jobs-16x9-updated.jpg?w=351&h=198",
    title: "English for Govt. Jobs",
    instructor: "Shahnawaz Hossain Jay",
    href: "",
  },
  {
    imgUrl:
      "https://cdn.10minuteschool.com/images/thumbnails/gk-course-for-govt-jobs-thumbnail.jpg?w=351&h=198",
    title: "GK for Govt. Jobs",
    instructor: "আব্দুর রহমান শ্রাবণ",
    href: "",
  },
  {
    imgUrl:
      "https://cdn.10minuteschool.com/images/thumbnails/PATR23/PATR_updated_thumbnail_May_2023.jpg?w=351&h=198",
    title: "প্রাথমিক সহকারী শিক্ষক নিয়োগ পরীক্ষা কোর্স - ২০২৩",
    instructor: "Farhan Sakib +3",
    href: "",
  },
  {
    imgUrl:
      "https://cdn.10minuteschool.com/images/skills/Updated_Thumbnail_v3/bcs_qs_thumbnail.jpg?w=351&h=198",
    title: "বিসিএস প্রশ্ন সমাধান",
    instructor: "Akif Masumi +3",
    href: "",
  },
  {
    imgUrl:
      "https://cdn.10minuteschool.com/images/thumbnails/bank_jobs_question_solve_course_model_test.jpg?w=351&h=198",
    title: "ব্যাংক জবস প্রশ্ন সমাধান + মডেল টেস্ট কোর্স",
    instructor: "Akif Masumi +2",
    href: "",
  },
  {
    imgUrl:
      "https://cdn.10minuteschool.com/images/thumbnails/ministry-jobs-question-solve-model-test-thumbnail.jpg?w=351&h=198",
    title: "মিনিস্ট্রি জবস প্রশ্ন সমাধান + মডেল টেস্ট কোর্স",
    instructor: "Akif Masumi +4",
    href: "",
  },
  {
    imgUrl:
      "https://cdn.10minuteschool.com/images/skills/Updated_Thumbnail_v3/BCS_preli.jpg?w=351&h=198",
    title: "বিসিএস প্রিলি মডেল টেস্ট",
    instructor: "সামিউর রহমান +5",
    href: "",
  },
] as const;

// export default function Note() {
//   return (
//     <>
//       {courses.map((course, index) => (
//         <a href={course.href} key={index}>
//           <img
//             alt={course.title}
//             src={course.imgUrl}
//             draggable="false"
//             loading="lazy"
//             width={351}
//             height={198}
//             decoding="async"
//             style={{ color: "transparent" }}
//           />
//           <div className="flex min-h-[118px] min-w-0 flex-1 flex-col justify-between p-[14px] md:min-h-[145px]">
//             <div>
//               <h2 className="mb-1 line-clamp-2 h-14 text-sm font-semibold md:text-lg">
//                 {course.title}
//               </h2>
//               <h2 className="max-h-[50px] overflow-hidden truncate text-xs text-[#6B7280] md:text-sm">
//                 {course.instructor}
//               </h2>
//             </div>
//           </div>
//         </a>
//       ))}
//     </>
//   );
// }

const icon = (
  <svg
    width={21}
    height={20}
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.943 10.7675V17.5648C18.943 18.0798 18.3361 18.4973 17.5874 18.4973H3.41424C2.66554 18.4973 2.05859 18.0798 2.05859 17.5648V10.7675C2.05859 10.2525 2.66554 9.83496 3.41424 9.83496H17.5874C18.3361 9.83496 18.943 10.2525 18.943 10.7675Z"
      fill="#C7C6FD"
    />
    <path
      d="M19.9124 5.28371V11.8775C19.9124 12.6262 19.3055 13.2332 18.5568 13.2332H2.44451C1.69581 13.2332 1.08887 12.6262 1.08887 11.8775V5.28371C1.08887 4.53501 1.69581 3.92807 2.44451 3.92807H18.5568C19.3055 3.92807 19.9124 4.53501 19.9124 5.28371Z"
      fill="#6572EF"
    />
    <path
      d="M11.5649 13.1908V15.4597C11.5649 15.5774 11.4369 15.6505 11.3356 15.5906L10.5853 15.1473C10.5329 15.1163 10.4678 15.1161 10.4152 15.1467L9.64742 15.5932C9.54606 15.6522 9.41895 15.5791 9.41895 15.4618V13.1908H11.5649Z"
      fill="#6572EF"
    />
    <path
      d="M12.2293 12.4778V14.007C12.2293 14.2069 12.0673 14.369 11.8674 14.369H9.13441C8.93451 14.369 8.77246 14.2069 8.77246 14.007V12.4778C8.77246 12.2779 8.93451 12.1159 9.13441 12.1159H11.8674C12.0673 12.1159 12.2293 12.2779 12.2293 12.4778Z"
      fill="white"
    />
    <path
      d="M13.6348 3.92913H12.5503V2.81486C12.5503 2.68862 12.447 2.58534 12.3208 2.58534H8.67927C8.55303 2.58534 8.44975 2.68862 8.44975 2.81486V3.92913H7.36523V2.65669C7.36523 2.01832 7.88274 1.50082 8.52111 1.50082H12.4789C13.1173 1.50082 13.6348 2.01832 13.6348 2.65669V3.92913Z"
      fill="#C7C6FD"
    />
  </svg>
);

export function JobPreparation() {
  return (
    <div className="full-width grid-container mb-10 bg-white py-8 md:mb-0 md:py-[120px]">
      <div className="mx-auto mb-10 px-4 text-center">
        <h2 className="flex items-center justify-center gap-2 pb-3 text-sm font-medium text-[#4355f3] md:pb-6 md:text-lg">
          {icon}
          <span>চাকরি প্রস্তুতি</span>
        </h2>
        <p className="mb-2 text-2xl font-semibold leading-[32px] text-[#111827] md:mb-4 md:text-[44px] md:leading-[56px]">
          সরকারি চাকরির সর্বোচ্চ প্রস্তুতি
        </p>
        <p className="mb-7 text-sm font-normal leading-[22px] text-[#4B5563] md:mb-4 md:text-lg md:leading-7 md:tracking-normal">
          বিসিএস কিংবা ব্যাংকে চাকরি - টার্গেট যেটাই হোক, সলিউশন এখানেই!
        </p>
      </div>
      <div className="tenms-carousel light both relative">
        <div className="w-full overflow-hidden">
          <div className="mx-lg:hidden absolute right-0 top-1/2 z-[3] block -translate-y-1/2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={33}
              height={32}
              fill="none"
              viewBox="0 0 33 32"
              className="xl:mr-[-40px]"
            >
              <path
                fill="#000"
                fillOpacity="0.5"
                fillRule="evenodd"
                d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="mx-lg:hidden absolute left-0 top-1/2 z-[2] block -translate-y-1/2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={33}
              height={32}
              fill="none"
              viewBox="0 0 33 32"
              className="rotate-180 xl:ml-[-40px]"
            >
              <path
                fill="#000"
                fillOpacity="0.5"
                fillRule="evenodd"
                d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="no-scrollbar relative flex snap-x snap-mandatory flex-nowrap gap-4 overflow-x-scroll scroll-smooth">
          {courses.map(({ title, imgUrl, instructor, href }) => (
            <Link href={href} key={title}>
              <div className="h-full w-64 overflow-hidden rounded-lg border border-[#E5E7EB] bg-white transition-colors hover:border-green-600 md:min-w-[272px] md:max-w-[272px] md:rounded-[10px]">
                <Image src={imgUrl} alt={title} width={351} height={198} />
                <div className="flex min-h-[118px] min-w-0 flex-1 flex-col justify-between p-[14px] md:min-h-[145px]">
                  <h3 className="mb-1 line-clamp-2 h-14 text-sm font-semibold md:text-lg">
                    মেডিকেল ফাইনাল এক্সাম ব্যাচ ২০২৪
                  </h3>
                  <p className="max-h-[50px] overflow-hidden truncate text-xs text-[#6B7280] md:text-sm">
                    {instructor}
                  </p>
                  <span className="mt-4 flex items-center gap-x-1 text-xs font-semibold text-green-600 underline-offset-2 hover:underline md:text-sm md:font-medium">
                    বিস্তারিত
                    <ArrowRightIcon className="size-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-2 flex justify-center md:mt-6 md:pt-12">
        <a
          className="group flex items-center justify-center gap-2 rounded bg-[#1CAB55] py-3 pl-7 pr-5 font-medium text-white transition-colors duration-300 hover:bg-[#198b46]"
          href="/jobs-prep/"
        >
          সকল কোর্স
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:translate-x-1"
            height={20}
            width={20}
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </a>
      </div>
    </div>
  );
}
