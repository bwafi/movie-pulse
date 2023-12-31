import { IMAGE_URL } from "@/api/apiConfig";
import { DetailPersonProps } from "@/libs/type";
import Image from "next/image";
import React from "react";

const SideDetailPerson = ({ detailPersonData }: { detailPersonData: DetailPersonProps | null }) => {
  const genderVonverter = (gender?: number) => {
    switch (gender) {
      case 0:
        return "Not set / not specified";
      case 1:
        return "Female";
      case 2:
        return "Male";

      default:
        return "Non-binary";
    }
  };

  return (
    <div className="w-full mx-auto">
      <div className="relative w-full mx-auto xs:w-7/12 sm:w-6/12 lg:w-full h-[390px] rounded-md overflow-hidden">
        <Image src={`${IMAGE_URL}${detailPersonData?.profile_path}`} alt={`${detailPersonData?.name}`} fill />{" "}
      </div>

      <h1 className="text-3xl lg:text-4xl text-center mt-5 lg:hidden font-bold text-white">{detailPersonData?.name}</h1>

      <div className="my-8">
        <h2 className="font-semibold text-lg text-white">Personal Info</h2>
        <section className="mt-5 flex flex-col gap-3 lg:gap-8">
          <div>
            <h2 className="font-semibold text-white">Known For</h2>
            <span>{detailPersonData?.known_for_department}</span>
          </div>
          <div>
            <h2 className="font-semibold text-white">Gender</h2>
            <span>{genderVonverter(detailPersonData?.gender)}</span>
          </div>
          <div>
            <h2 className="font-semibold text-white">Birthday</h2>
            <span>{detailPersonData?.birthday}</span>
          </div>
          <div>
            <h2 className="font-semibold text-white">Place of Birth</h2>
            <span>{detailPersonData?.place_of_birth}</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SideDetailPerson;
