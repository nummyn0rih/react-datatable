import React, { Component } from 'react';
import { connect } from 'react-redux';
import uniqueId from 'lodash.uniqueid';

class TableRow extends Component {
	render() {
		const { user, columns } = this.props;
		return (
			<tr data-id={user.id}>
				{columns.map(
					col =>
						col.display && (
							<td key={uniqueId()} data-name={col.name}>
								{col.name === 'avatar' ? (
									<div className="media">
										<img src={user.picture.medium} className="mr-3" alt="userAvatar" />
									</div>
								) : (
									user[col.name]
								)}
							</td>
						)
				)}
			</tr>
		);
	}
}

const mapStateToProps = ({ uiState: { columns } }) => ({ columns });

export default connect(mapStateToProps, null)(TableRow);
