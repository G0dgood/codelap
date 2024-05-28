import { Modal } from 'react-bootstrap';
import Select from 'react-select'
import { BiFilterAlt } from 'react-icons/bi';
import ModalHeader from './ModalHeader';
import { customStyles } from './Options';


const FilterModal = ({ setNationality, nationality, show, setShow, handlePagination,
	setGender, gender }: any) => {

	const handleShow = (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		setShow(true);
	}





	const nationalities = [
		{ code: "AU", meaning: "Australia" },
		{ code: "BR", meaning: "Brazil" },
		{ code: "CA", meaning: "Canada" },
		{ code: "CH", meaning: "Switzerland" },
		{ code: "DE", meaning: "Germany" },
		{ code: "DK", meaning: "Denmark" },
		{ code: "ES", meaning: "Spain" },
		{ code: "FI", meaning: "Finland" },
		{ code: "FR", meaning: "France" },
		{ code: "GB", meaning: "United Kingdom" },
		{ code: "IE", meaning: "Ireland" },
		{ code: "IN", meaning: "India" },
		{ code: "IR", meaning: "Iran" },
		{ code: "MX", meaning: "Mexico" },
		{ code: "NL", meaning: "Netherlands" },
		{ code: "NO", meaning: "Norway" },
		{ code: "NZ", meaning: "New Zealand" },
		{ code: "RS", meaning: "Serbia" },
		{ code: "TR", meaning: "Turkey" },
		{ code: "UA", meaning: "Ukraine" },
		{ code: "US", meaning: "United States" }
	];


	const nationalityOptions = nationalities?.map((item: any) => ({
		value: item.code,
		label: `${item.meaning}`,
	})) || [];






	return (
		<>
			<button className="btn" onClick={handleShow}>
				Filter
			</button>
			<Modal show={show} centered  >
				<ModalHeader setShow={setShow} icon={<BiFilterAlt size={30} />} headerTitle={"Filter  Options"} />
				<Modal.Body>
					<div className="filter-dropdown">
						<form className="checkbox-grp">

							<div className="radio">
								<input
									type="radio"
									name="filter"
									id="filter-all-time1"
									value="male"
									checked={gender === "male" && true}
									onChange={(e) => setGender(e.target.value)}
								/>
								<label htmlFor="filter-all-time1" className="radio-label">Male</label>
							</div>
							<div className="radio">
								<input
									type="radio"
									name="filter"
									id="filter-all-time2"
									value="female"
									checked={gender === "female" && true}
									onChange={(e) => setGender(e.target.value)}
								/>
								<label htmlFor="filter-all-time2" className="radio-label">Female</label>
							</div>
						</form>
					</div>

					<div className='mb-4 mt-4'>
						<label className='label-side'>Select by Nationality</label>
						<Select name="Select by Status" id="register-select"
							value={nationality}
							onChange={(selectedOption) => setNationality(selectedOption)}
							options={nationalityOptions}
							styles={customStyles}
						/>
					</div>
					<button
						id='custom-btn'
						className="mt-4"
						onClick={() => handlePagination(gender ? "gender" : 'nationality')}>
						Filter
					</button>
				</Modal.Body>

			</Modal>
		</>
	)
}

export default FilterModal