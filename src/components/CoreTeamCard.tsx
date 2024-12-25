import {
  faInstagram,
  faLinkedinIn,
  faMeta,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface MyCoreTeam {
  Img: string;
  Name: string;
  Position: string;
}

export default function CoreTeamCard({ Img, Name, Position }: MyCoreTeam) {
  return (
    <div className="min-w-[200px] md:min-h-[350px] h-[300px] flex flex-col justify-start items-center gap-1  shadow-lg ">
      <img src={Img} alt="TeamImg" className="w-full h-[200px] md:h-[250px] py-2 bg-gray-100 object-fill" />
      <h2 className="font-bold text-2xl px-3 ">{Name}</h2>
      <p className="font-bold text-md px-3 text-[#DB4444]">{Position}</p>
      <div className="flex flex-row  px-3 gap-3">
        <FontAwesomeIcon icon={faXTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faMeta} />
        <FontAwesomeIcon icon={faLinkedinIn} />
      </div>
    </div>
  );
}
