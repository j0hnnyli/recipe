import AnimateText from "../AnimateText";

const textArray = [
  "Welcome to RecipeHub, where a world of delicious recipes awaits your exploration!",
  "Discover a diverse collection of meals from various cultures, ranging from quick weeknight dinners to festive dishes.",
  "So grab your apron, gather your ingredients, and happy cooking as you explore flavors from around the globe!"
];


const About = () => {
  return (
    <div
      className="text-xl md:text-2xl 2xl:text-5xl md:w-[80%] mx-auto mt-10"
    >
      {textArray.map((text, i) => <AnimateText key={i} className="relative mt-3">{text}</AnimateText>)}
    </div>
  )
}

export default About