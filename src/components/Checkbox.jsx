import React from 'react';

const Checkbox = props => {
	return (
		<div className="custom-control custom-checkbox">
			<input type="checkbox" className="custom-control-input" id={props.id} />
			<label className="custom-control-label" htmlFor={props.id}>
				{props.label}
			</label>
		</div>
	);
};

export default Checkbox;
