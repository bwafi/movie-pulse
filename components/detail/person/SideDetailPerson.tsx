import Image from "next/image";
import React from "react";

const SideDetailPerson = () => {
  return (
    <div className="w-full mx-auto">
      <div className="relative w-full h-[360px] rounded-md overflow-hidden">
        <Image src={"https://image.tmdb.org/t/p/original/whNwkEQYWLFJA8ij0WyOOAD5xhQ.jpg"} alt="asda" fill />
      </div>

      <div className="my-8">
        <h2 className="font-semibold text-lg text-white">Personal Info</h2>
        <section className="mt-5 flex flex-col gap-8">
          <div>
            <h2 className="font-semibold text-white">Known For</h2>
            <span>Directing</span>
          </div>
          <div>
            <h2 className="font-semibold text-white">Gender</h2>
            <span>Male</span>
          </div>
          <div>
            <h2 className="font-semibold text-white">Birthday</h2>
            <span>1970-07-30 (53 years old)</span>
          </div>
          <div>
            <h2 className="font-semibold text-white">Place of Birth</h2>
            <span>Westminster, London, England, UK</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SideDetailPerson;
