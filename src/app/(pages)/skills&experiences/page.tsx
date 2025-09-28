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
      title: 'Junior Data Analyst',
      year: 'Nov 2024 -  Present',
      description: 'Developed automated reporting solutions and performed efficient ETL (Extract, Transform, Load) processes. Focused on transforming raw data into actionable insights through custom report development, backend scripting, and data analysis.'
    },
    {
      title: 'Backend Developer Intern at Pixel8 Web Solutions & Consultancy Inc.',
      year: 'Jan 2024 -  2021',
       description: 'Developed and tested APIs to handle success and error responses, and collaborated with the team to ensure seamless integration.'
    },
    {
      title: 'OIC - Reshipper at Lazada',
      year: 'Mar 2020 - Jan 2021',
      description: 'Managed a team and tracked performance using Excel to maintain transactions and monitor KPIs.',
    },
  ];
  const frameworks = [
     {
      src: '/python.png',
      alt: 'react',
      title: 'Python',
      description:
        '',
    },
    {
      src: '/airflow(4).png',
      alt: 'react',
      title: 'Apache Airflow',
      description:
        '',
    },
    {
      src: '/java-script.png',
      alt: 'react',
      title: 'JS',
      description:
        '',
    },
    {
      src: '/php.png',
      alt: 'react',
      title: 'Php',
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
    
    // {
    //   src: '/postgre.png',
    //   alt: 'react',
    //   title: 'PostgreSQL',
    //   description:
    //     '',
    // },
    // {
    //   src: '/gpt.png',
    //   alt: 'react',
    //   title: 'Chat GPT',
    //   description:
    //     '',
    // },
    {
      src: '/github.png',
      alt: 'react',
      title: 'Github',
      description:
        '',
    },
    // {
    //   src: '/vs.png',
    //   alt: 'react',
    //   title: 'Visual Studio Code',
    //   description:
    //     '',
    // },
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
           <div className='grid grid-cols-4 gap-3 h-full mt-3'>
              {frameworks.map((data, index) => (
                <div
                  key={index}
                  className='bg-[#575757] rounded-md flex flex-col justify-center items-center p-3'
                >
                  <div
                    className={`flex items-center justify-center ${
                      data.title === 'Apache Airflow' ? 'w-[80px] h-[80px] group' : 'w-[25px] h-[80px] group'
                    }`}
                  >
                    <Image
                      src={data.src}
                      width={data.title === 'Apache Airflow' ? 80 : 60}
                      height={data.title === 'Apache Airflow' ? 80 : 60}
                      alt={data.alt}
                      className="object-contain transition-transform duration-300 group-hover:scale-125"
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
