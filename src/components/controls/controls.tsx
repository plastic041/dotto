import { KeyButton } from "~/src/components/controls/button.tsx";
import {
	BxsCaretDownSquare,
	BxsCaretLeftSquare,
	BxsCaretRightSquare,
	BxsCaretUpSquare,
	BxsPencil,
} from "~/src/components/icons/controls";

const ARROWS = {
	up: BxsCaretUpSquare,
	down: BxsCaretDownSquare,
	left: BxsCaretLeftSquare,
	right: BxsCaretRightSquare,
};

type ArrowProps = {
	direction: "up" | "down" | "left" | "right";
	onPress: () => void;
};
export function Arrow({ direction, onPress }: ArrowProps) {
	const Icon = ARROWS[direction];

	return (
		<KeyButton onPress={onPress}>
			<Icon />
		</KeyButton>
	);
}

type DrawProps = {
	onPress: () => void;
};
export function Draw({ onPress }: DrawProps) {
	return (
		<KeyButton onPress={onPress}>
			<BxsPencil />
		</KeyButton>
	);
}
