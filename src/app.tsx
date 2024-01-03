import { css } from "../styled-system/css";
import { Canvas } from "./canvas";

const SIZE = 8;
const COLORS = [
	"#46425e",
	"#15788c",
	"#00b9be",
	"#ffeecc",
	"#ffb0a3",
	"#ff6973",
] as const;

// const ART = [
//   0, 0, 0, 0, 0, 0, 0, 0,
//   0, 1, 1, 1, 1, 1, 1, 0,
//   0, 1, 2, 2, 2, 2, 1, 0,
//   0, 1, 2, 3, 3, 2, 1, 0,
//   0, 1, 2, 3, 3, 2, 1, 0,
//   0, 1, 2, 2, 2, 2, 1, 0,
//   0, 1, 1, 1, 1, 1, 1, 0,
//   0, 0, 0, 0, 0, 0, 0, 0,
// ];
const ART: number[] = `00000000
01111110
01222210
01233210
01233210
01222210
01111110
00000000
`
	.split("\n")
	.join("")
	.split("")
	.map(Number);

function App() {
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
		>
			<Canvas size={SIZE} colors={COLORS} art={ART} />
		</div>
	);
}

export default App;
