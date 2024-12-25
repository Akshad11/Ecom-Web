import NavbarLoged from '../components/NavbarLoged'
import FooterT from '../components/FooterT'
import img1 from '../assets/Chair.png'
import img2 from '../assets/Moniter.png'
import img3 from '../assets/Keyboard.png'
import img4 from '../assets/Gamepad.png'
import img5 from '../assets/GamePad2.png'
import img6 from '../assets/Bag.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import ItemCard from '../components/ItemCard'
import ItemsList from '../components/ItemsList'

export default function WishList() {
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
    const count = Product.length;

    return (
        <div>
            <NavbarLoged />
            <div className=' flex flex-col gap-5 md:px-10 lg:px-20'>
                <div className='flex justify-between items-center px-5'>
                    <div className='flex justify-center items-center gap-2'>
                        <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold'>
                            Wishlist
                        </h3>
                        <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold'>({count})</h3>
                    </div>
                    <div>
                        <button className='border-2 p-2 presseffect border-black' type='submit'>Move all to bag <FontAwesomeIcon icon={faAngleRight} /></button>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className="flex justify-start scrollView p-5 items-center gap-5">
                        {Product.map((item, index) => (
                            <ItemCard
                                key={index}
                                img={item.img}
                                discount={item.discount}
                                pName={item.name}
                                pDisPrice={item.disPrice}
                                pOgPrice={item.ogPrice}
                                prating={item.rating}
                            />
                        ))}
                    </div>

                    <ItemsList
                        allProducts={[]}
                        Categorys={[]}
                        featureText="You May Also Like"
                        Type=""
                        Products={Product}

                    />
                </div>
            </div>
            <FooterT />
        </div>
    )
}
