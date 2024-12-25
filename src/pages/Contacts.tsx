import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageNav from "../components/PageNav";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import NavbarLoged from "../components/NavbarLoged";
import FooterT from "../components/FooterT";

export default function ContactPage() {
  return (
    <div>
      <NavbarLoged />
      <div className="py-10">
        <PageNav LocString={["Home", "Contact"]} />
        <div className="flex flex-col md:flex-row  gap-5 p-5 justify-center items-start md:items-stretch lg:px-28">
          <div className="px-5 shadow-xl md:flex-[2]">
            <div className="flex flex-col py-5 border-b-2 border-gray-400 gap-2 justify-center items-start">
              <div className="flex justify-start gap-5 py-3 items-center">
                <div className=" w-10 h-10 rounded-full bg-[#DB4444] flex justify-center items-center">
                  <FontAwesomeIcon icon={faPhone} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">Call To Us</h3>
              </div>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
            <div className="flex flex-col py-5 gap-2 justify-center items-start">
              <div className="flex justify-start gap-5 py-3 items-center">
                <div className=" w-10 h-10 rounded-full bg-[#DB4444] flex justify-center items-center">
                  <FontAwesomeIcon icon={faMailBulk} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">Write To US</h3>
              </div>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
          <div className="p-5 shadow-xl md:flex-[3] lg:text-lg lg:flex-[4] xl:flex-[7]  flex justify-start items-center flex-col gap-5">
            <div className="w-full lg:flex-wrap xl:flex-nowrap  flex justify-start items-center flex-col lg:flex-row gap-3">
              <input
                type="text"
                className="w-[280px] lg:w-full  py-2 px-5 rounded-lg bg-gray-100"
                placeholder="Your Name"
              />
              <input
                type="text"
                className="w-[280px] lg:w-full  py-2 px-5 rounded-lg bg-gray-100"
                placeholder="Your Email"
              />
              <input
                type="text"
                className="w-[280px] lg:w-full  py-2 px-5 rounded-lg bg-gray-100"
                placeholder="Your Phone"
              />
            </div>
            <div className="lg:w-full">
              <textarea
                placeholder="Your Message"
                className="w-[280px] py-1 px-5 h-28 lg:h-40 xl:h-48 bg-gray-100 rounded-lg lg:w-full"
              />
            </div>
            <div className="w-full flex justify-end items-center">
              <button
                type="submit"
                className="p-2 border-0 rounded-lg bg-[#DB4444] text-white "
              >
                Send Massage
              </button>
            </div>
          </div>
        </div>
      </div>
      <FooterT />
    </div>
  );
}
