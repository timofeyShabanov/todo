import { TTodo } from "../../shared/types/types.ts";
import cl from "./todo.module.scss";
import { TodoPoint } from "../../shared/icons/components/todoPoint";
import { TodoPointCompleted } from "../../shared/icons/components/todoPointCompleted";
import { useState } from "react";

const Todo = ({ content, done }: TTodo) => {
	const [isDone, setIsDone] = useState(!done);

	const handleToggle = () => {
		setIsDone(!isDone);
	};

	return (
		<div className={cl["todo"]}>
			<div onClick={handleToggle} className={cl["todo__point"]}>
				{isDone ? <TodoPoint /> : <TodoPointCompleted />}
			</div>
			<div className={cl["todo__content"]}> {content} </div>
		</div>
	);
};

export default Todo;
