import { TodosService } from "../../shared/api/TodosService.ts";
import Todo from "../../components/todo/todo.tsx";
import { useEffect, useState } from "react";
import { TTodo } from "../../shared/types/types.ts";
import cl from "./allTodo.module.scss";

const AllTodos = () => {
	const [allTodos, setAllTodos] = useState<TTodo[]>([]);

	useEffect(() => {
		const fetchTodo = async () => {
			const todos = await TodosService.getAllTodos();
			setAllTodos(todos);
			console.log(todos);
		};
		fetchTodo();
	}, []);

	return (
		<div className={cl["container"]}>
			{allTodos.map(todo => (
				<Todo key={todo._id} {...todo} />
			))}
		</div>
	);
};

export default AllTodos;
