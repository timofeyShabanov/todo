import { useState } from "react";

const DEFAULT_COLOR = "#EBB2C4";
const DEFAULT_WIDTH = 36;
const DEFAULT_HEIGHT = 36;

interface IIcon {
	width?: number;
	height?: number;
	color?: string;
	hover?: boolean;
}

export function AddButton({
	width = DEFAULT_WIDTH,
	height = DEFAULT_HEIGHT,
	color = DEFAULT_COLOR,
}: IIcon) {
	const [isHovered, setIsHovered] = useState(false);
	let hover_color = "none";
	if (isHovered) {
		hover_color = "#F4CCD8";
	}
	return (
		<svg
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 36 36"
			fill={hover_color}
			stroke={color}
			stroke-width="3">
			<circle cx="18" cy="18" r="16" />
			<line x1="18" y1="10" x2="18" y2="26" stroke={color} stroke-width="3" />
			<line x1="10" y1="18" x2="26" y2="18" stroke={color} stroke-width="3" />
		</svg>
	);
}
