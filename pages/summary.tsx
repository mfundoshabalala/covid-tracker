import Head from 'next/head';
import { NextPage } from 'next';

const Summary: NextPage = () => (
	<>
		<Head>
			<title>Covid-19 : Summary Statistics</title>
		</Head>
		<div className="grid h-full place-items-center">
			<h1 className="font-black text-8xl">Summary Page</h1>
		</div>
	</>
);

export default Summary;
