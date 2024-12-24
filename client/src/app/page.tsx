import { Banner } from "@/components/banner";
import { Offerings } from "@/components/offerings";

export default function HomePage() {
  return (
    <div className="grid-container">
      <Banner />
      <Offerings />
      <h1 className="py-10 text-center text-3xl font-medium">
        11 Minutes School
      </h1>
    </div>
  );
}
