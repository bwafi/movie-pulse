import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { IMAGE_URL } from "@/api/apiConfig";
import dayjs from "dayjs";
import Link from "next/link";

const Card = ({ item }: { item: any }) => {
  return (
    <div className="mb-10 min-w-[17%] min-h-[350px] rounded-md overflow-hidden bg-black shadow-md border border-teal/30 hover:border-white/30 transition-colors duration-300">
      <Link
        href={`${item.media_type === "movie" ? `/movie/detail/${item.id}` : `/tv/detail/${item.id}`}`}
        className="relative block w-full h-[280px]">
        <Image src={`${IMAGE_URL}${item.poster_path}`} alt={item.title || item.name} fill />
      </Link>
      <div className="mx-2 my-3">
        <div className="flex items-center gap-1">
          <AiFillStar className="text-lg text-teal" />
          <p className="tracking-widest">{item.vote_average.toFixed(1)}</p>
        </div>
        <div className="w-[180px] h-[40px] flex items-center">
          <h1 className="mt-1 text-white font-semibold line-clamp-2 leading-5">{item.title || item.name}</h1>
        </div>
        <p className="mt-3 text-sm font-light ">
          {dayjs(item.release_date || item.first_air_date).format("MMM DD, YYYY")}
        </p>
      </div>
    </div>
  );
};

export default Card;
