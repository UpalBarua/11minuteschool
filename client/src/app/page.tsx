import { AdmissionTest } from "@/components/admission-test";
import { Banner } from "@/components/banner";
import { JobPreparation } from "@/components/job-preparation";
import { Offerings } from "@/components/offerings";
import { Skills } from "@/components/skills";
import { SscAndHsc } from "@/components/ssc-and-hsc";

export default function HomePage() {
  return (
    <div className="grid-container">
      <Banner />
      <Offerings />
      <SscAndHsc />
      <Skills />
      <AdmissionTest />
      <JobPreparation />
    </div>
  );
}
