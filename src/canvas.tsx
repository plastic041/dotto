import invariant from "tiny-invariant";
import { css } from "../styled-system/css";
import { Pixel } from "./components/pixel/pixel";

type Art = number[]; // index into COLORS

type CanvasProps = {
	size: number;
	colors: readonly string[];
	art: Art;
};
export function Canvas({ size, colors, art }: CanvasProps) {
	invariant(
		size * size === art.length,
		`art must be size * size: ${size * size} !== ${art.length}`,
	);
	invariant(colors.length > 0, "colors must not be empty");

	return (
		<article
			className={css({
				display: "flex",
				p: 4,
				bgColor: "white",
				boxShadow: "lg",
				rounded: "sm",
			})}
		>
			<div
				className={css({
					display: "grid",
					gridTemplateColumns: `repeat(${size}, 1fr)`,
					width: "400px",
					height: "400px",
				})}
			>
				{art.map((colorIndex, i) => {
					const color = colors[colorIndex];
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					return <Pixel key={i} color={color} />;
				})}
			</div>
		</article>
	);
}
