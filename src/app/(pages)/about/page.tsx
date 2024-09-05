import Button from '@/components/button';
import Certified from '@/components/certified';
import Description from '@/components/description';
import Details from '@/components/details_container';
import DetailsTitle from '@/components/details_title';
import Title from '@/components/title';

export default function AboutPage() {
  return (
    <section>
      <div className=' md:mt-0 w-full h-fit xl:h-svh bg-white text-black grid grid-rows-4 gap-5 justify-center items-center xl:p-20 lg:p-5 p-5 overflow-hidden'>
        <div className='flex flex-col gap-5 sm:gap-16 md:gap-18 lg:gap-20 w-full row-span-4 md:row-span-3'>
          <div className='flex flex-col'>
            <Certified badge='About' />
            <Title title='Know More About Me' />
            <Description />
          </div>
          <div className='flex items-center justify-center row-span-3'>
            <div className='grid md:grid-cols-2 flex-row gap-3'>
              <div className='flex flex-col gap-3'>
                <DetailsTitle title='Education' bg_color='black' />
                <Details
                  title='Bachelor of Science in Computer Science'
                  year='2020 - 2024'
                  description='Pamantasan ng Cabuyao(UC)'
                />
                <Details
                  title='Bachelor of Science in Computer Science'
                  year='2020 - 2024'
                  description='Pamantasan ng Cabuyao(UC)'
                />
              </div>
              <div className='flex flex-col gap-3 '>
                <DetailsTitle title='Specialization' bg_color='black' />
                <Details
                  title='Mobile Development'
                  isHide='true'
                  description='Specialized in developing interactive and functional mobile applications.'
                />
                <Details
                  title='Web Development'
                  isHide='true'
                  description='Specialized in developing interactive and functional web applications.'
                />
                <Details
                  title='UI/UX'
                  isHide='true'
                  description='Specialized in creating visual appealing and user centered designs including brandings, assets, images and etc.'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='lg:relative h-full  w-full lg:mt-20'>
          <div className='flex flex-col items-center w-full lg:absolute lg:bottom-0'>
            <div className='bg-bg_primary h-[1px] w-full'></div>
            <div className=' rounded-lg mb-5 xl:mb-0 h-fit p-3 md:p-5 flex flex-row justify-between items-center gap-3 w-full'>
              <h1 className='font-bold text-[11px] sm:text-[13px] md:text-[16px] lg:text-[16px]'>
                Curriculum Vitae
              </h1>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
