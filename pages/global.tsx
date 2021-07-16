import Head from 'next/head';
import { NextPage } from 'next';

const Global: NextPage = () => (
	<>
		<Head>
			<title>Covid-19 : Global Statistic</title>
		</Head>
		<div className="grid h-full place-items-center">
			<h1 className="font-black text-8xl">Global Page</h1>
		</div>
	</>
);

export default Global;
