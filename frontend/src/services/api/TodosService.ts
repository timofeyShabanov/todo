import axios from "axios";

export const TodosService = {
	async createTodo() {
		axios.post("http://localhost:5000/todo").then(response => {
			console.log(response);
		});
	},

	async getAllTodo() {
		axios.get("http://localhost:5000/todo").then(response => {
			console.log(response.data);
		});
	},
};
