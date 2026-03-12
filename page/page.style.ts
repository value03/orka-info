import { style, child, padding, margin, display, position, top, height, px, width, backgroundColor, hex, url, background } from "@acryps/style";
import { homeStyle } from "./home/index.style";
import { maskImage } from "./style.extensions";

export const applicationStyle = () => style('body')(
    padding(0),
    margin(0),

    child('ui-page')(
        homeStyle(),

        display('block'),

        child('ui-navigation')(
            position('sticky'),
            top(0),

            display('block'),

            child('ui-logo')(
                height(px(200)),
                width(px(200)),
                backgroundColor(hex("#FCD6C7")),
                maskImage(url('assets/image1.png')),
                )
			)
		)
    );
