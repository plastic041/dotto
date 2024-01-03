import { css } from "~/styled-system/css";

type PixelProps = {
	color: string;
};
export function Pixel({ color }: PixelProps) {
	return (
		<div
			className={css({
				width: "100%",
				height: "100%",
				aspectRatio: "1 / 1",
			})}
			style={{
				backgroundColor: color,
			}}
		/>
	);
}
