import FooterT from "../components/FooterT";
import HeroSection from "../components/HeroSection";
import ItemsList from "../components/ItemsList";
import NavbarLoged from "../components/navbarLoged";
import img1 from '../assets/Chair.png'
import img2 from '../assets/Moniter.png'
import img3 from '../assets/Keyboard.png'
import img4 from '../assets/Gamepad.png'
import img5 from '../assets/GamePad2.png'
import img6 from '../assets/Bag.png'
import img7 from '../assets/Camera.png'
import img8 from '../assets/Cream.png'
import img9 from '../assets/Desk.png'
import img10 from '../assets/Desk.png'
import img11 from '../assets/FootballShoes.png'
import img12 from '../assets/PinkJacket.png'
import imgf1 from '../assets/Featured.png'
import imgf2 from '../assets/Featured2.png'
import { faCamera, faClock, faGamepad, faHeadphones, faLaptop, faMobile } from "@fortawesome/free-solid-svg-icons";
import ImageSlider from "../components/ImgSlider";
import OfferingSection from "../components/OfferingSection";

export default function HomePage() {
    const imges = [
        imgf1,
        imgf2,
        imgf1,
        imgf2
    ]


    const Category = [
        {
            faicon: faMobile,
            typeText: "Phones"
        },
        {
            faicon: faLaptop,
            typeText: "Laptops"
        },
        {
            faicon: faClock,
            typeText: "Watches"
        },
        {
            faicon: faCamera,
            typeText: "Camera"
        },
        {
            faicon: faHeadphones,
            typeText: "Headphones"
        },
        {
            faicon: faGamepad,
            typeText: "Gaming"
        },
    ]




    const Product = [
        {
            img: img1,
            discount: "-25%",
            name: "S-Series Comfort Chair ",
            disPrice: "$375",
            ogPrice: "$400",
            rating: 35,
        },
        {
            img: img2,
            discount: "-30%",
            name: "IPS LCD Gaming Monitor",
            disPrice: "$370",
            ogPrice: "$400",
            rating: 50,
        },

        {
            img: img3,
            discount: "-35%",
            name: "AK-900 Wired Keyboard",
            disPrice: "$960",
            ogPrice: "$1160",
            rating: 75,
        },
        {
            img: img4,
            discount: "-40%",
            name: "HAVIT HV-G92 Gamepad",
            disPrice: "$130",
            ogPrice: "$160",
            rating: 100,
        },
        {
            img: img5,
            discount: "-40%",
            name: "HAVIT HV-G92 Gamepad",
            disPrice: "$130",
            ogPrice: "$160",
            rating: 100,
        },
        {
            img: img6,
            discount: "-40%",
            name: "HAVIT HV-G92 Gamepad",
            disPrice: "$130",
            ogPrice: "$160",
            rating: 100,
        },
    ];
    const allProduct = [
        {
            img: img1,
            discount: "-25%",
            name: "S-Series Comfort Chair ",
            disPrice: "$375",
            ogPrice: "$400",
            rating: 35,
        },
        {
            img: img2,
            discount: "-30%",
            name: "IPS LCD Gaming Monitor",
            disPrice: "$370",
            ogPrice: "$400",
            rating: 50,
        },

        {
            img: img3,
            discount: "-35%",
            name: "AK-900 Wired Keyboard",
            disPrice: "$960",
            ogPrice: "$1160",
            rating: 75,
        },
        {
            img: img4,
            discount: "-40%",
            name: "HAVIT HV-G92 Gamepad",
            disPrice: "$130",
            ogPrice: "$160",
            rating: 100,
        },
        {
            img: img5,
            discount: "-40%",
            name: "HAVIT HV-G92 Gamepad",
            disPrice: "$130",
            ogPrice: "$160",
            rating: 100,
        },
        {
            img: img6,
            discount: "-40%",
            name: "HAVIT HV-G92 Gamepad",
            disPrice: "$130",
            ogPrice: "$160",
            rating: 100,
        },
        {
            img: img7,
            discount: "-40%",
            name: "HAVIT HV-G92 Gamepad",
            disPrice: "$130",
            ogPrice: "$160",
            rating: 100,
        },
        {
            img: img8,
            discount: "-40%",
            name: "HAVIT HV-G92 Gamepad",
            disPrice: "$130",
            ogPrice: "$160",
            rating: 100,
        },
        {
            img: img9,
            discount: "-40%",
            name: "HAVIT HV-G92 Gamepad",
            disPrice: "$130",
            ogPrice: "$160",
            rating: 100,
        },
        {
            img: img10,
            discount: "-40%",
            name: "HAVIT HV-G92 Gamepad",
            disPrice: "$130",
            ogPrice: "$160",
            rating: 100,
        },
        {
            img: img11,
            discount: "-40%",
            name: "HAVIT HV-G92 Gamepad",
            disPrice: "$130",
            ogPrice: "$160",
            rating: 100,
        },
        {
            img: img12,
            discount: "-40%",
            name: "HAVIT HV-G92 Gamepad",
            disPrice: "$130",
            ogPrice: "$160",
            rating: 100,
        },

    ];
    return (
        <div>
            <NavbarLoged />
            <HeroSection />
            <ItemsList
                allProducts={[]}
                Categorys={[]}
                featureText="Today's"
                Type="Flash Sales"
                Products={Product}

            />
            <ItemsList
                allProducts={[]}
                Categorys={Category}
                featureText="Categories"
                Type="Browse By Categorys"
                Products={[]}

            />
            <div className="lg:py-10 p-5 md:px-10 md:py-10 lg:px-32">
                <ImageSlider images={imges} />
            </div>

            <ItemsList
                allProducts={allProduct}
                Categorys={[]}
                featureText="Our Products"
                Type="Explore Our Products"
                Products={[]}

            />
            <OfferingSection />
            <FooterT />
        </div>
    )
}
