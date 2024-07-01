import { Apple, Facebook, Google } from '../assets';
//import { doSignInWithGoogle } from '../test/auth';

const Authenticate = () => {
	return (
		<div className="flex gap-4 pt-8 pb-7 *:cursor-pointer">
			<img src={Apple} alt="Apple Icon" />
			<img src={Facebook} alt="Facebook Icon" />
			<img
				/* onClick={() => doSignInWithGoogle()} */
				src={Google}
				alt="Google Icon"
			/>
		</div>
	);
};

export default Authenticate;
