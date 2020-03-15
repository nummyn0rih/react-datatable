import React from 'react';

const Switch = props => {
	return (
		<div className="custom-control custom-switch">
			<input
				onChange={props.onChange}
				type="checkbox"
				checked={props.display}
				className="custom-control-input"
				id={props.name}
			/>
			<label className="custom-control-label" htmlFor={props.name}>
				{props.title}
			</label>
		</div>
	);
};

export default Switch;
