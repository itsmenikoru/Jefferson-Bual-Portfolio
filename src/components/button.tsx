'use client';
export default function Button() {
  return (
    <button
      onClick={() =>
        window.open(
          'https://drive.google.com/uc?export=download&id=1Kc-JUMr8qPvlkUt-ySApAqAe0YudgjgL'
        )

      }
      className='bg-secondary w-fit p-3 text-[11px] rounded-md text-white hover:bg-button_hover transition-all transform hover:px-6 hover:scale-100 duration-300'>
      Download
    </button>
  );
}
