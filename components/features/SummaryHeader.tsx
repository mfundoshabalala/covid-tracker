import useSWR from 'swr';

import GlobalSummaryHeaderItem from 'components/atoms/GlobalSummaryHeaderItem';

const SummaryHeader: React.FC = () => {
	const { data } = useSWR<SummaryProps>('https://api.covid19api.com/summary');
	return (
		<header className="container flex flex-col flex-wrap justify-center py-6 mx-auto text-center font-firaSans text-blueGray-900 gap-x-2 gap-y-1 sm:flex-row">
			<GlobalSummaryHeaderItem
				title="Confirmed"
				value1={data?.Global.NewConfirmed}
				value2={data?.Global.TotalConfirmed}
				className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700"
			/>
			<GlobalSummaryHeaderItem
				title="Deaths"
				value1={data?.Global.NewDeaths}
				value2={data?.Global.TotalDeaths}
				className="bg-gradient-to-br from-red-400 via-red-500 to-red-700"
			/>
			<GlobalSummaryHeaderItem
				title="Recovered"
				value1={data?.Global.NewRecovered}
				value2={data?.Global.TotalRecovered}
				className="bg-gradient-to-br from-green-400 via-green-500 to-green-700"
			/>
		</header>
	);
};

export default SummaryHeader;
