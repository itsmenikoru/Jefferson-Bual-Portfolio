import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { GoHomeFill } from 'react-icons/go';

export default async function Project({
  params,
}: {
  params: { projectId: number };
}) {
  const response = await fetch(
    `https://jefferson-bual-portfolio.vercel.app/project/${params.projectId}/api`,
    {
      next: { revalidate: 0.5 },
    }
  );
  const data = await response.json();

  return (
    <section>
      <div className='h-fit w-full bg-bg_primary'>
        <div>
          <header className='w-full h-fit shadow-lg'>
            <div className='flex justify-between items-center text-black py-5 px-10'>
              <h1 className='font-bold'>{data.name}</h1>
              <div className='flex gap-2'>
                <Link
                  href={'/'}
                  className='bg-white hover:bg-gray-300 rounded-lg p-2 flex  items-center justify-center'>
                  <GoHomeFill size={25} />
                </Link>
                <Link
                  href={data.github_link}
                  className='bg-white hover:bg-gray-300 rounded-lg p-2 flex  items-center justify-center'>
                  <FaGithub size={25} />
                </Link>
              </div>
            </div>
          </header>

          <div className='h-fit w-full p-5 flex flex-wrap gap-5 items-center justify-center bg-gray-200'>
            {data.link.map((link: string, index: number) => (
              <div key={index}>
                {data.type === 'mobile' ? (
                  <img
                    src={'https://lh3.googleusercontent.com/d/' + link}
                    alt='img'
                    className='w-[250px]'
                  />
                ) : (
                  <img
                    src={'https://lh3.googleusercontent.com/d/' + link}
                    alt='img'
                    className='w-[500px]'
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
