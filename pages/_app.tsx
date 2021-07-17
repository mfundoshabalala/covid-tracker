/* eslint-disable react/jsx-props-no-spreading */
import { SWRConfig } from 'swr';
import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
// global app styles + tailwindcss default styles
import '../styles/global.css';
// basic site layout component
import BasicLayout from 'components/layout/BasicLayout';

function App({ Component, pageProps, router }: AppProps): JSX.Element {
	return (
		<AnimatePresence exitBeforeEnter>
			<BasicLayout>
				<SWRConfig
					value={{
						refreshInterval: 36000,
						fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
					}}
				>
					<Component {...pageProps} key={router.route} />
				</SWRConfig>
			</BasicLayout>
		</AnimatePresence>
	);
}

export default App;
