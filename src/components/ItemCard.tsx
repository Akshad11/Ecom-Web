

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

interface MYItemCardData {
    img: string;
    discount: string;
    pName: string;
    pOgPrice: string;
    pDisPrice: string;
    prating: number;
}

export default function ItemCard({ img, discount, pName, pOgPrice, pDisPrice, prating }: MYItemCardData) {
    const rating = prating; // Total percentage of rating
    const maxStars = 5; // Maximum stars to display
    const filledStars = Math.round((rating / 100) * maxStars);
    const navigate = useNavigate();

    const handleitemsClick = () => {
        navigate('/Items'); // Navigate to the Sign In page
    };

    return (
        <div onClick={handleitemsClick} className="w-[45%] md:w-[220px] lg:w-[300px] md:h-[300px] h-[200px] lg:h-[400px] rounded-lg shadow-lg">
            <div className='h-[60%] flex justify-center bg-gray-100 items-center relative'>
                <img className='w-10/12 h-5/6 object-scale-down' src={img} alt='item image' />
                <div className='absolute top-2 bg-webOrg left-2 w-10 md:w-16 md:h-9 h-7 lg:w-20 lg:h-12 shadow-lg rounded-md flex justify-center items-center'>
                    <p className='text-white text-[12px] md:text-sm lg:text-lg'>{discount}</p>
                </div>
                <div className='absolute bg-transparent top-2 right-2 w-7 h-7 border-webOrg md:w-9 md:h-9 lg:w-12 lg:h-12 rounded-full border  flex justify-center items-center'>
                    <FontAwesomeIcon className='lg:text-lg text-webOrg ' icon={faHeart} />
                </div>
            </div>
            <div className='h-[40%] px-3 flex flex-col justify-evenly md:justify-center md:gap-2 items-start'>
                <h4 className="truncate w-[80%] lg:text-xl">{pName}</h4>
                <div className='flex gap-3 justify-start items-center'>
                    <h4 className='text-webOrg text-lg lg:text-2xl'>{pDisPrice}</h4>
                    <h5 className='text-gray-400 line-through'>{pOgPrice}</h5>
                </div>
                <div className="flex items-center text-[12px] md:text-sm  lg:text-lg gap-1 text-yellow-400">
                    {Array.from({ length: maxStars }, (_, index) => (
                        <FontAwesomeIcon className={index < filledStars ? "text-yellow-400" : "text-gray-300"} icon={faStar} />
                    ))}
                    <span className="ml-2 text-gray-700">({prating})</span>
                </div>
            </div>
        </div>
    )
}
