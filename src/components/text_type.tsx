'use client';
import { ReactTyped } from 'react-typed';

export default function TypeAnimation() {
  const Specialization = ['Machine Learning','Statistical Analysis','Data Visiualization', 'Database Management'];

  return (
    <div className='flex gap-1  my-2 w-full'>
      <p className=' text-black font-bold text-[16px] md:text-[16px] lg:text-[20px] xl:text-[25px]'>
        Specialized in
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
