import { alignItems, backgroundColor, child, color, display, flexDirection, fontSize, height, hex, justifyContent, justifyItems, margin, percentage, px, vh, width } from "@acryps/style";
import { primaryColor } from "../index.style";

export const homeStyle = () => child('ui-home')(
	display('block'),

	color(primaryColor),

	child('ui-introduction')(
	    display("flex"),
		flexDirection("column"),

		alignItems("center"),

		child('article')(
            margin(percentage(1)),
            fontSize(px(50)),
		)
	)
);
