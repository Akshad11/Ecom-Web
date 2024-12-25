import FooterT from '../components/FooterT'
import './signup.css'
import sign from '../assets/signPic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import NavbarT from '../components/NavbarT';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/signin'); // Navigate to the Sign In page
    };

    const handleCreateClick = () => {
        navigate("/homepage");
    }

    return (
        <div>
            <NavbarT />
            <div className='Sign-div flex-center'>
                <div className='signin-content'>
                    <div className='sign-img'>
                        <img src={sign} alt='Sign-Image' />
                    </div>
                    <div className='sign-form Poppins'>
                        <div className='Sign-inputs'>
                            <h2>Create an account</h2>
                            <p>Enter your details below</p>
                            <input className='InputSI' placeholder='Name' />
                            <input className='InputSI' placeholder='Email or Phone Number' />
                            <input
                                className="InputSI"
                                type={'text'}
                                placeholder="Password"
                            />
                            <div className='w-full flex flex-col justify-start items-start gap-5'>
                                <button className='presseffect SignUpbtn w-[90%] h-14' type='submit' onClick={handleCreateClick}>Create Account</button>
                                <button className='presseffect w-[90%] h-14 rounded-md border-2 border-gray-400' type='submit'><FontAwesomeIcon icon={faGoogle} /> Sign up with Google</button>
                            </div>
                            <div className='flex gap-3'>
                                <p>Already have account?</p>
                                <p
                                    className="ForgetPasswordpe noSelect"
                                    onClick={handleLoginClick}
                                    style={{ cursor: 'pointer' }} // Add a pointer cursor for better UX
                                >
                                    Log in
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterT />
        </div>
    );
}
