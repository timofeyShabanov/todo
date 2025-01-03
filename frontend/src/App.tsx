import "./App.css";
import { Button } from "./components/button/button.tsx";
import { TodosService } from "./services/api/TodosService.ts";

function App() {
	return (
		<>
			<div> todo list from Timofey </div>
			<Button
				onClick={() => {
					TodosService.getAllTodo();
				}}
				title="get"
			/>
			<Button
				onClick={() => {
					TodosService.createTodo();
				}}
				title="post"
			/>
		</>
	);
}

export default App;
