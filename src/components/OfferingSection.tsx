import { faShieldHalved, faTruck } from "@fortawesome/free-solid-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons/faHeadphones";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OfferingSection() {
    return (
        <div className="pb-20">
            <div className="flex gap-5 flex-wrap justify-center lg:justify-evenly items-center py-5">
                <div className="flex items-center justify-center flex-col">
                    <div className="w-14 h-14 md:w-20 md:h-20 bg-black flex items-center justify-center rounded-full border-8 border-gray-400">
                        <FontAwesomeIcon icon={faTruck} className="text-white text-lg md:text-2xl" />
                    </div>
                    <h4 className="font-bold text-lg md:text-2xl">FREE AND FAST DELIVERY</h4>
                    <p className="md:text-lg">Free delivery for all orders over $140</p>
                </div>
                <div className="flex items-center justify-center flex-col">
                    <div className="w-14 h-14 md:w-20 md:h-20 bg-black flex items-center justify-center rounded-full border-8 border-gray-400">
                        <FontAwesomeIcon icon={faHeadphones} className="text-white text-lg md:text-2xl" />
                    </div>
                    <h4 className="font-bold text-lg md:text-2xl">24/7 CUSTOMER SERVICE</h4>
                    <p className="md:text-lg">Friendly 24/7 customer support</p>
                </div>
                <div className="flex items-center justify-center flex-col">
                    <div className="w-14 h-14 md:w-20 md:h-20 bg-black flex items-center justify-center rounded-full border-8 border-gray-400">
                        <FontAwesomeIcon icon={faShieldHalved} className="text-white text-lg md:text-2xl" />
                    </div>
                    <h4 className="font-bold text-lg md:text-2xl">MONEY BACK GUARANTEE</h4>
                    <p className="md:text-lg">Free delivery for all orders over $140</p>
                </div>
            </div>
        </div>
    )
}
