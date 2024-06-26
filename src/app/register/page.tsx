"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Register = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(res.status == 400) {
        setError("User already exists");
      }
      if (res.status == 200) {
        setError("");
        router.push("/login");
      }
    } catch(error) {
      setError("An error occurred");
      console.log(error);
    }
  };

  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
        <div className='bg-[#212121] p-8 rounded shadow-md w-96'>
            <h1 className='text-4xl text-center font-semibold mb-8'>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" className='w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black' placeholder='Email' required />
                <input type="password" className='w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black' placeholder='Password' required />
                <button type="submit" className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600'>Register</button>
                {error && <div className='text-red-500 text-center mt-4'>{error}</div>}
            </form>
            <div className="text-center text-gray-500 mt-4">- OR -</div>
            <Link href={'login'} className='block text-center text-blue-500 hover:underline mt-2'>
                Login with an existing account
            </Link>
        </div>
    </div>
  )
}

export default Register;