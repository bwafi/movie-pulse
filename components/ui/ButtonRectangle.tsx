import React from "react";

const ButtonRectangle = ({ handleLoadMore }: { handleLoadMore: () => void }) => {
  return (
    <button
      onClick={handleLoadMore}
      className="py-2 px-5 hover:text-black rounded border border-teal relative z-[1] load-more overflow-hidden transition-colors">
      Load More
    </button>
  );
};

export default ButtonRectangle;
