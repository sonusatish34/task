// pages/login.js
"use client"; // This is a client component
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loader from './loader';
// import axios from 'axios';
export default function Login() {
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // State to manage loader visibility

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loader when form is submitted

    if (phone && (password == "0506")) {
      localStorage.setItem("password", "0506");
      // alert("login succesful")
      router.push('./dashboard');
    }
    else {
      setError("password incorrect");
      setLoading(false); // Hide loader when error occurs
    }
  };
  useEffect(() => {
    let savedPass = localStorage.getItem('password') ? localStorage.getItem('password') : '';
    setPassword(savedPass);
  }, [])
  // console.log(localStorage.getItem("password"))
  return (
    <div className=' flex items-center justify-center md: lg: xl: py-3 '>
      {/* <h1>Login</h1> */}
      <div className=''>
        <form className='text-white text-center border border-blue-500 rounded-md p-4 shadow-orange-600' onSubmit={handleSubmit}>
          <h1 className='text-3xl font-medium'>Sign In</h1>
          <div className='py-2'>
            {/* <label className='relative right-2 top-4' for="phone">phone number</label> */}
            <input required maxLength={10} name='phone' className='text-black rounded-sm' type="tel" placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className='py-2'>

            {/* <label for="password">Password</label> */}
            <input required name='password' className='text-black rounded-sm ease-in' type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className='bg-green-500 rounded w-full' type="submit" disabled={loading}>Sign in</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
      {loading && <Loader />} {/* Show loader when loading */}
    </div>
  );
}
