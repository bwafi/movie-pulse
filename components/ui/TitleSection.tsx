interface TitleSectionPorps {
  handleTrendingDay: () => void;
  handleTrendingWeek: () => void;
  currentTrending: string;
  title: string;
  subTitle: string;
}

const TitleSection = ({
  handleTrendingDay,
  handleTrendingWeek,
  currentTrending,
  title,
  subTitle,
}: TitleSectionPorps) => {
  return (
    <>
      <div className="relative flex items-center gap-5 before:content-[''] before:absolute before:block before:w-1 before:h-3/4 before:bg-teal before:rounded-full">
        <h1 className="ml-3 text-base lg:text-2xl text-white font-semibold ">{title}</h1>

        <div className="w-fit hidden lg:block border border-teal text-white rounded-full text-sm text-center z-[1]">
          <button
            onClick={handleTrendingDay}
            className={`relative overflow-hidden py-0.5 px-5 ${currentTrending === "day" ? "text-black" : ""}`}>
            Today
            <div
              className={`absolute top-0 left-0 h-full w-full bg-teal rounded-full z-[-1] transition-transform ${
                currentTrending === "day" ? "translate-x-0" : "translate-x-full"
              }`}></div>
          </button>
          <button
            onClick={handleTrendingWeek}
            className={`relative overflow-hidden py-0.5 px-5 ${currentTrending === "week" ? "text-black" : ""}`}>
            This Week
            <div
              className={`absolute top-0 left-0 h-full w-full bg-teal rounded-full z-[-1] transition-transform ${
                currentTrending === "week" ? "translate-x-0" : "-translate-x-full"
              }`}></div>
          </button>
        </div>
      </div>
      <p className="mt-1 text-sm lg:text-base">{subTitle}</p>
    </>
  );
};

export default TitleSection;
