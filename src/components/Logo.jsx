import { useState } from 'react';


const Logo = () => {
  const [isOpen, setOpen] = useState(false);

	return (
		<div className="cursor-pointer">
			<img
				onClick={() => setOpen(isOpen => !isOpen)}
				src={setting}
				alt="setting icon"
			/>
		</div>
	);
};

export default Logo;
