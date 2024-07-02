import { Outlet } from 'react-router-dom'
import {Search, Sidebar} from '..'
import { useState } from 'react';
import { setting } from '../assets';

const DashboardLayout = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className='bg-[#FAFBFF] flex overflow-auto transition-all'>
      <Sidebar isOpen={isOpen} setOpen={setOpen} />
      <div className="px-8 max-lg:container w-4/5 mx-auto">
        <div className="py-10 flex max-md:flex-col gap-4 justify-between md:items-center">
          {!isOpen ? <div className="flex gap-6 items-center justify-between">
            <div className="min-[520px]:hidden cursor-pointer"><img onClick={() => setOpen(isOpen => !isOpen)} src={setting} alt="setting icon" /></div>
            <h1 className='lg:text-2xl text-lg font-semibold'>Hello Evano 👋🏼,</h1>
          </div> : <h1 className='lg:text-2xl text-lg font-semibold'>Hello Evano 👋🏼,</h1>}
          <Search />
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout