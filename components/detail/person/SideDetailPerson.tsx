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
      <div className="relative w-full h-[390px] rounded-md overflow-hidden">
        <Image src={`${IMAGE_URL}${detailPersonData?.profile_path}`} alt={`${detailPersonData?.name}`} fill />
      </div>

      <div className="my-8">
        <h2 className="font-semibold text-lg text-white">Personal Info</h2>
        <section className="mt-5 flex flex-col gap-8">
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
