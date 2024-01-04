import { memo } from "react";
import invariant from "tiny-invariant";
import { css } from "../../styled-system/css";
import { Pixel } from "./pixel/pixel.tsx";

type Art = number[]; // index into COLORS

type CanvasProps = {
	size: number;
	colors: readonly string[];
	art: Art;
};
export const Canvas = memo(function Canvas({ size, colors, art }: CanvasProps) {
	invariant(
		size * size === art.length,
		`art must be size * size: ${size * size} !== ${art.length}`,
	);
	invariant(colors.length > 0, "colors must not be empty");

	return (
		<div
			className={css({
				display: "grid",
			})}
			style={{
				gridTemplateColumns: `repeat(${size}, 1fr)`,
			}}
		>
			{art.map((colorIndex, i) => {
				const color = colors[colorIndex];
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				return <Pixel key={i} color={color} />;
			})}
		</div>
	);
});
