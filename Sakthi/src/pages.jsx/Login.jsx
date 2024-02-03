import React from 'react';

export default function Login() {
  return (
    <div className='bg-white w-screen h-screen flex justify-center'>
      <div className=' bg-gray-200 shadow-sm w-1  mt-7 h-96 '>
        <label htmlFor='username' className='text-yellow-400 '>
          USERNAME
        </label>
        <input type='text' placeholder='Username' required className='h-6 border-red-500 bg-black p-8 ml-2   rounded-lg '></input>
      </div>
    </div>
  );
}
