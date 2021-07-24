import useSWR from 'swr';

import GlobalSummaryHeaderItem from 'components/atoms/GlobalSummaryHeaderItem';
import SearchInput from 'components/atoms/SearchInput';

const SummaryHeader: React.FC = () => {
	const { data } = useSWR<SummaryProps>('https://api.covid19api.com/summary');

	return (
		<header className="container grid gap-4 py-6 mx-auto text-center font-firaSans text-blueGray-900">
			<div className="flex flex-col flex-wrap justify-center gap-x-2 gap-y-1 sm:flex-row">
				<GlobalSummaryHeaderItem
					title="Confirmed"
					value1={data?.Global.NewConfirmed}
					value2={data?.Global.TotalConfirmed}
					className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700"
				/>
				<GlobalSummaryHeaderItem
					title="Death"
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
			</div>
			<SearchInput />
		</header>
	);
};

export default SummaryHeader;
