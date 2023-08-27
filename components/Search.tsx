import { getSearch } from "@/api/apiCall";
import { IMAGE_URL } from "@/api/apiConfig";
import { ApiPorps } from "@/libs/type";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import { useGlobalContext } from "@/context/context";

const Search = () => {
  const { setSearcOpen, handleSearchState } = useGlobalContext();
  const [searchData, setSearchData] = useState<ApiPorps[]>([]);
  const [query, setQuery] = useState<string>("");
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    getSearch(query).then((res) => {
      setSearchData(res.data.results);
    });
  }, [query]);

  useEffect(() => {
    const handleOutSide = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setSearcOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutSide);

    return () => document.removeEventListener("mousedown", handleOutSide);
  }, [setSearcOpen]);

  return (
    <section className="w-full h-screen flex justify-center top-0 left-0 fixed bg-black/10 backdrop-blur-sm z-50">
      <div
        ref={wrapperRef}
        className="w-6/12 max-h-[600px] absolute top-28 rounded-xl overflow-hidden bg-green-black shadow-lg border border-teal/30">
        <div className="flex items-center px-3 shadow-lg">
          <BiSearch className="text-2xl" />
          <input
            className="w-full h-14 mx-3 bg-green-black placeholder:italic focus:outline-none"
            placeholder="Search for a movie, tv show, person"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="w-full h-full">
          <ul className="w-full max-h-[400px] overflow-scroll">
            {searchData.map((item) => (
              <li key={item.id} className="p-3 border-t border-teal/30 hover:bg-[#1C2129] transition-colors">
                <Link
                  href={`/${item.media_type}/detail/${item.id}`}
                  onClick={handleSearchState}
                  className="flex gap-3 items-center">
                  <div className="w-14 h-20 relative rounded-md overflow-hidden">
                    <Image
                      src={`${IMAGE_URL}${item.profile_path ? item.profile_path : item.poster_path}`}
                      alt={`${item.title ? item.title : item.name}`}
                      fill
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="font-semibold">{item.title || item.name}</h1>
                    <p className="text-sm capitalize">{item.media_type}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Search;
