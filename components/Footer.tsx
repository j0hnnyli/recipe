import React from 'react'
import Logo from './Logo'
import ScrollTopButton from './ScrollTopButton'


const Footer = () => {
  return (
    <footer className="text-white px-5 border-t-4 border-primary_yellow relative py-20 mt-20">
      <div 
        className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 border-l-4 border-r-4 border-yellow-400 rounded-full flex flex-col items-center justify-center text-white text-center font-kaushanScript z-40 bg-black"
      >
        <Logo width="50" height="50" />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-8 max_width">
        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-kaushanScript text-primary_yellow">RecipeHub</h2>
          <p className="text-sm text-gray-400 mt-2">
            Exciting and delicious recipes are waiting for you to discover!
          </p>
        </div>

        <div className="flex gap-10">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-primary_yellow">Socials</h3>
            <div className="text-sm text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer">Facebook</div>
            <div className="text-sm text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer">X/Twitter</div>
            <div className="text-sm text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer">Instagram</div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-primary_yellow">Contact</h3>
            <div className="text-sm text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer">Email Us</div>
            <div className="text-sm text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer">Support</div>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-primary_yellow">Legal</h3>
            <div className="text-sm text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer">Privacy Policy</div>
            <div className="text-sm text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer">Terms & Conditions</div>
          </div>

        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-8">
        © {new Date().getFullYear()} RecipeHub. All rights reserved.
      </div>

      <ScrollTopButton />
    </footer>

  )
}

export default Footer