const host = 'https://randomuser.me/api';
const includingFields = ['id', 'name', 'email', 'phone', 'picture'];

export default {
	randomUsers: value => {
		const params = [
			`?results=${value}`,
			`inc=${includingFields.join()}`,
			'noinfo',
		].join('&');
		return [host, params].join('/');
	},
};
