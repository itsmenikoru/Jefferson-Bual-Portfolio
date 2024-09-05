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
      title: 'Front End Web Developer',
      year: '2024',
      description: 'Pixel8 Web Solutions & Consultancy Inc.',
    },
    {
      title: 'Quality Assurance Specialist',
      year: '2024',
      description: 'Pixel8 Web Solutions & Consultancy Inc.',
    },
    {
      title: 'Project-based Software Developer  ',
      year: '2023 - 2024',
      description: 'Client based projects',
    },
  ];
  const frameworks = [
    {
      src: '/github_orange_icon.png',
      alt: 'react',
      title: 'Git',
      description:
        'A platform for version control and collaboration, enabling developers to host and review code.',
    },
    {
      src: '/react_icon.png',
      alt: 'react',
      title: 'React JS',
      description:
        'A JavaScript library for building user interfaces, emphasizing component-based architecture and declarative code.',
    },
    {
      src: '/next_icon.png',
      alt: 'react',
      title: 'Next JS',
      description:
        'A React framework for building server-side rendered and static web applications with enhanced performance.',
    },
    {
      src: '/node_icon.png',
      alt: 'react',
      title: 'Node JS',
      description:
        'A runtime environment for executing JavaScript on the server, enabling scalable network applications.',
    },
    {
      src: '/laravel_icon.png',
      alt: 'react',
      title: 'Laravel',
      description:
        'A PHP framework with expressive syntax, simplifying web application development with built-in features and tools.',
    },
    {
      src: '/postgres_icon.png',
      alt: 'react',
      title: 'Postgres Sql',
      description:
        'An open-source relational database system known for its extensibility, standards compliance, and advanced SQL features.',
    },
    {
      src: '/mysql_icon.png',
      alt: 'react',
      title: 'My Sql',
      description:
        'A widely-used open-source relational database system, renowned for its reliability and ease of use.',
    },
    {
      src: '/firebase_icon.png',
      alt: 'react',
      title: 'Firebase Sql',
      description:
        'A NoSQL cloud database from Google, offering real-time data synchronization across clients and seamless backend integration.',
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
