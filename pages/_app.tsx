/* eslint-disable react/jsx-props-no-spreading */
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
				<Component {...pageProps} key={router.route} />
			</BasicLayout>
		</AnimatePresence>
	);
}

export default App;
