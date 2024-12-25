import { useState } from 'react';
import PageNav from '../components/PageNav';
import FooterT from '../components/FooterT';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faTruck, faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import NavbarLoged from '../components/NavbarLoged';
import img1 from '../assets/Gamepad.png';
import ImageSlider from '../components/ImgSlider';
import ItemsList from '../components/ItemsList';

import img2 from '../assets/Moniter.png'
import img3 from '../assets/Keyboard.png'
import img4 from '../assets/Gamepad.png'
import img5 from '../assets/GamePad2.png'
import img6 from '../assets/Bag.png'
const maxStars = 5;


interface ItemDetailsProps {
    productID: string;
}

export default function ItemDetails({ productID }: ItemDetailsProps) {

    const productIDNum = parseInt(productID);

    const Product = [
        {
            img: [img1, img1, img1],
            discount: "-25%",
            name: "HAVIC HV G-92 Gamepad",
            disPrice: "130",
            ogPrice: "160",
            rating: 4,
            productID: productIDNum,
        },
    ]

    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState('white');
    const [selectedSize, setSelectedSize] = useState('s');

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleAddToCart = () => {
        // Add to cart logic here
        console.log('Added to cart:', quantity, selectedColor, selectedSize);
    };

    const handleBuyNow = () => {
        // Buy now logic here
        console.log('Buy now:', quantity, selectedColor, selectedSize);
    };

    const Product1 = [
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

    return (
        <div>
            <NavbarLoged />
            <div className='flex flex-col gap-8'>
                <PageNav LocString={["Home", "Item Details"]} />
                <div className='flex flex-col lg:flex-row gap-8 p-5 lg:p-10'>
                    <div className='flex-1'>
                        <div className='hidden'>

                        </div>
                        <div>
                            <ImageSlider images={Product[0].img} />
                        </div>
                    </div>
                    <div className='flex-1'>
                        <h3 className='text-2xl md:text-3xl lg:text-4xl font-semibold mb-4'>{Product[0].name}</h3>
                        <div className="flex items-center text-[12px] md:text-sm lg:text-lg gap-1 text-yellow-400 mb-4">
                            {Array.from({ length: maxStars }, (_, index) => (
                                <FontAwesomeIcon key={index} className={index < Product[0].rating ? "text-yellow-400" : "text-gray-300"} icon={faStar} />
                            ))}
                            <span className="ml-2 text-gray-700">({Product[0].rating})</span>
                        </div>
                        <div className='mb-4'>
                            <p className='text-lg md:text-xl lg:text-2xl text-green-600'>${Product[0].disPrice}</p>
                            <p className='text-sm md:text-base lg:text-lg line-through text-gray-400'>${Product[0].disPrice}</p>
                        </div>
                        <p className='mb-4 text-sm md:text-base lg:text-lg'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                        <div className='mb-4 flex justify-start gap-5 items-center'>
                            <h4 className='text-lg md:text-xl lg:text-2xl font-semibold mb-2'>Colours:</h4>
                            <div className='flex gap-2'>
                                <div
                                    className={`p-2 presseffect w-8 h-8 rounded-full  cursor-pointer ${selectedColor === 'white' ? 'border-black border-4' : 'border'}`}
                                    onClick={() => setSelectedColor('white')}
                                >
                                </div>
                                <div
                                    className={`p-2 presseffect w-8 h-8  bg-red-500 text-white border rounded-full cursor-pointer ${selectedColor === 'red' ? 'border-black border-4' : 'border'}`}
                                    onClick={() => setSelectedColor('red')}
                                >

                                </div>
                            </div>
                        </div>
                        <div className='mb-4 flex justify-start gap-5 items-center'>
                            <h4 className='text-lg md:text-xl lg:text-2xl font-semibold mb-2'>Size:</h4>
                            <div className='flex gap-2'>
                                <div
                                    className={`p-2 border presseffect rounded-lg cursor-pointer ${selectedSize === 's' ? 'border-0 bg-webOrg text-white' : ''}`}
                                    onClick={() => setSelectedSize('s')}
                                >
                                    s
                                </div>
                                <div
                                    className={`p-2 border presseffect rounded-lg cursor-pointer ${selectedSize === 'l' ? 'border-0  bg-webOrg text-white' : ''}`}
                                    onClick={() => setSelectedSize('l')}
                                >
                                    l
                                </div>
                                <div
                                    className={`p-2 border presseffect rounded-lg cursor-pointer ${selectedSize === 'xl' ? 'border-0  bg-webOrg text-white' : ''}`}
                                    onClick={() => setSelectedSize('xl')}
                                >
                                    xl
                                </div>
                                <div
                                    className={`p-2 border presseffect rounded-lg cursor-pointer ${selectedSize === 'xxl' ? 'border-0  bg-webOrg text-white' : ''}`}
                                    onClick={() => setSelectedSize('xxl')}
                                >
                                    xxl
                                </div>
                            </div>
                        </div>
                        <div className='mb-4 flex items-center gap-4'>
                            <div className='flex items-center gap-2'>
                                <button className='bg-gray-200 p-2 presseffect rounded-md' onClick={handleDecrement}>-</button>
                                <div className='p-2 border rounded-md'>{quantity}</div>
                                <button className='bg-gray-200 p-2 presseffect rounded-md' onClick={handleIncrement}>+</button>
                            </div>
                            <button className='bg-webOrg presseffect text-white px-4 py-2 rounded-md' onClick={handleAddToCart}>Add to Cart</button>
                            <div className='text-red-500'>
                                <FontAwesomeIcon icon={faHeart} className='text-xl' />
                            </div>
                        </div>
                        <button className='bg-webOrg presseffect text-white px-4 py-2 rounded-md w-full lg:w-auto' onClick={handleBuyNow}>Buy Now</button>
                        <div className='mt-8'>
                            <div className='flex items-center gap-4 mb-4'>
                                <div className='text-webOrg'>
                                    <FontAwesomeIcon icon={faTruck} />
                                </div>
                                <div>
                                    <p className='text-lg font-semibold'>Free Delivery</p>
                                    <p className='text-sm text-gray-600'>Enter your postal code for Delivery Availability</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='text-webOrg'>
                                    <FontAwesomeIcon icon={faCircleLeft} />
                                </div>
                                <div>
                                    <p className='text-lg font-semibold'>Return Delivery</p>
                                    <p className='text-sm text-gray-600'>Free 30 Days Delivery Returns. Details</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ItemsList
                    allProducts={[]}
                    Categorys={[]}
                    featureText="Also check out"
                    Type=""
                    Products={Product1}

                />
            </div>
            <FooterT />
        </div>
    );
}