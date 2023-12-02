import React from 'react';

export function Sidebar() {
  return (
    <aside className="bg-white w-[300px] h-full shadow-lg">
      <h1 className="text-secondary text-3xl font-bold mt-14 mx-14 text-center font-k2d">TASKBAN</h1>

      <div className='flex flex-col mx-16 text-center gap-[50px] mb-[640px] mt-[87px]'>
        <h3 className='text-primaryDark font-normal text-xl cursor-pointer'>Quadro</h3>
        <h3 className='text-primaryDark font-normal text-xl cursor-pointer'>Lista</h3>
        <h3 className='text-primaryDark font-normal text-xl cursor-pointer'>Timeline</h3>
        <h3 className='text-primaryDark font-normal text-xl cursor-pointer'>Calendário</h3>
      </div>
    </aside>
  );
}
