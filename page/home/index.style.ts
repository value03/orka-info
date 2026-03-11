import { child, color, display } from "@acryps/style";
import { primaryColor } from "../index.style";

export const homeStyle = () => child('ui-home')(
	display('block'),

	color(primaryColor)
);
