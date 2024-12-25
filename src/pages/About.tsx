import PageNav from "../components/PageNav";
import Aboutimg from '../assets/aboutImg.png'
import pplimg1 from '../assets/ppl1.png'
import pplimg2 from '../assets/ppl2.png'
import pplimg3 from '../assets/ppl3.png'
import StatsCard from "../components/StatsCard";
import { faHeadphones, faShield, faShop, faTruck } from "@fortawesome/free-solid-svg-icons";
import NavbarLoged from "../components/NavbarLoged";
import FooterT from "../components/FooterT";
import CoreTeamCard from "../components/CoreTeamCard";

export default function About() {
  return (
    <div>
      <NavbarLoged />
      <div className="p-5 flex flex-col gap-5 ">
        <PageNav LocString={["Home", "About"]} />
        <div className="flex flex-col md:flex-row  gap-10 lg:px-20">
          <div className="flex flex-col justify-center gap-5 md:flex-[1] items-start ">
            <h3 className="text-[30px] text-start">Our Story</h3>
            <p className="text-lg">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by wide
              range of tailored marketing, data and service solutions, Exclusive
              has 10,500 sallers and 300 brands and serves 3 millioons customers
              across the region.
            </p>
            <p className="text-lg">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="rounded-lg md:flex-[1]">
            <img
              src={Aboutimg}
              className="w-full h-full rounded-lg"
              alt="Photo"
            />
          </div>
        </div>
        <div className="flex justify-start scrollView py-5 items-center gap-5">
          <StatsCard
            FAicon={faShop}
            headText="10.5k"
            pText="Sallers active our site"
            isBorder={true}
          />
          <StatsCard
            FAicon={faShop}
            headText="10.5k"
            isBorder={true}
            pText="Sallers active our site"
          />
          <StatsCard
            isBorder={true}
            FAicon={faShop}
            headText="10.5k"
            pText="Sallers active our site"
          />
        </div>
        <div className="flex justify-start scrollView py-5 items-center gap-5">
          <CoreTeamCard
            Img={pplimg1}
            Name="Tom Cruise"
            Position="Founder & Chairman"
          />
          <CoreTeamCard
            Img={pplimg2}
            Name="Tom Cruise"
            Position="Founder & Chairman"
          />
          <CoreTeamCard
            Img={pplimg3}
            Name="Tom Cruise"
            Position="Founder & Chairman"
          />
        </div>
        <div className="flex justify-start scrollView py-5 items-center gap-5">
          <StatsCard
            isBorder={false}
            FAicon={faTruck}
            headText="10.5k"
            pText="Sallers active our site"
          />
          <StatsCard
            isBorder={false}
            FAicon={faHeadphones}
            headText="10.5k"
            pText="Sallers active our site"
          />
          <StatsCard
            isBorder={false}
            FAicon={faShield}
            headText="10.5k"
            pText="Sallers active our site"
          />
        </div>
      </div>
      <FooterT />
    </div>
  );
}
