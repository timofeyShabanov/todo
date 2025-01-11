import { useForm, SubmitHandler } from "react-hook-form";
import cl from "./modalManu.module.scss";
import { TodosService } from "../../shared/api/TodosService.ts";
import { TTodo } from "../../shared/types/types.ts";

interface ModalProps {
	active: boolean;
	setActive: (active: boolean) => void;
	reloadTodos: () => void;
}

const ModalMenu = ({ active, setActive, reloadTodos }: ModalProps) => {
	const { register, handleSubmit, reset } = useForm<TTodo>();

	const onSubmit: SubmitHandler<TTodo> = async data => {
		try {
			await TodosService.createTodo(data);
			setActive(false);
			reloadTodos();
			reset();
		} catch (error) {
			console.error("Error creating todo:", error);
		}
	};

	return (
		<div
			className={`${cl.modal} ${active ? cl.active : ""}`}
			onClick={() => setActive(false)}>
			<div
				className={`${cl.modal__content} ${active ? cl.active : ""}`}
				onClick={e => e.stopPropagation()}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<label>
						Create new todo
						<input
							{...register("title", { required: "This field is required" })}
							placeholder="Enter todo title"
						/>
						<input
							{...register("content", { required: "This field is required" })}
							placeholder="Enter todo content"
						/>
					</label>
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
};

export default ModalMenu;
