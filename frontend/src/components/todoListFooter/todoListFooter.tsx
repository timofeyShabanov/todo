import { useState } from "react";
import { RemoveButton } from "../../shared/icons/components/deleteButton";
import { AddButton } from "../../shared/icons/components/addButton";
import ModalMenu from "../modalMenu/modalMenu.tsx";
import cl from "./todoListFooter.module.scss";

interface Props {
	fetchTodo: () => void;
	setShowDeleteButtons: () => void;
}

const TodoListFooter = ({ fetchTodo, setShowDeleteButtons }: Props) => {
	const [modalActive, setModalActive] = useState(false);

	return (
		<div className={cl["footer"]}>
			<div
				className={cl["footer__button"]}
				onClick={() => {
					setShowDeleteButtons();
				}}>
				<RemoveButton />
			</div>
			<ModalMenu
				active={modalActive}
				setActive={setModalActive}
				reloadTodos={fetchTodo}
			/>
			надпись
			<div
				className={cl["footer__button"]}
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
	);
};

export default TodoListFooter;
