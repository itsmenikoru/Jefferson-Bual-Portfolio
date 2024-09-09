'use client';
import Image from 'next/image';
import Certified from './certified';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export default function ProjectDetails() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectDetails = [
    {
      id: 1,
      src: '/rnn_model.png',
      alt: 'rnn_model',
      badge: 'Model',
      title: 'SimpleRNN Demographic Insight Model',
      description:
        ' The simpleRNN-based model was designed to analyze the demographic data of urban residents and generate tailored program recommendations. The model leverages recurrent neural networks to identify patterns and insights from demographic information, facilitating personalized program suggestions that cater to the specific needs of various resident groups.',
      tools: [
        
        { src: '/python.png', alt: 'python' },
        { src: '/sql.png', alt: 'sql' },
        { src: '/excel.png', alt: 'excel' },
        { src: '/github.png', alt: 'github' },
       
      ],
    },

    {
      id: 2,
      src: '/cnn_model.png',
      alt: 'cnn_model',
      badge: 'Model',
      title: 'LeNet with Incecption Model for Learning Baybayin Script from Scratch',
      description:
        ' Creating a Baybayin character recognition model from scratch involves using a combination of LeNet and Inception architectures. LeNets simplicity and Inceptions powerful feature extraction are combined to build a neural network that can accurately recognize and classify Baybayin characters. This hybrid model leverages LeNet for basic image processing and Inception modules for detailed feature analysis, making it effective in learning and identifying the unique patterns of Baybayin script.',
      tools: [
        
        { src: '/python.png', alt: 'python' },
        { src: '/excel.png', alt: 'excel' },
        { src: '/github.png', alt: 'github' },
       
      ],
    },
    {
      id: 3,
      src: '/web_project1_img.png',
      alt: 'web-project1_img',
      badge: 'Website',
      title: 'Student Academic Performance Monitoring System',
      description:
        ' A web-based student academic performance monitoring systems goal is to provide a centralized platform for academic institutions to monitor and manage their students academic performance. The system provides real-time data on student performance and progress to teachers, administrators, and other authorized personnel, allowing them to make informed decisions about student learning and support.',
      tools: [
        
        { src: '/php.png', alt: 'php' },
        { src: '/sql.png', alt: 'sql' },
        { src: '/github.png', alt: 'github' },
       
      ],
    },
    {
      id: 4,
      src: '/baya-mobile-project.png',
      alt: 'baya-mobile-project',
      badge: 'Mobile',
      title: 'Baybayin Quiz Game using CNN algorithm',
      description:
        'A mobile educational app aimed at promoting the Baybayin script, an ancient Philippine writing system. The app features interactive lessons, quizzes, writing exercises, and a notepad, using Convolutional Neural Networks for improved character recognition.',
      tools: [
        { src: '/java.png', alt: 'java' },
        { src: '/python.png', alt: 'python_icon' },
        { src: '/github.png', alt: 'github' },
      ],
    },
    {
      id: 5,
      src: '/web_project2_img.png',
      alt: 'web_project2_img',
      badge: 'Website',
      title: 'Data-Driven Brgy. Monitoring System',
      description:
        'The Data-Driven Barangay Monitoring System improves local governance by utilizing real-time data collection and analysis, enhancing decision-making, ensuring efficient resource allocation, and improving community services, fostering transparency, accountability, and enhancing community welfare and safety.',
      tools: [
        { src: '/sql.png', alt: 'laravel' },
        { src: '/python.png', alt: 'python_icon' },
        { src: '/excel.png', alt: 'excel' },
        { src: '/power.png', alt: 'powerbi' },
        { src: '/github.png', alt: 'github' },
      ],
    },
  ];

  const handleNext = () => {
    if (currentIndex < projectDetails.length - 1) {
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 300);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
      }, 300);
    }
  };

  return (
    <div className='flex flex-col h-full'>
      <div className='flex flex-col lg:flex-none lg:grid lg:grid-cols-2 gap-3'>
        <div className='flex w-full items-center justify-center '>
          <div className='w-[200px] md:w-[400px] lg:w-[400px] '>
            <Image
              src={projectDetails[currentIndex].src}
              width={500}
              height={0}
              alt={projectDetails[currentIndex].alt}
              className=' animate-scaleIn'
            />
          </div>
        </div>
        <div className='h-full flex flex-col gap-2'>
          <div className='flex flex-col gap-3 w-full'>
            <Certified badge={projectDetails[currentIndex].badge} />
            <h1 className='font-semibold xl:text-[25px] '>
              {projectDetails[currentIndex].title}
            </h1>
          </div>
          <div className='flex '>
            <li></li>

            <h1 className='text-[11px] xl:text-[16px] leading-7 '>
              {projectDetails[currentIndex].description}
            </h1>
          </div>
          <div className='w-full flex flex-col gap-5'>
            <h1 className='font-semibold'>Tools:</h1>

            <div className='flex flex-row gap-3 items-center'>
              {projectDetails[currentIndex].tools.map((tools, index) => (
                <div
                  key={index}
                  className=' transition-all transform hover:px-3 hover:scale-125 duration-300'>
                  <div className='h-[25px] w-[25px]  flex'>
                    <Image
                      src={tools.src}
                      width={30}
                      height={0}
                      alt={tools.alt}
                    />
                  </div>
                </div>
              ))}
            </div>
            <Link
              href={`/project/${projectDetails[currentIndex].id}`}
              className='p-3 w-fit text-[11px] border-secondary border-2 text-black rounded-lg  mb-10 lg:mb-0 hover:bg-button_hover transition-all transform hover:px-6 hover:scale-100 duration-300'>
              See project
            </Link>
          </div>
        </div>
      </div>
      {/* pagination */}
      <div className='Pagination relative h-full w-full mt-10'>
        <div className='absolute bottom-0 w-full h-fit'>
          <div className='flex flex-row justify-center items-center '>
            <nav className='flex items-center gap-x-1' aria-label='Pagination'>
              <button
                type='button'
                className='min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none'
                aria-label='Previous'
                onClick={handlePrevious}
                disabled={currentIndex === 0}>
                <svg
                  className='shrink-0 size-3.5'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <path d='m15 18-6-6 6-6'></path>
                </svg>
                <span>Previous</span>
              </button>
              <h1>{currentIndex + 1}</h1>
              <button
                type='button'
                className='min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none'
                aria-label='Next'
                onClick={handleNext}
                disabled={currentIndex === projectDetails.length - 1}>
                <span>Next</span>
                <svg
                  className='shrink-0 size-3.5'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <path d='m9 18 6-6-6-6'></path>
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
