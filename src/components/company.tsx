'use client';
import { ReactTyped } from 'react-typed';

export default function TypeAnimation2() {
  const Specialization = [
  'PhilWeb Corporation'
  
  
];

  return (
    <div className='flex gap-1  my-2 w-full'>
      <p className=' md:grid md:grid-cols-2 flex grid-cols-none gap-3 justify-center items-center w-fit h-full p-1 md:p-2 xl:px-20 lg:px-8'>
        The company I work for
      </p>
      <ReactTyped
        className='text-secondary font-bold text-[16px] md:text-[16px] lg:text-[20px] xl:text-[25px]'
        strings={Specialization}
        typeSpeed={50}
        backSpeed={50}
        loop
      />
    </div>
  );
}
