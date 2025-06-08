import Link from 'next/link';
import { HiArrowLongRight } from "react-icons/hi2";

export default function EmptyList() {
  return (
    <div className="flex flex-col items-center text-center px-6 py-12 space-y-6 sm:px-12 sm:py-16 rounded-lg text-primary_yellow">

      <h2 className="text-2xl sm:text-3xl font-semibold ">
        Welcome to Your Recipe List!
      </h2>

      <p className="max-w-md text-white">
        Save your favorite recipes and revisit or share them anytime you like.
      </p>

      <Link href="/categories/beef?input="
        className="mt-2 bg-primary_yellow hover:bg-yellow-700 hover:text-white text-black font-medium py-3 px-8 rounded-lg shadow transition flex items-center gap-2 group"
      >
        <span>Explore Categories</span>
        <span className='group-hover:ml-2 transition-ml duration-300 ease-in-out'><HiArrowLongRight/></span>
      </Link>

    </div>
  );
}
