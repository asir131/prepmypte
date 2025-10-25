import Image from "next/image";
import Hero from "./components/home/Hero";
import ChoosePrep from "./components/home/ChoosePrep";
import PracticeOverview from "./components/home/PracticeOverview";
import FAQ from "./components/home/FAQ";
import WhereverUare from "./components/home/WhereverUare";

export default function Home() {
  return (
    <div>
      <div className="w-full min-h-screen grid items-center justify-center   ">
        <Hero />
      </div>
      <ChoosePrep />
      <PracticeOverview />
      <FAQ />
      <WhereverUare />
    </div>
  );
}
