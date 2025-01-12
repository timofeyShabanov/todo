import { TodosService } from "../../shared/api/TodosService.ts";
import Todo from "../../components/todo/todo.tsx";
import { useEffect, useState } from "react";
import { TTodo } from "../../shared/types/types.ts";
import cl from "./todoList.module.scss";
import TodoTitle from "../../components/todoTitle/todoTitle.tsx";
import TodoListFooter from "../../components/todoListFooter/todoListFooter.tsx";

const TodoList = () => {
	const [allTodos, setAllTodos] = useState<TTodo[]>([]);
	const [showDeleteButtons, setShowDeleteButtons] = useState(false);

	const fetchTodo = async () => {
		const todos = await TodosService.getAllTodos();
		setAllTodos(todos);
	};

	useEffect(() => {
		fetchTodo();
	}, []);

	return (
		<div className={cl["todo"]}>
			<TodoTitle />
			<div className={cl["todo__list"]}>
				<div className={cl["todo__list__todos"]}>
					{allTodos.map(todo => (
						<Todo
							key={todo._id}
							{...todo}
							showDeleteButtons={showDeleteButtons}
						/>
					))}
				</div>
				<TodoListFooter
					fetchTodo={fetchTodo}
					setShowDeleteButtons={() => setShowDeleteButtons(!showDeleteButtons)}
				/>
			</div>
		</div>
	);
};

export default TodoList;
