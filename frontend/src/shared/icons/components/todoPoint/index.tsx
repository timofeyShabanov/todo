const DEFAULT_COLOR = "#EBB2C4";
const DEFAULT_WIDTH = 20;
const DEFAULT_HEIGHT = 20;

interface IIcon {
	width?: number;
	height?: number;
	color?: string;
	hover?: boolean;
}

export function TodoPoint({
	width = DEFAULT_WIDTH,
	height = DEFAULT_HEIGHT,
	color = DEFAULT_COLOR,
	hover,
}: IIcon) {
	let hover_color = "none";
	if (hover) {
		hover_color = "#F4CCD8";
	}
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 10 10"
			xmlns="http://www.w3.org/2000/svg">
			<circle
				cx="5"
				cy="5"
				r="3"
				fill={hover_color}
				stroke={color}
				stroke-width="2"
			/>
		</svg>
	);
}
