import { useState } from "react";
import { Canvas } from "~/src/components/canvas";
import { css } from "~/styled-system/css";

const SIZE = 8;
const COLORS = [
	"#46425e",
	"#15788c",
	"#00b9be",
	"#ffeecc",
	"#ffb0a3",
	"#ff6973",
] as const;

function randomInt(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
	const [_, render] = useState(0);
	function rerender() {
		render((v) => v + 1);
	}

	const randomArt = Array.from({ length: SIZE * SIZE }, () =>
		randomInt(0, COLORS.length - 1),
	);

	return (
		<div
			className={css({
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
				width: "100vw",
				bgColor: "gray.200",
			})}
			onClick={rerender}
			onKeyDown={(e) => {
				console.log(e.key);
				if (e.key === " ") {
					rerender();
				}
			}}
		>
			<div
				className={css({
					width: "400px",
					height: "400px",
				})}
			>
				<Canvas size={SIZE} colors={COLORS} art={randomArt} />
			</div>
		</div>
	);
}

export default App;
