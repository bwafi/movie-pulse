import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { IMAGE_URL } from "@/api/apiConfig";
import dayjs from "dayjs";
import Link from "next/link";

const CardMobile = ({ item }: { item: any }) => {
  return (
    <div className="flex items-center w-full min-h-[140px] rounded-md overflow-hidden bg-black shadow-md border border-teal/30 hover:border-white/30 transition-colors duration-300">
      <Link
        href={`${item.title ? `/movie/detail/${item.id}` : `/tv/detail/${item.id}`}`}
        className="relative block w-4/12 sm:w-2/12 h-full">
        <Image src={`${IMAGE_URL}${item.poster_path}`} alt={item.title || item.name} fill />
      </Link>
      <div className="mx-2 flex flex-col gap-3 my-3 grow flex-1">
        <div className="flex items-center gap-1">
          <AiFillStar className="text-base lg:text-lg text-teal" />
          <p className="tracking-widest text-sm lg:text-base">{item.vote_average.toFixed(1)}</p>
        </div>
        <div className="w-[180px] h-[40px] flex items-center">
          <h1 className="mt-1 text-sm lg:text-base text-white font-semibold line-clamp-2 leading-5">
            {item.title || item.name}
          </h1>
        </div>
        <p className="text-sm font-light ">{dayjs(item.release_date || item.first_air_date).format("MMM DD, YYYY")}</p>
        <p className="mt-1 text-sm font-light line-clamp-2 ">{item.overview}</p>
      </div>
    </div>
  );
};

export default CardMobile;
