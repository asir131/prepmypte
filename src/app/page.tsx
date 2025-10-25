import Image from "next/image";
import Hero from "./components/home/Hero";
import ChoosePrep from "./components/home/ChoosePrep";
import PracticeOverview from "./components/home/PracticeOverview";
import FAQ from "./components/home/FAQ";
import WhereverUare from "./components/home/WhereverUare";
import UsersSaying from "./components/home/UsersSaying";
import ChoosePlan from "./components/home/ChoosePlan";
import ExtraGuidance from "./components/home/ExtraGuidance";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full min-h-screen grid items-center justify-center   ">
        <Hero />
      </div>
      <ChoosePrep />
      <PracticeOverview />
      <FAQ />
      <WhereverUare />
      <UsersSaying />
      <ChoosePlan />
      <ExtraGuidance />
    </div>
  );
}
