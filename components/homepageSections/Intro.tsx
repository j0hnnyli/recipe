import { FaUtensils, FaClock, FaHeart, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TiWorld } from "react-icons/ti";
import Image from "next/image"


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
          className="absolute h-full w-full object-cover z-10 scale-110 brightness-75"
        />
        <div className="bg-black h-[300px] w-[150%] absolute -bottom-[100px] z-20 -rotate-[10deg] -ml-32"></div>

        <div className="h-full w-full relative z-30 flex flex-col md:flex-row items-center gap-5 p-5">
          <div className="w-full flex items-center justify-center">
            <div className="w-60 h-60 md:w-80 md:h-80 border-l-4 border-r-4 border-yellow-400 rounded-full flex flex-col items-center justify-center text-white text-center font-kaushanScript">
              <h2 className="text-4xl font-semibold tracking-widest">RecipeHub</h2>
              <h2 className="text-xl">Delicious Recipess</h2>
              <h2 className="text-xl font-bold tracking-wide">Awaits</h2>
            </div>
          </div>

          <div className="w-full">   
            <div
              className='flex flex-col gap-10 md:w-[80%] mx-auto'
            >
              <div
                className="flex items-center text-white w-full justify-between border-b-2 "
              >
                <div className="text-4xl 2xl:text-6xl mb-2">
                  <FaUtensils className="text-primary_yellow"></FaUtensils>
                </div>
                <p className="text-xl 2xl:text-3xl">Variety of Recipes</p>
              </div>

              <div 
                className="flex items-center text-white w-full justify-between border-b-2"
              >
                <div className="text-4xl 2xl:text-6xl mb-2">
                  <FaClock className="text-primary_yellow"></FaClock>
                </div>
                <p className="text-xl 2xl:text-3xl">Quick & Easy Recipes</p>
              </div> 

              <div
                className="flex items-center text-white w-full justify-between border-b-2"
              >
                <div className="text-4xl 2xl:text-6xl mb-2">
                  <TiWorld className="text-primary_yellow"></TiWorld>
                </div>
                <p className="text-xl 2xl:text-3xl">Variety of Cultures</p>
              </div>

              <div
                className="flex items-center text-white w-full justify-between border-b-2"
              >
                <div className="text-4xl 2xl:text-6xl mb-2">
                  <FaHeart className="text-primary_yellow"></FaHeart>
                </div>
                <p className="text-xl 2xl:text-3xl">Personalized Recipe List</p>
              </div>            
            
              <div className='flex items-center text-primary_yellow justify-center'>
                <FaFacebook className="text-4xl mr-5 hover:text-white cursor-pointer" />
                <FaSquareXTwitter className="text-4xl mr-5 hover:text-white cursor-pointer" />
                <FaInstagramSquare className="text-4xl mr-5 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
