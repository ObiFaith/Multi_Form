import { arrow_down, arrow_up, avatarImgs, monitor, profile_tick, profile_user } from '../assets'
import { Search } from '..'
import {customersData} from '../constants/data'

const Customers = () => {
  const dataCells = ['Customer Name', 'Company', 'Phone Number', 'Email', 'Country']

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
        <table className='w-full border-collapse'>
            <thead className='border-b border-[#EEEEEE] max-lg:hidden'>
              <tr className="*:text-[#B5B7C0] *:font-medium py-5 text-sm flex *:w-full gap-5 lg:gap-8 justify-between">
                <td data-cell="Customer Name">Customer Name</td>
                <td data-cell="Company">Company</td>
                <td data-cell="Phone Number">Phone Number</td>
                <td data-cell="Email">Email</td>
                <td data-cell="Country">Country</td>
                <td data-cell="Status">Status</td>
              </tr>
            </thead>
            <tbody>
              {customersData.map(customer => (
                <tr key={customer.email} className='*:text-sm lg:*:w-full *:font-medium flex max-lg:flex-col gap-4 lg:gap-8 py-5 lg:justify-between border-b border-[#EEEEEE]'>
                  {Object.values(customer).map((item, index) =>
										typeof item === 'string' ?
											<td data-cell={dataCells[index]} className='max-lg:block max-lg:before:font-bold max-lg:before:content-[attr(data-cell)_":_"]' key={item}>{item}</td>
										: <span key={index} className='max-lg:flex gap-2 items-center'>
                      <td className='lg:hidden font-bold'>Status: </td>
                      <td
                        className={`rounded-md lg:flex justify-center items-center px-4 text-center py-1 lg:border
                          ${item ? 'text-[#00B087] border-[#00B087] bg-[#16C098]/40'
                                 : 'text-[#DF0404] bg-[#FFC5C5] border-[#DF0404]'}`}
                      >{item ? 'Active' : 'Inactive'}</td></span>
									)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex gap-5 max-md:flex-col justify-between">
          <p className='text-[#B5B7C0] text-sm'>Showing data 1 to 8 of 256K entries</p>
          <div className="flex flex-wrap gap-4 *:px-2 *:text-sm *:font-medium *:py-1 *:rounded-md">
            <div className="bg-[#F5F5F5] border border-[#EEEEEE]">&lt;</div>
            <div className="bg-primary border border-primary text-white">1</div>
            <div className="bg-[#F5F5F5] border border-[#EEEEEE]">2</div>
            <div className="bg-[#F5F5F5] border border-[#EEEEEE]">3</div>
            <div className="bg-[#F5F5F5] border border-[#EEEEEE]">4</div>
            <div>...</div>
            <div className="bg-[#F5F5F5] border border-[#EEEEEE]">40</div>
            <div className="bg-[#F5F5F5] border border-[#EEEEEE]">&gt;</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customers