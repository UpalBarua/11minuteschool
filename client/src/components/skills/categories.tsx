const categories = [
  {
    title: "ভাষা শিক্ষা",
    courses: "23 Courses",
  },
  {
    title: "ফ্রিল্যান্সিং",
    courses: "10 Courses",
  },
  {
    title: "বান্ডেল",
    courses: "13 Courses",
  },
  {
    title: "স্কিলস এন্ড আইটি",
    courses: "23 Courses",
  },
  {
    title: "ডিজাইন এন্ড ক্রিয়েটিভ",
    courses: "9 Courses",
  },
  {
    title: "ক্যারিয়ার রেডিনেস",
    courses: "9 Courses",
  },
  {
    title: "কিডস কোর্সসমূহ",
    courses: "2 Courses",
  },
  {
    title: "প্রফেশনাল কোর্সসমূহ",
    courses: "9 Courses",
  },
  {
    title: "ফ্রি কোর্সসমূহ",
    courses: "29 Courses",
  },
] as const;

export function Categories() {
  return (
    <div className="no-scrollbar relative flex snap-x snap-mandatory flex-nowrap gap-4 overflow-x-scroll scroll-smooth">
      {categories.map(({ title, courses }) => (
        <div
          className="cursor-pointer snap-start rounded-xl border bg-[#111827] p-6 transition-all duration-300 hover:border-green-500 hover:bg-[#1c2741]"
          key={title}
        >
          <p className="mb-2 whitespace-nowrap text-sm text-gray-300 md:text-base">
            {title}
          </p>
          <p className="whitespace-nowrap text-xs text-gray-400 md:text-sm">
            {courses}
          </p>
        </div>
      ))}
    </div>
  );
}
