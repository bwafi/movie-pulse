import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

const ButtonLoadMore = ({ handleLoadMore }: { handleLoadMore: () => void }) => {
  return (
    <button className="mx-3" onClick={handleLoadMore}>
      <BsArrowRightCircle className="text-3xl text-teal hover:scale-110 hover:text-teal/80" />
    </button>
  );
};

export default ButtonLoadMore;
