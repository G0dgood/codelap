import FilterModal from './FilterModal';
import { EntriesLimit } from './Options';
import Search from './Search';
import { GrPowerReset } from "react-icons/gr";

interface SearchComponentProps {
	setNationality: React.Dispatch<React.SetStateAction<string>>;
	nationality: string;
	searchItem: string;
	setSearchItem: React.Dispatch<React.SetStateAction<string>>;
	placeholder: string;
	data: any[]; // Adjust the type based on your actual data structure
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	limit: number;
	handlePagination: (type: string, data?: React.ChangeEvent<HTMLSelectElement>) => void;
	setGender: React.Dispatch<React.SetStateAction<string>>;
	gender: string;
	setAgeMinRange: React.Dispatch<React.SetStateAction<string>>;
	ageMinRange: string;
	ageMaxRange: string;
	setAgeMaxRange: React.Dispatch<React.SetStateAction<string>>;
	reset: () => void;
}

const SearchConponent: React.FC<SearchComponentProps> = ({ setNationality, nationality, searchItem, setSearchItem, placeholder, data, show, setShow, limit, handlePagination, setGender, gender, setAgeMinRange, ageMinRange, ageMaxRange, setAgeMaxRange, reset }) => {



	return (
		<div id='reports'>
			<div className="search-area">
				<Search
					placeholder={placeholder}
					setSearchItem={setSearchItem}
					searchItem={searchItem}

				/>

				<form>
					<FilterModal setNationality={setNationality} nationality={nationality} show={show} setShow={setShow} handlePagination={handlePagination} setGender={setGender} gender={gender}
					/>

					<EntriesLimit
						limit={limit}
						data={data}
						handlePagination={handlePagination}
					/>

					<div className="entries-perpage">

						<input
							type="number"
							value={ageMinRange}
							onChange={(e) => setAgeMinRange(e.target.value)}
							placeholder="Min Age"
						/>
						<input
							type="number"
							value={ageMaxRange}
							onChange={(e) => setAgeMaxRange(e.target.value)}
							placeholder="Max Age"
						/>
					</div>

				</form>
				<GrPowerReset size={20} onClick={() => reset()} color='#b2b2b2' />

			</div>
		</div>
	)
}

export default SearchConponent