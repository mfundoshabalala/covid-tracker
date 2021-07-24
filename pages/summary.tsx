import Head from 'next/head';
import { NextPage } from 'next';
// search context
import { SearchProvider } from 'hooks/useSearchContext';
// feature components
import SummaryHeader from 'components/features/SummaryHeader';
import CountriesList from 'components/features/CountriesList';

const Summary: NextPage = () => (
		<>
			<Head>
				<title>Covid-19 : Global Summary Statistics</title>
			</Head>
			<SearchProvider>
				<div className="grid h-full place-items-center">
					<SummaryHeader />
					<CountriesList />
				</div>
			</SearchProvider>
		</>
	);

export default Summary;
