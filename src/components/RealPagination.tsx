function RealPagination({ pagination, handlePagination }: any) {



	return (
		<div id="notificationbtn">
			<button
				className="btn_pagination"
				disabled={pagination?.page === 1}
				onClick={() => handlePagination('prev')}
			>
				Previous
			</button>


			<button
				className="btn_pagination"
				disabled={pagination?.page === pagination?.totalPages}
				onClick={() => handlePagination('next')}
			>
				Next
			</button>
		</div>
	);
}

export default RealPagination;
