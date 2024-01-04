type CursorProps = {
	x: number;
	y: number;
	size: number;
};
export function Cursor({ x, y, size }: CursorProps) {
	return (
		<div
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				width: `${size}px`,
				transform: `translate(${x * size}px, ${y * size}px)`,
				aspectRatio: "1 / 1",
				boxShadow: "0 0 0 2px white, 0 0 0 4px black",
				transition: "all 25ms ease-in-out",
			}}
		/>
	);
}
