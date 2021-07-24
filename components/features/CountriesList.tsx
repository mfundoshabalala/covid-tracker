import useSWR from 'swr';

import CovidCard from 'components/features/CovidCard';
import { useSearch } from 'hooks/useSearchContext';

const CountriesList: React.FC = () => {
	const { searchTerm } = useSearch();
	const { data } = useSWR<SummaryProps>('https://api.covid19api.com/summary');

	if (!data) return <div className="grid h-full text-4xl place-items-center">Loading...</div>;

	return (
		<ul className="container grid justify-center py-6 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-6">
			{data?.Countries?.filter((item) => item.Country.toLowerCase().includes(searchTerm.toLowerCase())).map(
				(country) => (
					<CovidCard {...country} key={country.ID} />
				)
			)}
		</ul>
	);
};

export default CountriesList;
