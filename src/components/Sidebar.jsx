import { NavLink } from 'react-router-dom';
import { setting, chevron_down, sidebarImgs, chevron_right, avatar } from '../assets';

const Sidebar = ({isOpen, setOpen}) => {
	return (
		<div className={`bg-white grid content-between pt-9 pb-20 shadow-lg gap-8 transition-all
			${isOpen ? 'px-5 bg-white/95 lg:px-8 max-lg:absolute top-0 left-0 z-10' : 'max-md:min-w-20 md:px-6 max-[520px]:hidden'}
		`}>
			<div className='grid gap-y-8 lg:gap-y-12'>
				<div className='flex items-center gap-2 justify-center'>
					<div className="cursor-pointer"><img onClick={() => setOpen(isOpen => !isOpen)} src={setting} alt="setting icon" /></div>
					{isOpen && <div className="flex gap-1 items-end">
            <span className="text-2xl font-bold">Dashboard</span>
            <span className="text-[10px] pb-1">v.01</span>
          </div>}
				</div>
				<div className={`grid gap-y-6 ${!isOpen ? 'justify-items-center' : ''}`}>
					{sidebarImgs.map(sidebar => (
						<NavLink key={sidebar.title} to='/dashboard' className={`flex lg:justify-between rounded-lg px-3 py-2 ${sidebar.title === 'Customers' ? 'bg-primary text-white' : 'text-black'}`}>
							{isOpen ? (
								<div className="flex justify-between gap-4 w-full items-center">
									<div className="flex gap-2 lg:gap-4 items-center">
										<img src={sidebar.img} alt={sidebar.alt} />
										{sidebar.title}
									</div>
									{sidebar.title !== 'Dashboard' && <img src={chevron_right} alt="chevron right icon" />}
								</div>
							) : (
								<img src={sidebar.img} alt={sidebar.alt} />
							)}
					</NavLink>
					))}
				</div>
			</div>
			{isOpen ? (
				<div className="flex gap-4 items-center justify-between w-full">
					<div className="flex gap-2">
						<img src={avatar} alt="user icon" />
						<div>
							<h3>Evano</h3>
							<p className="text-[#757575] text-xs">
								Project Manager
							</p>
						</div>
					</div>
					<div>
						<img src={chevron_down} alt="chevron_down icon" />
					</div>
				</div>
			) : (
				<div className="grid justify-items-center">
					<img src={avatar} alt="user icon" />
				</div>
			)}
		</div>
	);
};

export default Sidebar;
