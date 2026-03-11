import { Component } from '@acryps/page';

export class PageComponent extends Component {
	render(child) {
		return <ui-page>
			<ui-navigation>
				orca-info
			</ui-navigation>

			{child}
		</ui-page>;
	}
}
