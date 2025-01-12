import axios from "axios";
import { TTodo } from "../types/types.ts";

const api = "http://localhost:5002/";

export const TodosService = {
	async createTodo({ title, content }: TTodo) {
		return axios
			.post(`${api}todo`, {
				title: title,
				content: content,
				done: false,
			})
			.then(response => {
				return response.data;
			})
			.catch(error => {
				console.error(error);
				throw error;
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

	async PutTodoDone({ _id, done }: TTodo) {
		return axios
			.put(`${api}todo`, {
				id: _id,
				done: done,
			})
			.catch(error => {
				console.error(error);
				throw error;
			});
	},

	async DeleteTodo({ _id }: TTodo) {
		return axios
			.delete(`${api}todo`, {
				data: { id: _id },
			})
			.catch(error => {
				console.error(error);
				throw error;
			});
	},
};
