import { Component } from '@acryps/page';
import { svgFromString } from './utils/svg';

const circle = '<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg"><circle r="25" cx="50" cy="50" fill="red"/> </svg>'

export class PageComponent extends Component {
	render(child) {
		return <ui-page>
			<ui-navigation>
				<ui-logo></ui-logo>
                {svgFromString(circle)}
			</ui-navigation>

			{child}
		</ui-page>;
	}
}
