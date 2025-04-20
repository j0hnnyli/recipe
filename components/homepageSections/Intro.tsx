import Image from "next/image"
import IntroContent from "./IntroContent";
import FadeInComponent from "../FadeInComponent";


const Intro = () => {
  return (
    <div className="h-auto md:h-[750px]">
      <div className="relative h-full overflow-hidden ">
        <div className="bg-black h-[300px] w-[150%] absolute -top-[200px] z-20 -rotate-[10deg] -ml-32"></div>
        <Image
          src='/introbg.jpg' 
          alt='intro' 
          width={300} 
          height={300}
          priority
          className="absolute h-full w-full object-cover z-10 scale-110 brightness-75"
        />
        <div className="bg-black h-[300px] w-[150%] absolute -bottom-[100px] z-20 -rotate-[10deg] -ml-32"></div>

        <div className="h-full w-full relative z-30 flex flex-col md:flex-row items-center gap-5 p-5">
          <FadeInComponent
            fadeInDirection="left"
            direction="x"
            delay={0.2}
            className="w-full flex items-center justify-center opacity-0"
          >
            <div className="w-60 h-60 md:w-80 md:h-80 border-l-4 border-r-4 border-yellow-400 rounded-full flex flex-col items-center justify-center text-white text-center font-kaushanScript">
              <h2 className="text-4xl font-semibold tracking-widest">RecipeHub</h2>
              <h2 className="text-xl">Delicious Recipess</h2>
              <h2 className="text-xl font-bold tracking-wide">Awaits</h2>
            </div>
          </FadeInComponent>

          <IntroContent />
        </div>

      </div>
    </div>
  )
}

export default Intro
