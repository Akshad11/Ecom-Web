import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface MyStatsCard {
  FAicon: IconDefinition;
  headText: string;
  pText: string;
  isBorder: boolean;
}

export default function StatsCard({ FAicon, headText, pText, isBorder }: MyStatsCard) {
  const [isClicked, setClicked] = useState(false);

  const ChangeClicked = () => {
    setClicked(!isClicked);
  };

  return (
    <div
      className={`flex items-center min-w-[200px] md:min-w-[300px] justify-center ${isClicked ? "bg-[#DB4444]" : "bg-white"
        } flex-col ${isBorder ? "border-4 border-gray-300 " : null} py-5 `}
      onClick={ChangeClicked}
    >
      <div
        className={`w-14 h-14 md:w-20 md:h-20 ${isClicked ? "bg-white" : "bg-black"
          } flex items-center justify-center rounded-full border-8 border-gray-400`}
      >
        <FontAwesomeIcon
          icon={FAicon}
          className={` ${isClicked ? "text-black" : "text-white"} text-lg md:text-2xl`}
        />
      </div>
      <h4
        className={`font-bold text-2xl md:text-4xl ${isClicked ? "text-white" : "text-black"
          } `}
      >
        {headText}
      </h4>
      <p className={`md:text-2xl ${isClicked ? "text-white" : "text-black"} `}>
        {pText}
      </p>
    </div >
  );
}
