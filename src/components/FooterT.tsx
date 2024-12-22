import { faCopyright, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './footerT.css'
import MyQR from '../assets/MyQRCode.png'

export default function FooterT() {
    return (
        <div className='footer-div Poppins bg-black text-gray-400'>
            <div className='padding100 py-5'>
                <div className='footer-content flex-center-even flex-col gap-2 md:flex-wrap md:flex-row md:justify-between' >
                    <div className='logo-list w-full gap-2 flex flex-col md:w-min'>
                        <h3 className='hoverunderline px-5 text-xl font-bold text-gray-200'>Exclusive</h3>
                        <h5 className='hoverunderline px-5'>Subscribe</h5>
                        <p className='hoverunderline px-5'>Get 10% off your first order</p>
                        <div className='search-div px-5 relative'>
                            <input type="text" className='w-80 px-5 py-1' placeholder='Email' />
                            <span className="icon-span absolute top-1/2 right-10 text-black">
                                <FontAwesomeIcon icon={faPaperPlane} className='send-icon text-black text-lg' />
                            </span>
                        </div>
                    </div>

                    <ul className='Support-ul w-full md:w-min'>
                        <li className='bigText text-xl px-5 font-bold text-gray-200'>Support</li>
                        <li className='px-5'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                        <li className='px-5'>exclusive@gmail.com</li>
                        <li className='px-5'>+88015-88888-9999</li>

                    </ul>
                    <div className='flex justify-between items-start w-full md:w-min' >
                        <ul className='Support-ul w-full'>
                            <li className=' px-5 bigText text-xl font-bold text-gray-200'>Account</li>
                            <li className='px-5'>My Account</li>
                            <li className='px-5'>Login / Register</li>
                            <li className='px-5'>Cart</li>
                            <li className='px-5'>Wishlist</li>
                            <li className='px-5'>Shop</li>
                        </ul>
                        <ul className='Support-ul w-full md:w-64' >
                            <li className='bigText px-5 text-xl font-bold text-gray-200'>Quick Link</li>
                            <li className='px-5'>Privacy Policy</li>
                            <li className='px-5'>Terms Of Use</li>
                            <li className='px-5'>FAQ</li>
                            <li className='px-5'>Contact</li>
                        </ul>
                    </div>
                    <div className='app-info w-full md:w-max'>
                        <h3 className='hoverunderline px-5 text-xl font-bold text-gray-200'>Download App</h3>
                        <p className='hoverunderline px-5'>Save $3 with App New User Only</p>
                        <div className='QR-div flex justify-start px-5 gap-5 items-start xl:flex-col'>
                            <img src={MyQR} className='w-20 h-20' alt='app-link' />

                            <ul className='social-icons flex justify-start gap-5 items-start'>
                                <li><FontAwesomeIcon icon={faFacebook} size='2x' /></li>
                                <li><FontAwesomeIcon icon={faXTwitter} size='2x' /></li>
                                <li><FontAwesomeIcon icon={faInstagram} size='2x' /></li>
                                <li><FontAwesomeIcon icon={faLinkedin} size='2x' /></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className='flex-center mt-10 pb-3 copy-right'>
                    <p><FontAwesomeIcon icon={faCopyright} /> Copyright Rimel 2022. All right reserved</p>
                </div>
            </div>
        </div>
    )
}
