import { Button } from "react-aria-components";
import type { ButtonProps } from "react-aria-components";
import { css } from "~/styled-system/css";

export function KeyButton({ children, ...props }: ButtonProps) {
	return (
		<Button
			className={css({
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				fontSize: 64,
				color: "yellow.400",
				aspectRatio: "1 / 1",
				bgColor: "white",
				rounded: "xl",
				cursor: "pointer",

				boxShadow: "0 4px 0 gray",

				"&[data-hovered]": {
					bgColor: "gray.50",
				},

				"&[data-pressed]": {
					boxShadow: "0 2px 0 gray",
					transform: "translateY(2px)",
				},

				"&[data-focused]": {
					outline: "none",
				},

				"&[data-focused][data-focus-visible]": {
					outline: "4px solid black",
				},
			})}
			{...props}
		>
			{children}
		</Button>
	);
}
