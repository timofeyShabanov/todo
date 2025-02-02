import cl from "./todo.module.scss";
import { TodoPoint } from "../../shared/icons/components/todoPoint";
import { useState, useEffect } from "react";
import { TodosService } from "../../shared/api/TodosService.ts";
import useDebounce from "../../shared/hooks/useDebounce/useDebounce.tsx";

interface Props {
	content?: string;
	done?: boolean;
	_id?: string;
	showDeleteButtons: boolean;
}

const Todo = ({ content, done, _id, showDeleteButtons }: Props) => {
	const [isDone, setIsDone] = useState<boolean>(!done);

	const debounced = useDebounce(isDone, 300);

	useEffect(() => {
		const updateTodo = async () => {
			await TodosService.PutTodoDone({ _id, done: !isDone });
		};
		updateTodo();
	}, [debounced]);

	return (
		<div className={cl["todo"]}>
			<div
				onClick={() => {
					setIsDone(!isDone);
				}}
				className={cl["todo__point"]}>
				<TodoPoint hover={isDone} />
			</div>
			<div className={cl["todo__content"]}>
				{!isDone ? content : <s>{content}</s>}
			</div>
		</div>
	);
};

export default Todo;
