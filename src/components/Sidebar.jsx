import { NavLink } from 'react-router-dom';
import { setting, chevron_down, sidebarImgs, chevron_right } from '../assets';
import { useState } from 'react';

const Sidebar = () => {
	const [isOpen, setOpen] = useState(false);
	return (
		<div className="bg-white grid content-between pt-9 pb-20 px-4 lg:px-7 shadow-lg gap-8 ">
			<div className="mx-auto">
				<div>
					<img src={setting} alt="setting icon" />
				</div>
				<div className="">
					{sidebarImgs.map(sidebar => (
						<div key={sidebar.title} className="mx-auto">
							<img src={sidebar.img} alt={sidebar.alt} />
						</div>
					))}
				</div>
			</div>
			<div className="flex gap-4 justify-between *:w-full">
				<div>
					<h3>Evano</h3>
					<p>Project Manager</p>
				</div>
				<div>
					<img src={chevron_down} alt="chevron_down icon" />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
