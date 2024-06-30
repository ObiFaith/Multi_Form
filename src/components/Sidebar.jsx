import { NavLink } from "react-router-dom"
import { setting, chevron_down, sidebarImgs, chevron_right } from "../assets"

const Sidebar = () => {
  return (
    <div className="gap-8 pt-9 pb-20 px-7 shadow-lg bg-white flex flex-col justify-between w-1/5">
      <div className="grid gap-10">
        <div className="mx-auto pb-5 flex items-center gap-2">
          <img src={setting} alt="setting icon" />
          {/* <div className="flex gap-1 items-end">
            <span className="text-2xl font-bold">Dashboard</span>
            <span className="text-[10px] pb-1">v.01</span>
          </div> */}
        </div>
        <div className="*:flex *:gap-2 *:items-center grid gap-6">
          {sidebarImgs.map((sidebar, index) => (
            <NavLink key={index} to='/dashboard' className={`flex justify-between px-[11px] py-2 rounded-lg ${sidebar.title === 'Customers' ? 'bg-primary text-white' : 'text-black'}`}>
              {/* <div className="flex gap-2 lg:gap-4 items-center">
                <img src={sidebar.img} alt={sidebar.alt} />
                {sidebar.title}
              </div>
              {sidebar.title !== 'Dashboard' && <img src={chevron_right} alt="chevron right icon" />} */}
              <img src={sidebar.img} alt={sidebar.alt} />
            </NavLink>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="">
          <h3>Evano</h3>
          <p>Project Manager</p>
        </div>
        <div className=""><img src={chevron_down} alt="chevron_down icon" /></div>
      </div>
    </div>
  )
}

export default Sidebar