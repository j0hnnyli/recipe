import About from "@/components/homepageSections/About";
import Intro from "@/components/homepageSections/Intro";
import PopularRecipesSection from "@/components/homepageSections/PopularRecipesSection";

export default function Home() {
  return (
      <>
        <Intro />
        <About />
        <PopularRecipesSection />
      </>
  );
}
