import About from "@/components/About";
import BackgroundedRadar from "@/components/Backgrounded/BackgroundedRadar";
import BackgroundedThreeHours from "@/components/Backgrounded/BackgroundedThreeHours";
import Banner from "@/components/Banner/Banner";
import HowWeWork from "@/components/HowWeWork";
import Prokat from "@/components/Prokat/Prokat";
import RulesDocuments from "@/components/Rules/RulesDocuments";
import RulesRequirements from "@/components/Rules/RulesRequirements";
import RulesSkeleton from "@/components/Rules/RulesSkeleton";
import ToKnow from "@/components/ToKnow";
import UvClienti from "@/components/UvClienti";

export default function Home() {
  return (
    <>
      <Banner />
      <Prokat />

      <BackgroundedRadar />
      <About />
      <ToKnow />

      <div className="flex flex-col">
        <BackgroundedThreeHours />
        <RulesDocuments />
        <RulesRequirements />
      </div>
      <div className="pb-[10rem]">
        <HowWeWork />{" "}
      </div>

      <UvClienti />
    </>
  );
}
