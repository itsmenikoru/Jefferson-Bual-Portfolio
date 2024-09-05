import Image from 'next/image';

export default function LanguagesContainer() {
  const languages = [
    { alt: 'java icon', src: '/java.png' },
    { alt: 'javascript icon', src: '/javascript.png' },
    { alt: 'python icon', src: '/python.png' },
    { alt: 'php icon', src: '/php.png' },
  ];

  return (
    <>
      <div className='h-fit lg:w-fit w-full md:p-5 lg:p-5 xl:p-8 sm:p-5 p-3 bg-bg_tertiary rounded-lg flex justify-center items-center gap-16 '>
        {languages.map((lang, index) => (
          <div key={index}>
            <div className='w-[30px]'>
              <Image src={lang.src} width={50} height={0} alt={lang.alt} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
