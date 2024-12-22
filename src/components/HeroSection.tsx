import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img1 from '../assets/Featured.png'
import img2 from '../assets/Featured2.png'
import './herosection.css'
import ImageSlider from './ImgSlider'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


export default function HeroSection() {

    const imges = [
        img1,
        img2,
        img1,
        img1
    ]


    return (
        <div className="w-full pb-5 lg:border-t-2 flex ">
            <div className="hidden  lg:flex lg:w-4/12 xl:w-[23%]">
                <div className='border-r-2 w-full font-bold'>
                    <ul className=' gap-3  px-10 lg:py-5  flex flex-col justify-center items-center'>
                        <li className='w-3/4 flex justify-between '>Woman’s Fashion <FontAwesomeIcon icon={faAngleRight} /> </li>
                        <li className='w-3/4 flex justify-between '>Men’s Fashion <FontAwesomeIcon icon={faAngleRight} /> </li>
                        <li className='w-3/4'>Electronics </li>
                        <li className='w-3/4'>Home & Lifestyle </li>
                        <li className='w-3/4'>Medicine </li>
                        <li className='w-3/4'>Sports & Outdoor</li>
                        <li className='w-3/4'>Baby’s & Toys</li>
                        <li className='w-3/4'>Groceries & Pets</li>
                        <li className='w-3/4'>Health & Beauty </li>
                    </ul>
                </div>
            </div>
            <div className="h-48 md:h-80 lg:w-8/12 lg:p-5 xl:px-20 xl:w-[77%] xl:h-96">
                <ImageSlider images={imges} />
            </div>
        </div>
    )
}
