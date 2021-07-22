import useSWR from 'swr';
import Head from 'next/head';
import { NextPage } from 'next';

import CovidCard from 'components/features/CovidCard';
import SummaryHeader from 'components/features/SummaryHeader';

const Summary: NextPage = () => {
	const { data } = useSWR<SummaryProps>('https://api.covid19api.com/summary');

	if (!data) return <div className="grid h-full text-4xl place-items-center">Loading...</div>;

	return (
		<>
			<Head>
				<title>Covid-19 : Global Summary Statistics</title>
			</Head>
			<div className="grid h-full place-items-center">
				<SummaryHeader />
				<ul className="container grid py-6 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-6">
					{data?.Countries?.map((country) => (
						<CovidCard {...country} key={country.ID} />
					))}
				</ul>
			</div>
		</>
	);
};

export default Summary;
