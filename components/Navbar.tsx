// import Image from 'next/image'
import { RiMenu2Line } from "react-icons/ri";
import { FaBowlFood } from "react-icons/fa6";

const Navbar = () => {
  return (
    <header className='fixed top-0 w-full text-white h-20 z-50 bg-black'>
      <div className='flex items-center justify-between h-full w-full max-w-[2200px] mx-auto p-4'>
        <div>
          <RiMenu2Line className='text-2xl font-bold'/>
        </div>

        <div className='flex items-center'>
          {/* <Image 
            src="/logo.png" 
            alt="logo" 
            width={300}
            height={300}
            className='w-[50px] h-[50px] mr-3 text-white'
          /> */}
          <h2 className='text-2xl font-bold'>RecipeHub</h2>
        </div>

        <div>
          <FaBowlFood className=''/>
        </div>
      </div>
    </header>
  )
}

export default Navbar