import { root, child, padding, margin, display, position, top } from "@acryps/style";
import { homeStyle } from "./home/index.style";

export const orca-infoStyle = () => root(
	child('body',
		padding(0),
		margin(0),

		child('ui-page',
			homeStyle(),

			display('block'),

			child('ui-navigation',
				position('sticky'),
				top(0),

				display('block')
			)
		)
	)
);
