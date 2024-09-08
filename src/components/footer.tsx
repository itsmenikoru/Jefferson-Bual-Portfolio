import Image from 'next/image';
import Socials from './socials';

Image;
export default function Footer() {
  return (
    <footer>
      <div className='bg-bg_tertiary h-fit '>
        <div className='sm:grid sm:grid-cols-2 grid-cols-none flex flex-col gap-10  p-5 xl:p-10 text-white'>
          <div className='flex items-center justify-center'>
            <div className='w-[100px] md:w-[80px] mb-5 '>
              <Image src='/jeff_w_text_logo.png' width={80} height={0} alt='Logo' />
            </div>
          </div>
          <div className='flex flex-col gap-5 justify-center items-center sm:justify-start sm:items-start col-span-1'>
            <div className='flex flex-col gap-3 items-start text-sm'>
              <div className='flex flex-row gap-2 md:items-center md:justify-center'>
                <div className='hidden md:flex'>
                  <Image
                    src='/call.png'
                    width={20}
                    height={0}
                    alt='Logo'
                  />
                </div>
                <div className='flex flex-row'>
                  <li className='text-secondary md:hidden'></li>
                  <h1>(+63) 9286199959</h1>
                </div>
              </div>
              <div className='flex flex-row gap-2 md:items-center md:justify-center'>
                <div className='hidden md:flex'>
                  <Image
                    src='/mail.png'
                    width={25}
                    height={0}
                    alt='Logo'
                  />
                </div>
                <div className='flex flex-row'>
                  <li className='text-secondary md:hidden'></li>
                  <h1>bualjefferson64@gmail.com</h1>
                </div>
              </div>

              <div className='flex flex-row gap-2 md:items-center md:justify-center'>
                <div className='hidden md:flex'>
                  <Image
                    src='/address.png'
                    width={20}
                    height={0}
                    alt='Logo'
                  />
                </div>
                <div className='flex flex-row'>
                  <li className='text-secondary md:hidden'></li>
                  <h1>Laguna, Philippines</h1>
                </div>
              </div>
            </div>
            <Socials />
          </div>
          {/* <div className='flex items-center sm:hidden'>
            <div className='flex-grow border-t border-[#595959]'></div>
            <span className='px-2 text-white'>OR</span>
            <div className='flex-grow border-t border-[#595959]'></div>
          </div> */}
          {/* <div className='flex justify-center items-center'>
            <form className='flex flex-col w-fit gap-3'>
              <div>
                <h1 className='font-bold text-[20px]'>Contact me!</h1>
                <p className='text-xs md:text-sm'>
                  Feel free to send message, I will get back to you as soon as i
                  can.
                </p>
              </div>
              <div className='flex flex-col text-sm gap-3'>
                <div className='flex flex-col'>
                  <label htmlFor='name'>Name</label>
                  <input
                    id='name'
                    className='border border-b-2 bg-transparent rounded-md p-2'
                    placeholder='johndoe'
                    required
                    type='text'
                  />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='name'>Email</label>
                  <input
                    id='name'
                    className='border border-b-2 bg-transparent rounded-md p-2'
                    placeholder='johndoe@gmail.com'
                    required
                    type='email'
                  />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='name'>Message</label>
                  <textarea
                    id='message'
                    className='border border-b-2 bg-transparent rounded-md p-2 h-[80px] lin'
                    required
                  />
                </div>
              </div>
              <button className='w-fit p-3 pr-5 pl-5 text-[11px] bg-secondary rounded-lg text-white mb-10 lg:mb-0 hover:bg-button_hover transition-all transform hover:px-6 hover:scale-100 duration-300'>
                Send
              </button>
            </form>
          </div> */}
        </div>
        <div className='w-full bg-[#595959] h-[1px]'></div>
        <div className='p-3 text-white text-[10px] md:text-[13px] flex items-center justify-center gap-3 bg-bg_tertiary'>
          <h1>All Rights Reserved 2024</h1>
        
         
        </div>
      </div>
    </footer>
  );
}
