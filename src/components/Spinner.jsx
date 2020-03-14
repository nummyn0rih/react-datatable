import React from 'react';

const Spinner = () => {
	return (
		<tr>
			<td colSpan="5">
				<div className="d-flex justify-content-center">
					<div className="spinner-border" role="status"></div>
				</div>
			</td>
		</tr>
	);
};

export default Spinner;
