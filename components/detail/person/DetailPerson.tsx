import React from "react";

interface DetailPersonProps {
  name: string | undefined;
  biography: string | undefined;
}

const DetailPerson = ({ name, biography }: DetailPersonProps) => {
  return (
    <section className="w-full">
      <h1 className="text-4xl font-bold text-white">{name}</h1>
      <div className="mt-5">
        <h2 className="font-semibold text-white text-lg">Biography</h2>
        <p className="mt-3 leading-[22px] tracking-wide">{biography}</p>
      </div>
    </section>
  );
};

export default DetailPerson;
