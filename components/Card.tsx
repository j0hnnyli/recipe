import Image from "next/image";
import Link from "next/link";

type Props = {
  img: string,
  title: string,
  id: string,
}

const Card = ({img, title, id} : Props) => {
  return (
    <Link href={`/recipe/${id}`}
      className="hover:border border-primary_yellow rounded-xl p-1"
    >
      <div>
        <Image
          src={img}
          alt={title}
          width={300}
          height={300}
          priority
          className="h-full w-full rounded-lg"
        />
      </div>
      <h2 className="text-white font-kaushanScript text-2xl">
        {
          title.length > 25 ?
          title.slice(0, 25) + '...' : 
          title
        }
      </h2>
    </Link>
  )
}

export default Card