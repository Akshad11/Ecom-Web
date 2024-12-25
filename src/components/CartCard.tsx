import { useState } from 'react';

interface CartCardProps {
    img: string;
    discount: string;
    name: string;
    disPrice: string;
    ogPrice: string;
    rating: number;
}

export default function CartCard({ img, discount, name, disPrice, ogPrice, rating }: CartCardProps) {
    const [count, setCount] = useState(1);

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
        <div className='w-full'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4 border border-gray-200 p-4 transition-transform duration-300 hover:scale-105'>
                <div className='flex gap-4 items-center flex-[1]'>
                    <img src={img} alt={name} className='w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32' />
                </div>
                <div className='flex flex-col gap-2 flex-[2]'>
                    <h4 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold'>{name}</h4>
                    <div className='flex gap-2 items-center'>
                        <h4 className='text-lg md:text-xl lg:text-2xl xl:text-3xl text-green-600'>${disPrice}</h4>
                        <h5 className='line-through text-gray-400 text-sm md:text-base lg:text-lg xl:text-xl'>${ogPrice}</h5>
                        <span className='text-green-500 text-sm md:text-base lg:text-lg xl:text-xl'>{discount} off</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <span className='text-yellow-500 text-sm md:text-base lg:text-lg xl:text-xl'>Rating: {rating}</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <button
                            className='bg-webOrg text-white px-2 py-1 rounded-md  transition-transform duration-300 hover:scale-110'
                            onClick={handleDecrement}
                        >
                            -
                        </button>
                        <h4 className='text-lg md:text-xl lg:text-2xl xl:text-3xl'>{count}</h4>
                        <button
                            className='bg-webOrg text-white px-2 py-1 rounded-md  transition-transform duration-300 hover:scale-110'
                            onClick={handleIncrement}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
