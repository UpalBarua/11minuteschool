import { AdmissionTest } from "@/components/admission-test";
import { Banner } from "@/components/banner";
import { JobPreparation } from "@/components/job-preparation";
import { Offerings } from "@/components/offerings";
import { Skills } from "@/components/skills";
import { SscAndHsc } from "@/components/ssc-and-hsc";
import { Testimonials } from "@/components/testimonials";
import { Resources } from "@/components/resources";

export default function HomePage() {
  return (
    <main className="grid-container">
      <Banner />
      <Offerings />
      <SscAndHsc />
      <Skills />
      <AdmissionTest />
      <JobPreparation />
      <Testimonials />
      <Resources />
    </main>
  );
}
