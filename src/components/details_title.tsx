export default function DetailsTitle(props: any) {
  return (
    <div className='w-fit '>
      <h1 className='text-[14px] sm:text-[18px] md:text-[18px] font-bold'>
        {props.title}
      </h1>
      <div
        className='w-full h-[1px] '
        style={{ background: `${props.bg_color}` }}></div>
    </div>
  );
}
