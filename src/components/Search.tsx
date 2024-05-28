import { useState } from 'react';
import { LuSearch } from 'react-icons/lu';


const Search = ({ placeholder, setSearchItem, searchItem }: any) => {
	const [isFocused, setIsFocused] = useState(false);

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
	};

	return (
		<div className={`header_Search_container ${isFocused ? 'focused' : ''}`}>
			<LuSearch color='#5C5F62' size={20} />
			<input
				placeholder={placeholder}
				value={searchItem}
				onChange={(e) => setSearchItem(e.target.value)}
				className='header_Search '
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>

		</div>
	);
};

export default Search;
