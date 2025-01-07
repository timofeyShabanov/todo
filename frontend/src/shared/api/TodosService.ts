import axios from "axios";
import { TTodo } from "../types/types.ts";

const api = "http://localhost:5001/";

export const TodosService = {
	async createTodo({ content, done }: TTodo) {
		return axios
			.post(`${api}todo`, {
				content: content,
				done: done,
			})
			.then(response => {
				console.log(response);
				return response.data; // Если нужно вернуть результат
			})
			.catch(error => {
				console.error(error);
				throw error; // Если нужно обработать ошибки
			});
	},

	async getAllTodos() {
		return axios
			.get(`${api}todo`)
			.then(response => response.data)
			.catch(error => {
				console.error(error);
				throw error;
			});
	},
};
