import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <Image
        src={"https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"}
        alt="sds"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Hero;
