import Image from "next/image";
import Hero from "./components/home/Hero";
import ChoosePrep from "./components/home/ChoosePrep";
import PracticeOverview from "./components/home/PracticeOverview";
import FAQ from "./components/home/FAQ";
import WhereverUare from "./components/home/WhereverUare";
import UsersSaying from "./components/home/UsersSaying";
import ChoosePlan from "./components/home/ChoosePlan";
import ExtraGuidance from "./components/home/ExtraGuidance";
import WelcomePrepMyPTE from "./components/home/WelcomePrepMyPTE";
import CoachingPlan from "./components/pricing/CoachingPlan";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full min-h-screen grid items-center justify-center   ">
        <Hero />
      </div>
      <WelcomePrepMyPTE />
      <div className="md:mb-30 md:mt-45 xl:mb-30 xl:mt-50">
        <ChoosePrep />
      </div>
      <PracticeOverview />
      <FAQ />
      <WhereverUare />
      <UsersSaying />
      <ChoosePlan />
      <CoachingPlan/>
      <ExtraGuidance />
    </div>
  );
}
