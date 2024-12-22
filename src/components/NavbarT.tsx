import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars, faMagnifyingGlass, faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import './navbarT.css';
import { useNavigate } from 'react-router-dom';

export default function NavbarT() {
    const [isBarsClicked, setBarsClicked] = useState(false);
    const changeBarClicked = () => {
        setBarsClicked(!isBarsClicked);
    }
    const navigate = useNavigate();

    const handleSignoutClick = () => {
        navigate('/signup'); // Navigate to the Sign In page
    };



    const [selectedOption, setSelectedOption] = useState<string>('');

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className='Poppins'>
            <div className='sale-header flex items-center justify-center py-3 bg-black  text-white flex-col text-center gap-2 lg:flex-row'>
                <div className='middle-comp font-extrabold xl:text-lg flex-center gap-2 lg:gap-10 flex-col lg:flex-row lg:flex-[5]'>
                    <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <div className='flex items-center justify-between w-9/12 lg:w-[100px]'>
                        <button>Shop Now</button>
                        <div className="dropdown text-black lg:hidden ">
                            <select id="options-dropdown" className='options-d' value={selectedOption} onChange={handleSelectChange}>
                                <option value="">English <FontAwesomeIcon icon={faAngleDown} /></option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="dropdown hidden text-black lg:flex lg:flex-[1] ">
                    <select id="options-dropdown" className='options-d rounded-md px-2' value={selectedOption} onChange={handleSelectChange}>
                        <option value="">English <FontAwesomeIcon icon={faAngleDown} /></option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
            </div>
            <div className='nav-bar flex justify-between items-center relative py-5'>
                <div className='logo-div'>
                    <h2 className='font-extrabold xl:text-5xl text-3xl px-5'>Exclusive</h2>
                </div>
                <ul
                    className={`flex-center absolute top-full w-1/2 noSelect py-5 md:py-0 ${isBarsClicked ? 'right-0' : 'right-full'
                        } flex-center flex-col bg-black text-white gap-5 md:static md:flex-row md:bg-white md:text-black
                        md:text-md xl:text-xl
                        `}
                >    <li >Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li
                        onClick={handleSignoutClick}
                    >Sign Up</li>
                </ul>
                <div className='lg:hidden'>
                    <FontAwesomeIcon icon={isBarsClicked ? faX : faBars} className='text-2xl px-5 md:hidden ' onClick={changeBarClicked} />
                    <FontAwesomeIcon icon={faSearch} className='text-2xl  hidden md:block px-5 ' />
                </div>
                <div className='search-div mx-10 w-52  hidden relative lg:flex'>
                    <input type="text" className='w-52 pl-2 pr-8 py-1 text-md bg-gray-200 rounded-lg' placeholder='Search...' />
                    <span className="icon-span absolute top-1/2 right-2">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
                    </span>
                </div>

            </div>
        </div >
    );
}
