import Certified from '@/components/certified';
import Description from '@/components/description';
import Title from '@/components/title';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  const services_card = [
    {
      src: '/mobile_app_image.png',
      alt: 'Mobile Development',
      title: 'Mobile Application',
      details: [
        'User-Centered Design',
        'Performance Optimization',
        'Cross-Platform Compatibility',
        'More',
      ],
    },
    {
      src: '/web_app_image.png',
      alt: 'Web Development',
      title: 'Web Application',
      details: [
        'Responsive Design',
        'Performance Optimization',
        'Security Best Practices',
        'More',
      ],
    },
    {
      src: '/ui_wireframe_image.png',
      alt: 'UI/UX',
      title: 'UI/UX',
      details: [
        'User-Centered Design',
        'Consistency and Simplicity',
        'Interaction Design and Feedback',
        'More',
      ],
    },
  ];
  return (
    <section>
      <div className='w-full h-fit lg:h-svh bg-bg_secondary flex flex-col sm:justify-center sm:items-center md:gap-10 lg:gap-5 xl:gap-10 gap-3  xl:p-20 lg:p-8 p-5 overflow-hidden'>
        <div className='col-span-1 flex flex-col mt-10 w-full'>
          <div className=''>
            <Certified badge='Best Services' />
            <Title title='What Can I Do for You' />
            <Description />
          </div>
        </div>
        <div className='row-span-2 sm:row-span-none flex flex-col lg:flex-row gap-3  justify-center items-center w-full '>
          {services_card.map((service, index) => (
            <div
              key={index}
              className='relative bg-[#F7F7F7] h-fit w-full  rounded-lg grid grid-rows-2 grid-cols-none  md:grid-cols-2 md:grid-rows-none lg:grid-cols-none lg:grid-rows-2  place-items-center transition-all transform hover:px-6 hover:scale-120 duration-300'>
              <div className='relative flex md:hidden lg:flex  justify-center items-center overflow-hidden h-[20svh] w-full'>
                <div className='absolute mt-[70px] transition-all transform  hover:scale-125 duration-300'>
                  <Image
                    src={service.src}
                    width={200}
                    height={0}
                    alt={service.alt}
                    className='sm:w-50'
                  />
                </div>
              </div>

              <div className=' flex  sm:items-start sm:justify-normal flex-col gap-1 sm:gap- text-[10px] md:text-[11px] lg:text-[13px] xl:text-[16px] p-3 sm:pl-4 sm:pr-4 md:pl-5 md:pr-5 lg:pl-10 lg:pr-10 xl:pl-10 xl:pr-10'>
                <h1 className='font-bold text-[11px] sm:text-[13px] xl:text-[18px]'>
                  {service.title}
                </h1>
                {service.details.map((dets, index) => (
                  <div key={index}>
                    <Certified badge={dets} />
                  </div>
                ))}
              </div>
              <div className='relative hidden md:flex  lg:hidden justify-center items-center overflow-hidden h-[20svh] w-full'>
                <div className='absolute mt-[70px] md:mt-[20px]'>
                  <Image
                    src={service.src}
                    width={200}
                    height={0}
                    alt={service.alt}
                    className='sm:w-50'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='lg:relative h-full  w-full lg:mt-20'>
          <div className='flex flex-col items-center w-full lg:absolute lg:bottom-0'>
            <div className='bg-bg_primary h-[1px] w-full'></div>
            <div className=' rounded-lg h-fit p-3 md:p-5 flex flex-row justify-between items-center gap-3 w-full'>
              <h1 className='font-bold text-[11px] sm:text-[13px] md:text-[16px] lg:text-[16px]'>
                Lets Talk About Your Project
              </h1>
              <Link
                href={'#footer-page'}
                className='bg-secondary w-fit p-3 text-[11px] rounded-md text-white hover:bg-button_hover transition-all transform hover:px-6 hover:scale-100 duration-300'>
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
