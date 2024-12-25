import NavbarT from '../components/NavbarT'
import FooterT from '../components/FooterT'
import './signIn.css'
import sign from '../assets/signPic.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();


  const handleHomeClick = () => {
    navigate('/Homepage'); // Navigate to the Sign In page
  };
  const [showPassword, setShowPassword] = useState<boolean>(false);
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
              <h2>Log in to Exclusive</h2>
              <p>Enter your details below</p>
              <input className='InputSI' placeholder='Email or Phone Number' />
              {/* Password input with dynamic type */}
              <input
                className="InputSI"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
              />
              <div className='flex justify-start gap-3 items-center w-full'>
                <input
                  className='w-5'
                  id="showPasswordCheckbox"
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
                <label htmlFor="showPasswordCheckbox">Show Password</label>
              </div>
              <div className='forgotPassP'>
                <button className='presseffect' onClick={handleHomeClick} type='submit'>Log In</button>
                <p className='ForgetPasswordpe noSelect'

                >Forget Password</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterT />
    </div>
  );
}
