import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';

import { Header } from '@comps/Header.jsx';
import { Home } from '@pages/Home/index.jsx';
import { Chat } from '@pages/Chat/index.jsx';
import { NotFound } from '@pages/_404.jsx';
import '@style/global.styl';

export function App() {
	return (
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route path="/" component={Chat} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
