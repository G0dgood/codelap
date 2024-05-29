import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import SearchConponent from '../../components/SearchConponent';
import TableLoader from '../../components/TableLoader';
import { NoRecordFound, TableFetch } from '../../components/Options';
import { getalluser } from '../../features/Registration/userSlice';
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import RealPagination from '../../components/RealPagination';
import moment from 'moment';




const Users = () => {
	const [limit, setLimit] = useState<any>(8);
	const [data, setData] = useState<any>([]);
	const dispatch = useAppDispatch();
	const [nationality, setNationality] = useState('');
	const [gender, setGender] = useState("");
	const [ageMinRange, setAgeMinRange] = useState('');
	const [ageMaxRange, setAgeMaxRange] = useState('');
	const { alluserdata, alluserisLoading } = useAppSelector((state: any) => state.user);
	const pagination = alluserdata?.info
	const users = alluserdata?.results
	const [searchItem, setSearchItem] = useState("");
	const [show, setShow] = useState(false);


	useEffect(() => {
		// Parse the minimum and maximum age from the state. If the state is empty or invalid, use default values.
		const minAge = ageMinRange ? parseInt(ageMinRange, 10) : 1; // Default minimum age is set to 1
		const maxAge = ageMaxRange ? parseInt(ageMaxRange, 10) : 100; // Default maximum age is set to 100

		// Filter the users based on the search criteria and age range
		const result = users?.filter((item: { phone: string; location: { country: string; }; dob: { age: number; }; }) => {
			// Check if the user's phone or country matches the search item (case-insensitive)
			const matchesSearchItem =
				item?.phone?.toLowerCase()?.includes(searchItem.toLowerCase()) ||
				item?.location?.country?.toLowerCase()?.includes(searchItem.toLowerCase());

			// Check if the user's age falls within the specified age range
			const matchesAgeRange =
				item?.dob?.age >= minAge && item?.dob?.age <= maxAge;

			// Return true only if both the search item and age range criteria are met
			return matchesSearchItem && matchesAgeRange;
		});

		// Update the state with the filtered result
		setData(result);
	}, [searchItem, users, ageMinRange, ageMaxRange]); // Dependencies: the effect runs when these values change



	useEffect(() => {
		// @ts-ignore
		dispatch(getalluser({ page: 1, results: 8 }))
	}, [dispatch])

	const reset = () => {
		// @ts-ignore
		dispatch(getalluser({ page: 1, results: 8 }))
	}


	// Handles pagination and other user-related actions.


	const handlePagination = (type: string, data?: React.ChangeEvent<HTMLSelectElement> | undefined) => {
		setShow(false); // Hide the current view (e.g., a loading spinner or overlay)

		switch (type) {
			case 'prev':
				// Dispatch an action to get the previous page of users
				// @ts-ignore
				dispatch(getalluser({ page: pagination?.page - 1, results: limit }));
				break;
			case 'next':
				// Dispatch an action to get the next page of users
				// @ts-ignore
				dispatch(getalluser({ page: pagination?.page + 1, results: limit }));
				break;
			case 'limit':
				if (data) {
					// Update the limit state and dispatch an action to get users with the new limit
					setLimit(data.target.value);
					// @ts-ignore
					dispatch(getalluser({ results: data.target.value }));
				}
				break;
			case 'gender':
				// Dispatch an action to get users filtered by gender and current limit
				// @ts-ignore
				dispatch(getalluser({ gender: nationality.value, limit: limit }));
				break;
			case 'nationality':
				// Dispatch an action to get users filtered by nationality and current limit
				// @ts-ignore
				dispatch(getalluser({ nationality: nationality.value, limit: limit }));
				break;
			default:
				// For page numbers or any other custom actions
				const pageNumber = parseInt(type);
				if (!isNaN(pageNumber)) {
					// Dispatch an action to get users with the current page and limit
					// @ts-ignore
					dispatch(getalluser({ page: pagination?.page, limit: limit }));
				}
				break;
		}
	};




	return (
		<div id="page-wrapper">
			<Header />
			<main >
				<SearchConponent
					reset={reset}
					placeholder={"Search with country or phone number"}
					setSearchItem={setSearchItem}
					searchItem={searchItem}
					data={data}
					setShow={setShow}
					show={show}
					handlePagination={handlePagination}
					setNationality={setNationality}
					nationality={nationality}
					setGender={setGender}
					gender={gender}
					setAgeMinRange={setAgeMinRange}
					ageMinRange={ageMinRange}
					ageMaxRange={ageMaxRange}
					setAgeMaxRange={setAgeMaxRange}
					limit={limit} />
				<div className='table-container'>
					{alluserisLoading && <TableLoader isLoading={alluserisLoading} />}
					<table id="table" className={"table  table-hover"}>
						<thead>
							<tr>
								<th></th>
								<th>Title</th>
								<th>Full Name</th>
								<th>Gender</th>
								<th>Date of Birth</th>
								<th>Age</th>
								<th>Country</th>
								<th>city</th>
								<th>Email</th>
								<th>Phone Number</th>
							</tr>
						</thead>
						<tbody className="data-table-content">
							{alluserisLoading ? (
								<TableFetch colSpan={10} />
							) : data?.length === 0 || data === undefined ? (
								<NoRecordFound colSpan={10} />
							) : (
								data?.map((item: any, i: any) => (
									<tr key={i}>
										<td >
											<span className='FaPlus-name'>
												<img src={item?.picture?.thumbnail} alt='logo' className="avata_img" />
											</span>
										</td>
										<td >{item?.name?.title}</td>
										<td >{item?.name?.first} {item?.name?.first}</td>
										<td >{item?.gender}</td>
										<td >{moment(item?.dob?.date)?.format("DD-MMM-YY")}</td>
										<td >{item?.dob?.age}</td>
										<td >{item?.location?.country}</td>
										<td >{item?.location?.city}</td>
										<td >{item?.email}</td>
										<td >{item?.phone}</td>
									</tr>
								)))}
						</tbody>
					</table>
				</div>
				<footer className="main-table-footer">
					{pagination?.results > 1 && <div className="totalResponses">
						<h3>Total of {pagination?.results} Users - <span>Page {pagination?.page}</span></h3>
						<RealPagination handlePagination={handlePagination} pagination={pagination} />
					</div>}
				</footer>
			</main>
		</div>
	)
}

export default Users
