import Certified from '@/components/certified';
import Details from '@/components/details_container';
import DetailsTitle from '@/components/details_title';
import ProgressBar from '@/components/progress_bar';
import Title from '@/components/title';
import Image from 'next/image';
import { text } from 'stream/consumers';

export default function SkillsExpPage() {
  const isDisabled = true;

  const experience = [
    {
      title: 'Back End Web Developer',
      year: '2024',
      description: 'Pixel8 Web Solutions & Consultancy Inc.',
    },
    {
      title: 'Project-based Data Analyst',
      year: '2023 - 2024',
      description: 'Client based projects',
    },
  ];
  const frameworks = [
    {
      src: '/excel.png',
      alt: 'react',
      title: 'Microsoft Excel',
      description:
        '',
    },
    {
      src: '/power.png',
      alt: 'react',
      title: 'Power BI',
      description:
        '',
    },
    {
      src: '/sql.png',
      alt: 'react',
      title: 'MySQL',
      description:
        '',
    },
    {
      src: '/python.png',
      alt: 'react',
      title: 'Python',
      description:
        '',
    },
    
    {
      src: '/gpt.png',
      alt: 'react',
      title: 'Chat GPT',
      description:
        '',
    },
    {
      src: '/github.png',
      alt: 'react',
      title: 'Github',
      description:
        '',
    },
    {
      src: '/php.png',
      alt: 'react',
      title: 'PHP',
      description:
        '',
    },
    {
      src: '/java.png',
      alt: 'react',
      title: 'Java',
      description:
        '',
    },
  ];

  return (
    <section>
      <div className='w-full h-fit md:h-svh bg-bg_tertiary text-white flex flex-col gap-5 justify-center items-center xl:p-20 lg:p-10 p-5 overflow-hidden'>
        <div className='flex flex-col gap-3 sm:gap-5 md:gap-10 lg:gap-20 w-full'>
          <div>
            <Certified badge='Skills and Experiences' />
            <Title title='Check My Skills and Work Experiences' />
          </div>
          <div className='flex flex-col md:grid md:grid-cols-2 gap-5'>
            <div className='flex flex-col gap-3 md:items-center'>
              <div className='flex flex-col gap-3'>
                <DetailsTitle title='Work Experience' bg_color='white' />
                {experience.map((exp, index) => (
                  <div key={index}>
                    <Details
                      title={exp.title}
                      year={exp.year}
                      description={exp.description}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className=''>
              <DetailsTitle title='Skills' bg_color='white' />
              <div className='grid grid-cols-4 gap-3 h-full mt-3'>
                {frameworks.map((data, index) => (
                  <div
                    key={index}
                    className=' bg-[#575757] rounded-md flex flex-col justify-center items-center p-3 transition-all transform hover:px-6 hover:scale-110 duration-300'>
                    <div className='w-[25px] '>
                      <Image
                        src={data.src}
                        width={50}
                        height={50}
                        alt='linkedin icon'
                      />
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className='flex justify-between p-3 text-[11px]'>
                <div></div>
                <button
                  disabled={isDisabled}
                  className={`underline ${
                    isDisabled ? 'text-gray-600' : 'text-white'
                  }`}>
                  See more...
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
