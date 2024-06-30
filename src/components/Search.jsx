import { search } from '../assets';

const Search = ({ textSize, bg_clr = 'bg-white' }) => {
	return (
		<div className={`flex relative px-2 rounded-xl ${bg_clr}`}>
			<img className={`absolute top-2`} src={search} alt="Search" />
			<input
				className={`indent-2 w-full text-sm pl-5 outline-none ${bg_clr} ${
					textSize
						? 'placeholder:text-xs py-2'
						: 'placeholder:text-sm py-[10px]'
				} `}
				type="search"
				placeholder="Search"
			/>
		</div>
	);
};

export default Search;
