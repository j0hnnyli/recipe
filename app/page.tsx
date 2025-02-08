import SmoothScrollContainer from "@/components/SmoothScrollContainer";
import Intro from "@/components/homepageSections/Intro";
import PopularRecipesSection from "@/components/homepageSections/PopularRecipesSection";

export default function Home() {
  return (
    <SmoothScrollContainer>
      <Intro />
      <PopularRecipesSection />
    </SmoothScrollContainer> 
  );
}
