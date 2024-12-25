import NavbarLoged from '../components/NavbarLoged'
import FooterT from '../components/FooterT'
import PageNav from '../components/PageNav'
import CartCard from '../components/CartCard'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img1 from '../assets/Chair.png'
import img2 from '../assets/Moniter.png'
import img3 from '../assets/Keyboard.png'
import img4 from '../assets/Gamepad.png'
import img5 from '../assets/GamePad2.png'
import img6 from '../assets/Bag.png'

export default function Cart() {
    const Product = [
        {
            img: img1,
            discount: "-25%",
            name: "S-Series Comfort Chair ",
            disPrice: "375",
            ogPrice: "400",
            rating: 35,
        },
        {
            img: img2,
            discount: "-30%",
            name: "IPS LCD Gaming Monitor",
            disPrice: "370",
            ogPrice: "400",
            rating: 50,
        },

        {
            img: img3,
            discount: "-35%",
            name: "AK-900 Wired Keyboard",
            disPrice: "960",
            ogPrice: "1160",
            rating: 75,
        },
        {
            img: img4,
            discount: "-40%",
            name: "HAVIT HV-G92 Gamepad",
            disPrice: "130",
            ogPrice: "160",
            rating: 100,
        },
        {
            img: img5,
            discount: "-40%",
            name: "HAVIT HV-G92 Gamepad",
            disPrice: "130",
            ogPrice: "160",
            rating: 100,
        },
        {
            img: img6,
            discount: "-40%",
            name: "HAVIT HV-G92 Gamepad",
            disPrice: "130",
            ogPrice: "160",
            rating: 100,
        },
    ];

    const calculateTotalAmount = () => {
        return Product.reduce((total, product) => total + parseFloat(product.disPrice), 0);
    };

    const TotalAmount = calculateTotalAmount();
    const Shipping = TotalAmount > 100 ? 'Free' : 10;
    const Total = Shipping === 'Free' ? TotalAmount : TotalAmount + Shipping;
    return (
        <div>
            <NavbarLoged />
            <div>
                <PageNav LocString={["Home", "Cart"]} />
                <div className='flex flex-col gap-5 p-5 justify-center items-start md:items-stretch lg:px-28'>
                    {Product.map((product, index) => (
                        <CartCard
                            key={index}
                            img={product.img}
                            discount={product.discount}
                            name={product.name}
                            disPrice={product.disPrice}
                            ogPrice={product.ogPrice}
                            rating={product.rating}
                        />
                    ))}
                </div>
                <div className='flex flex-col w-full gap-5 p-5 justify-center items-start md:items-stretch lg:px-28'>
                    <div className='flex w-full flex-col gap-4 p-4 border border-gray-200 mt-8 md:flex-row md:justify-between md:items-center'>
                        <button className='border-2 p-2 presseffect border-black' type='submit'>
                            Return To Shop <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                        <button className='border-2 p-2 presseffect border-black' type='submit'>
                            Update Cart <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                    </div>
                    <div className='flex w-full flex-col gap-4 p-4 border border-gray-200 mt-4 md:flex-row md:justify-between md:items-center'>
                        <input type='text' placeholder='Coupon Code' className='w-full  py-2 px-5 rounded-lg bg-gray-100' />
                        <button className='md:w-[200px] presseffect SignUpbtn p-3' type='submit'>
                            Apply Coupon
                        </button>
                    </div>
                    <div className='mt-8 p-4 w-full border border-gray-200'>
                        <h3 className='text-xl font-semibold mb-4'>Cart Total</h3>
                        <div className='flex justify-between mb-2'>
                            <p className='text-gray-600'>SubTotal:</p>
                            <p className='text-gray-800'>${TotalAmount.toFixed(2)}</p>
                        </div>
                        <div className='flex justify-between mb-2'>
                            <p className='text-gray-600'>Shipping:</p>
                            <p className='text-gray-800'>{Shipping === 'Free' ? 'Free' : `$${Shipping.toFixed(2)}`}</p>
                        </div>
                        <div className='flex justify-between mb-4'>
                            <p className='text-gray-600'>Total:</p>
                            <p className='text-gray-800'>${Total.toFixed(2)}</p>
                        </div>
                        <button className='border-2 p-2 SignUpbtn presseffect border-black' type='submit'>
                            Proceed To Checkout <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                    </div>
                </div>
            </div>
            <FooterT />
        </div>
    );
}
