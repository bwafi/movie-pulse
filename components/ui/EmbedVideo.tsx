import React from "react";
import { AiOutlineClose } from "react-icons/ai";

interface EmbedVideoProps {
  handleCloseEmbed: () => void;
  embedYtb: boolean;
  movieVideoKey: string;
}

const EmbedVideo = ({ handleCloseEmbed, embedYtb, movieVideoKey }: EmbedVideoProps) => {
  return (
    <div
      className={`fixed bg-black/40 backdrop-blur top-0 left-0 items-center justify-center z-50 w-full h-screen ${
        embedYtb ? "flex" : "hidden"
      }`}>
      <button onClick={handleCloseEmbed} className="absolute top-3 lg:top-10 right-5 lg:right-20">
        <AiOutlineClose className="text-4xl hover:scale-110 transition-all" title="Close" />
      </button>
      {embedYtb && (
        <iframe
          key={movieVideoKey}
          className="w-11/12 h-[60%] sm:h-[70%] md:h-[90%] lg:w-[800px] lg:h-[500px]"
          src={`https://www.youtube.com/embed/${movieVideoKey}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
      )}
    </div>
  );
};

export default EmbedVideo;
