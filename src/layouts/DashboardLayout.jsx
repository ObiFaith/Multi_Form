import { Outlet } from 'react-router-dom'
import {Search, Sidebar} from '..'

const DashboardLayout = () => {
  return (
    <div className='bg-[#FAFBFF] flex overflow-x-auto'>
      <Sidebar />
      <div className="px-8 max-lg:container w-4/5 mx-auto md:px-16">
        <div className="py-10 flex max-md:flex-col gap-4 justify-between md:items-center">
          <h1 className='lg:text-2xl text-lg font-semibold'>Hello Evano 👋🏼,</h1>
          <Search />
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout