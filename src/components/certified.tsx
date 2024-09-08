import Image from 'next/image';

export default function Certified(props: any) {
  return (
    <>
      <div className='flex   items-center gap-2'>
        <div className='min-w-[13px] w-[11px] sm:w-[13px] md:w-[14px] lg:w-[16px] xl:w-[18px]'>
          <Image
            src={'/check.png'}
            width={25}
            height={0}
            alt='certified icon'
          />
        </div>

        <h1 className='text-[11px] md:text-[14px]'>{props.badge}</h1>
      </div>
    </>
  );
}
