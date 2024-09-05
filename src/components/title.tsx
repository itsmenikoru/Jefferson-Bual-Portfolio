export default function Title(props: any) {
  return (
    <h1 className='font-bold text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px]'>
      {props.title}
    </h1>
  );
}
