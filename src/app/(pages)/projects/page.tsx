import Certified from '@/components/certified';
import ProjectDetails from '@/components/project_details';
import Title from '@/components/title';
import Image from 'next/image';

export default function ProjectsPage() {
  return (
    <section>
      <div className=' w-full h-fit xl:h-svh  bg-bg_primary flex flex-col  gap-3 place-items-center xl:p-5 lg:p-5 p-5 overflow-hidden'>
        <div className='w-full flex flex-col p-5 md:p-10 items-center justify-center'>
          <div className='w-full'>
            <Certified badge='Projects' />
            <Title title='Check Out My Projects' />
          </div>
        </div>
        <div className='Content-Container h-full flex justify-center items-center'>
          <ProjectDetails />
        </div>
      </div>
    </section>
  );
}
