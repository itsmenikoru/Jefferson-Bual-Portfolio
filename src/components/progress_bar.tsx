export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <div>
      <div className=' bg-slate-300  rounded-full  w-full h-[10px] sm:h-[15px]'>
        <div
          className='bg-secondary h-[10px] sm:h-[15px] text-xs font-medium text-white text-center p-0.5 leading-none rounded-full'
          style={{ width: `${progress}%` }}>
          <p className='hidden sm:flex ml-5'>{progress}%</p>
        </div>
      </div>
    </div>
  );
}
