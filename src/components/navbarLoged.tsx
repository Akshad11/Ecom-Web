import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight, faBars, faCartShopping, faHeart, faMagnifyingGlass, faSearch, faUser, faX } from "@fortawesome/free-solid-svg-icons";
import './navbarT.css';
import { useNavigate } from 'react-router-dom';

export default function NavbarLoged() {
    const [isBarsClicked, setBarsClicked] = useState(false);
    const [isLogIconClicked, setLogIconClicked] = useState(false);

    const [isLogedIn, setLogedIn] = useState(false);

    const navigate = useNavigate();

    const handleSignoutClick = () => {
        navigate('/signout'); // Navigate to the Sign In page
    };

    const handleLoginClick = () => {
        navigate('/signin'); // Navigate to the Sign In page
    };

    const changeBarClicked = () => {
        setBarsClicked(!isBarsClicked);
    }

    const changeLogClicked = () => {
        setLogIconClicked(!isLogIconClicked);
    }

    const changeLogInClicked = () => {
        setLogedIn(!isLogedIn);
    }

    const [selectedOption, setSelectedOption] = useState<string>('');

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className='Poppins'>
            <div className='sale-header flex items-center justify-center  py-3 bg-black  text-white flex-col text-center gap-2 lg:flex-row'>
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
            <div className='nav-bar xl:px-5 flex justify-between items-center relative py-5'>
                <div className={`absolute z-10 flex flex-col lg:hidden justify-center items-center w-3/4 bg-black text-white transition-all duration-300 top-full ${isBarsClicked ? "left-0" : "right-full"}`}>
                    <ul className=' w-9/12 gap-3 py-4 flex flex-col justify-center items-center'>
                        <li className='w-full flex justify-between md:justify-start md:gap-20'>Woman’s Fashion <FontAwesomeIcon icon={faAngleRight} /> </li>
                        <li className='w-full flex justify-between md:justify-start md:gap-20'>Men’s Fashion <FontAwesomeIcon icon={faAngleRight} /> </li>
                        <li className='w-full'>Electronics </li>
                        <li className='w-full'>Home & Lifestyle </li>
                        <li className='w-full'>Medicine </li>
                        <li className='w-full'>Sports & Outdoor</li>
                        <li className='w-full'>Baby’s & Toys</li>
                        <li className='w-full'>Groceries & Pets</li>
                        <li className='w-full'>Health & Beauty </li>
                    </ul>
                </div>
                <div className='logo-div flex justify-center items-center'>
                    <FontAwesomeIcon icon={isBarsClicked ? faX : faBars} className='text-2xl px-5 lg:hidden ' onClick={changeBarClicked} />
                    <h2 className='font-extrabold xl:text-5xl text-3xl lg:px-5'>Exclusive</h2>
                </div>
                <ul
                    className={`flex-center absolute top-full w-1/2 noSelect py-5 md:py-0 ${isLogIconClicked ? 'right-0' : 'right-full'
                        } flex-center flex-col bg-black text-white gap-5 md:static md:flex-row md:bg-white md:text-black
                        md:text-md xl:text-xl
                        `}
                >    <li >Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li
                        onClick={isLogedIn ? handleSignoutClick : handleLoginClick}
                    >{isLogedIn ? "Sign Out" : "Sign Up"}</li>
                </ul>
                <div className='hidden'>
                    <FontAwesomeIcon icon={isBarsClicked ? faX : faBars} className='text-2xl px-5 md:hidden ' onClick={changeBarClicked} />
                    <FontAwesomeIcon icon={faSearch} className='text-2xl  hidden md:block px-5 ' />
                </div>
                <div className='search-div mx-10 w-52  hidden relative lg:flex'>
                    <input type="text" className='w-52 pl-2 pr-8 py-1 text-md bg-gray-200 rounded-lg' placeholder='Search...' />
                    <span className="icon-span absolute top-1/2 right-2">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
                    </span>
                </div>
                {
                    isLogedIn ? <div className={`px-5 gap-5 text-xl justify-center items-center ${isLogedIn ? "flex" : "hidden"} md:flex`}>
                        <FontAwesomeIcon className='iconclick hidden md:flex' icon={faHeart} />
                        <FontAwesomeIcon className='iconclick' icon={faCartShopping} />
                        <div onClick={changeLogClicked} className='rounded-full presseffect w-7 h-7 flex justify-center items-center text-sm text-white bg-webOrg' > <FontAwesomeIcon icon={faUser} /> </div>
                    </div> : <div className={`px-5 gap-5 text-xl justify-center items-center ${!isLogedIn ? "flex" : "hidden"} md:flex`}>
                        <FontAwesomeIcon className='iconclick md:flex' icon={faUser} onClick={changeLogInClicked} />

                    </div>
                }
            </div>
        </div >
    );
}
