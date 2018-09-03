import axios from 'axios';

export default {
	getUsers() {
		const url = 'https://jsonplaceholder.typicode.com/users';
		return axios.get(`${url}`);
	}
}