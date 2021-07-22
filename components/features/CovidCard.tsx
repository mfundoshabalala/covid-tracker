import CovidCardHeader from 'components/atoms/CovidCardHeader';
import CovidCardDetailItem from 'components/atoms/CovidCardDetailItem';

const CovidCard: React.FC<Country> = (props) => {
	const {
		Country,
		CountryCode,
		Slug,
		NewConfirmed,
		NewDeaths,
		NewRecovered,
		TotalConfirmed,
		TotalDeaths,
		TotalRecovered,
	} = props;

	return (
		<li className="p-2 space-y-5 border border-gray-800 rounded shadow-md hover:shadow-xl max-w-prose">
			<CovidCardHeader countryName={Country} countryCode={CountryCode} countrySlug={Slug} />
			<div className="grid grid-cols-3 text-base font-light">
				<CovidCardDetailItem title="New Confirmed" value={NewConfirmed} />
				<CovidCardDetailItem title="New Deaths" value={NewDeaths} />
				<CovidCardDetailItem title="New Recovered" value={NewRecovered} />
				<CovidCardDetailItem title="Total Confirmed" value={TotalConfirmed} />
				<CovidCardDetailItem title="Total Deaths" value={TotalDeaths} />
				<CovidCardDetailItem title="Total Recovered" value={TotalRecovered} />
			</div>
		</li>
	);
};
export default CovidCard;
