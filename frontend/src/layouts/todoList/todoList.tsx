import { TodosService } from "../../shared/api/TodosService.ts";
import Todo from "../../components/todo/todo.tsx";
import { useEffect, useState } from "react";
import { TTodo } from "../../shared/types/types.ts";
import cl from "./todoList.module.scss";
import { AddButton } from "../../shared/icons/components/addButton";
import ModalMenu from "../../components/modalMenu/modalMenu.tsx";
import TodoTitle from "../../components/todoTitle/todoTitle.tsx";

const TodoList = () => {
	const [allTodos, setAllTodos] = useState<TTodo[]>([]);
	const [modalActive, setModalActive] = useState(false);

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
						<Todo key={todo._id} {...todo} />
					))}
				</div>
				<div className={cl["todo__list__footer"]}>
					<div
						className={cl["todo__list__footer__button"]}
						onClick={() => {
							setModalActive(true);
						}}>
						<AddButton />
					</div>
					<ModalMenu
						active={modalActive}
						setActive={setModalActive}
						reloadTodos={fetchTodo}
					/>
					надпись
					<div
						className={cl["todo__list__footer__button"]}
						onClick={() => {
							setModalActive(true);
						}}>
						<AddButton />
					</div>
					<ModalMenu
						active={modalActive}
						setActive={setModalActive}
						reloadTodos={fetchTodo}
					/>
				</div>
			</div>
		</div>
	);
};

export default TodoList;
