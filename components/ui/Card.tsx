import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { IMAGE_URL } from "@/api/apiConfig";
import dayjs from "dayjs";

const Card = ({ item }: { item: any }) => {
  return (
    <div className="mb-10 min-w-[17%] min-h-[350px] rounded-md overflow-hidden bg-black shadow-md">
      <div className="relative w-full h-4/6">
        <Image src={`${IMAGE_URL}${item.poster_path}`} alt={item.title} fill priority />
      </div>
      <div className="mx-2 my-2">
        <div className="flex items-center gap-1">
          <AiFillStar className="text-lg text-teal" />
          <p className="tracking-widest">{item.vote_average.toFixed(1)}</p>
        </div>
        <div className="h-[40px] flex items-center">
          <h1 className="mt-1 font-semibold line-clamp-2 leading-5">{item.title || item.name}</h1>
        </div>
        <p className="mt-3 text-sm font-light ">
          {dayjs(item.release_date || item.first_air_date).format("MMM DD, YYYY")}
        </p>
      </div>
    </div>
  );
};

export default Card;
