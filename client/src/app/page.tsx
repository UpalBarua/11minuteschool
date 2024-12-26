import { AdmissionTest } from "@/components/admission-test";
import { MotionDiv } from "@/components/motion-div";
import { Banner } from "@/components/banner";
import { JobPreparation } from "@/components/job-preparation";
import { Offerings } from "@/components/offerings";
import { Skills } from "@/components/skills";
import { SscAndHsc } from "@/components/ssc-and-hsc";
import { Testimonials } from "@/components/testimonials";
import { Resources } from "@/components/resources";
import { Stats } from "@/components/stats";
import { App } from "@/components/app";

export default function HomePage() {
  return (
    <main className="grid-container pt-16">
      <Banner />
      <Offerings />
      <SscAndHsc />
      <Skills />
      <AdmissionTest />
      <JobPreparation />
      <Testimonials />
      <Resources />
      <Stats />
      <App />
    </main>
  );
}
