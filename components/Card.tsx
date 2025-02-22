import Image from "next/image";
import Link from "next/link";
import QuickAddButton from "./QuickAddButton";

type Props = {
  img: string,
  title: string,
  id: string,
}

const Card = ({img, title, id} : Props) => {
  return (
    <div className="hover:border border-primary_yellow rounded-xl p-1 relative ">
      <Link href={`/recipe/${id}`} className="absolute w-full h-full z-10"></Link>

      <div className="relative">
        <Image
          src={img}
          alt={title}
          width={300}
          height={300}
          priority
          className="h-full w-full rounded-lg"
        />

        <QuickAddButton />

      </div>
      <h2 className="text-white font-kaushanScript text-2xl">
        {
          title.length > 25 ?
          title.slice(0, 25) + '...' : 
          title
        }
      </h2>
    </div>
  )
}

export default Card