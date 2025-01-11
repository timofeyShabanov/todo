import { useState } from "react";
import cl from "./todoTitle.module.scss";

const TodoTitle = () => {
	const titles = ["1", "2", "3", "4"];
	const [activeIndex, setActiveIndex] = useState<number>(0);

	return (
		<div className={cl["title"]}>
			{titles.map((title, index) => (
				<div key={index}>
					<div
						className={`${cl["title__content"]} ${
							activeIndex === index ? cl["title__content--active"] : ""
						}`}
						onClick={() => setActiveIndex(index)}
						onMouseEnter={() => console.log(`enter ${title}`)}
						onMouseLeave={() => console.log(`leave ${title}`)}>
						{title}
					</div>
				</div>
			))}
		</div>
	);
};

export default TodoTitle;
