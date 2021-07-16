/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head />
				<body className="text-white bg-blueGray-900">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
