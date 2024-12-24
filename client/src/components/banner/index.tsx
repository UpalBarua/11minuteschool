import Image from "next/image";

import { AcademicCourses } from "./academic-courses";
import { OfflineCourses } from "./offline-courses";
import { SkillCourses } from "./skill-courses";

export function Banner() {
  return (
    <section className="full-width grid-container bg-black bg-[url(/images/img-background-texture.webp)] py-10 text-white">
      <Image
        className="mx-auto mb-10"
        src="https://cdn.10minuteschool.com/images/Frame_2147223622%402x_%281%29_1732776618989.png?w=616&h=85"
        alt="image"
        draggable="false"
        width={616}
        height={85}
      />
      <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
        <AcademicCourses />
        <SkillCourses />
        <OfflineCourses />
      </div>
    </section>
  );
}
