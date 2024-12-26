import { AdmissionTest } from "@/components/admission-test";
import { App } from "@/components/app";
import { Banner } from "@/components/banner";
import { JobPreparation } from "@/components/job-preparation";
import { Offerings } from "@/components/offerings";
import { Resources } from "@/components/resources";
import { Skills } from "@/components/skills";
import { SscAndHsc } from "@/components/ssc-and-hsc";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";

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
