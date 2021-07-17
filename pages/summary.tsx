import Head from 'next/head';
import { NextPage } from 'next';
import useSWR from 'swr';

const Summary: NextPage = () => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const { data } = useSWR('https://api.covid19api.com/summary');

	return (
		<>
			<Head>
				<title>Covid-19 : Summary Statistics</title>
			</Head>
			<div className="grid h-full place-items-center">
				<h1 className="text-2xl font-black">Summary Page</h1>
				<p>{JSON.stringify(data, null, 2)}</p>
			</div>
		</>
	);
};

export default Summary;

