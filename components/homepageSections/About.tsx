import AnimateText from "../AnimateText";
import Logo from "../Logo";

const textArray = [
  "Welcome to RecipeHub, where a world of delicious recipes awaits your exploration!",
  "Discover a diverse collection of meals from various cultures, ranging from quick weeknight dinners to festive dishes.",
  "So grab your apron, gather your ingredients, and happy cooking as you explore flavors from around the globe!"
];


const About = () => {
  return (
    <div className="relative border-t-4 border-primary_yellow mt-40">
      <div 
        className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 border-l-4 border-r-4 border-yellow-400 rounded-full flex flex-col items-center justify-center text-white text-center font-kaushanScript z-40 bg-black"
      >
        <Logo width="50" height="50" />
        <h2 className="text-white text-xl mt-2">About</h2>
      </div>

      <div
       className="text-xl md:text-2xl md:w-[80%] mx-auto text-white my-32 p-5"
      >
        {textArray.map((text, i) => <AnimateText key={i} className="relative mt-1.5">{text}</AnimateText>)}
      </div>
    </div>
  )
}

export default About