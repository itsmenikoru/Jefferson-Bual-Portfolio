import Certified from '@/components/certified';
import Description from '@/components/description';
import Header from '@/components/header';
import Socials from '@/components/socials';
import TypeAnimation from '@/components/text_type';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <section>
      <div className='w-full h-svh bg-bg_primary'>
        <div className='md:grid md:grid-cols-2 flex grid-cols-none gap-3 justify-center items-center w-fit h-full p-1 md:p-2 xl:px-20 lg:px-8'>
          <div className='flex flex-col justify-center items-center h-full relative'>
            <div className=' lg:p-5 p-5 '>
              <div className='flex gap-1 items-center animate-slideInLeft1'>
                <Certified badge='Full Stack Developer' />
              </div>
              <div>
                <h1 className='font-bold xl:text-[50px] lg:text-[40px] md:text-[30px] text-[30px] line-clamp-none m-0 animate-slideInLeft2'>
                  Hello! I ‘m
                </h1>
                <h1 className='font-bold xl:text-[80px] lg:text-[50px] md:text-[45px] text-[45px] m-0 animate-slideInLeft3'>
                  Khyle Yanes
                </h1>
                <div className=' animate-slideInLeft4'>
                  <TypeAnimation />
                  <Description />
                </div>
                <div className='animate-scaleIn flex flex-col gap-5'>
                  <div className=' flex w-full mt-5'>
                    <Link
                      href={'#service-page'}
                      className='bg-secondary flex  items-center justify-center gap-2 px-3 py-2 lg:py-3 lg:px-8 hover:bg-button_hover text-white transition-all transform hover:px-6 hover:scale-110 duration-300 rounded-lg'>
                      Get Started
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='size-6'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='absolute bottom-3 animate-scaleIn'>
              <Socials />
            </div>
          </div>
          <div className='hidden md:flex w-full justify-center items-center'>
            <div className=' justify-center items-center mt-20 h-full lg:w-[500px] 2xl:w-[650px] transition-all transform hover:px-6 hover:scale-125 duration-300'>
              <Image
                src={'/profile.png'}
                width={650}
                height={0}
                alt='profile'
                className='animate-scaleIn'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
