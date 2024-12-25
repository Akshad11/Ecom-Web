import { useNavigate } from "react-router-dom";
import FooterT from "../components/FooterT";
import NavbarLoged from "../components/NavbarLoged";
import PageNav from "../components/PageNav";

export default function PageNotFound() {
  const navigate = useNavigate();

  const handleSignoutClick = () => {
    navigate('/homepage'); // Navigate to the Sign In page
  };

  return (
    <div>
      <NavbarLoged />
      <div className="w-full py-10">
        <PageNav LocString={["Home", "404 Error"]} />
        <div className="w-full flex justify-start gap-5 lg:gap-10 items-center flex-col px-5">
          <h1 className="text-[40px] md:text-[85px] lg:text-[105px] font-bold lg:font-normal">
            404 Not Found
          </h1>
          <p className="text-center md:text-xl">
            Your visited page not found. You may go home page.
          </p>
          <button
            type="submit"
            className="p-2 border-0 bg-[#DB4444] md:text-xl text-white "
            onClick={handleSignoutClick}
          >
            Back to home page
          </button>
        </div>
      </div>
      <FooterT />
    </div>
  );
}
