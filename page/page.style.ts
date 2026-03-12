import { style, child, padding, margin, display, position, top, height, px, width, backgroundColor, hex, url, background, left, boxSizing, fill, justifyItems, alignItems, justifyContent, vh } from "@acryps/style";
import { homeStyle } from "./home/index.style";
import { maskImage, maskPosition, maskRepeat, maskSize } from "./style.extensions";
import { primaryColor, secondaryColor, terkis_complementary, tuerkis } from "./index.style";
import { percentage, Percentage } from "@acryps/style/.built/declarations/primitives";

export const applicationStyle = () => style('body')(
    padding(0),
    margin(0),

    child('ui-page')(
        homeStyle(),

        display('block'),
        backgroundColor(secondaryColor),

        child('ui-navigation')(
            //position('sticky'),
            top(0),

            display('flex'),
            justifyContent('space-between'),
            padding(px(20)),

            backgroundColor(secondaryColor),

            child('ui-logo')(
                display('block'),
                width(px(150)),

                // color
                backgroundColor(primaryColor),

                // masking
                maskImage(url('assets/image1.png')),
                maskSize('contain'),
                maskPosition('center'),
                maskRepeat('no-repeat')
                ),
            child('svg')(
                child('circle')(
                    fill(primaryColor),
                )
            )
			)
		)
    );
