import { Component, PathRouter, Router } from '@acryps/page';
import { registerDirectives } from '@acryps/page-default-directives';
import { PageComponent } from './page';
import { HomePage } from './home';
import { orca-infoStyle } from './page.style';

// injected by esbuild
declare const buildDate: string;
declare const buildCommit: string;

export class orca-info {
	static router: Router;

	static async main() {
		this.router = new PathRouter(PageComponent
			.route('/', HomePage)
		);

		registerDirectives(Component, this.router);

		// load styles
		orca-infoStyle().apply();

		// render orca-info
		this.router.host(document.body);

		// output build information
		console.group(`build ${buildCommit}`);
		console.log(`built ${buildDate}`);
		console.log('developed by acryps.com');
		console.groupEnd();
	}
}

orca-info.main();
