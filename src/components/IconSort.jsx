import React from 'react';

const IconSort = props => {
	const cn =
		props.direction === 'asc' ? 'sort-icon' : 'sort-icon sort-icon-desc';

	return (
		<svg
			className={cn}
			xmlns="http://www.w3.org/2000/svg"
			height="24"
			viewBox="0 0 24 24"
			width="24"
			fill="#fff"
		>
			<path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
			<path d="M0 0h24v24H0z" fill="none" />
		</svg>
	);
};

export default IconSort;
