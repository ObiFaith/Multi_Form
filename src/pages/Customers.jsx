import { arrow_down, arrow_up, avatarImgs, monitor, profile_tick, profile_user } from '../assets'
import { Search } from '..'
import {customersData} from '../constant'

const Customers = () => {
  const tableHeading = {
		name: 'Customer Name',
		company: 'Company',
		phone: 'Phone Number',
		email: 'Email',
		country: 'Country',
		status: 'Status',
	};

  /*
    {tableHeading.map((heading, index) => (
      <div key={index} className="">
        <h3>{heading}</h3>
        {Object.values(customersData[index]).map(value => <p key={value}>{value}</p>)}
      </div>
    ))}
  */

  return (
    <div className='*:bg-white *:shadow-md *:rounded-lg *:lg:rounded-3xl'>
      <div className="px-4 lg:px-6 py-8 flex max-lg:flex-col gap-7 xl:gap-14 lg:justify-around">
        <div className="flex gap-5 items-center">
          <div className="rounded-full p-5 bg-gradient-to-t to-[#D3FFE7] from-[#EFFFF6]"><img src={profile_user} alt="profile_user" /></div>
          <div className="grid gap-1">
            <p className='text-[#ACACAC] text-sm'>Total Customers</p>
            <h3 className='text-2xl lg:text-3xl font-semibold'>5,423</h3>
            <div className="flex gap-1 items-center">
              <img src={arrow_up} alt="arrow_up" />
              <p className='text-xs'><span className='font-bold text-green'>16%</span> this month</p>
            </div>
          </div>
        </div>
        <div className="lg:border-x lg:px-7 xl:px-14 border-[#F0F0F0] flex gap-5 lg:gap-12 items-center">
        <div className="rounded-full p-5 bg-gradient-to-t to-[#D3FFE7] from-[#EFFFF6]"><img src={profile_tick} alt="profile_tick" /></div>
          <div className="grid gap-1">
            <p className='text-[#ACACAC] text-sm'>Members</p>
            <h3 className='text-2xl lg:text-3xl font-semibold'>1,893</h3>
            <div className="flex gap-1 items-center">
              <img src={arrow_down} alt="arrow_down" />
              <p className='text-xs'><span className='font-bold text-[#D0004B]'>1%</span> this month</p>
            </div>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="rounded-full p-5 bg-gradient-to-t to-[#D3FFE7] from-[#EFFFF6]"><img src={monitor} alt="monitor" /></div>
          <div className="grid gap-1">
            <p className='text-[#ACACAC] text-sm'>Active Now</p>
            <h3 className='text-2xl lg:text-3xl font-semibold'>189</h3>
            <div className='flex -space-x-2 overflow-x-hidden'>
              {avatarImgs.map((img, index) => <img width={26} key={index} src={img} alt={`avatar ${index + 1}`} />)}
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 lg:px-10 pt-8 pb-10 mt-10 mb-20">
        <div className="flex pb-1 max-lg:flex-col gap-6 justify-between">
          <div>
            <h2 className='lg:text-2xl text-xl'>All Customers</h2>
            <p className='text-green text-sm'>Active Members</p>
          </div>
          <div className="flex max-md:flex-col max-md:items-start items-center gap-4">
            <Search textSize='text-xs' bg_clr='bg-[#F9FBFF]' />
            <div className="bg-[#F9FBFF] inline rounded-xl px-4 py-2">
              <span>Sort by:</span>
              <select className='bg-[#F9FBFF] font-semibold px-2'>
                <option value="newest">Newest</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </div>
        </div>
        <div className='py-8'>
        <table className='w-full'>
            <thead className='border-b border-[#EEEEEE]'>
              <tr className='*:text-[#B5B7C0] *:font-medium text-sm flex *:w-full gap-5 lg:gap-8 justify-between'>
                <td>Customer Name</td>
                <td>Company</td>
                <td>Phone Number</td>
                <td>Email</td>
                <td>Country</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              {customersData.map(customer => (
                <tr key={customer.email} className='*:text-sm *:font-medium flex *:w-full gap-5 lg:gap-8 justify-between border-b border-[#EEEEEE]'>
                  {Object.values(customer).map(item =>
										typeof item === 'string' ?
											<td key={item}>{item}</td>
										: <td key={item}
                        className={`rounded-md inline-block text-center py-1 border
                          ${item ? 'text-[#00B087] px-[17px] border-[#00B087] bg-[#16C098]/40'
                                 : 'text-[#DF0404] px-3 bg-[#FFC5C5] border-[#DF0404]'}`}
                      >{item ? 'Active' : 'Inactive'}</td>
									)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className=""></div>
      </div>
    </div>
  )
}

export default Customers