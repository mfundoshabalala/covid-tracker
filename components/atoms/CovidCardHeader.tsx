import Image from 'next/image';

interface HeaderProps {
	countryName: string;
	countryCode: string;
	countrySlug: string;
}

const CovidCardHeader: React.FC<HeaderProps> = (props) => {
	const { countryName, countryCode, countrySlug } = props;

	return (
		<div className="flex flex-row flex-nowrap">
			<div className="relative grid place-items-center">
				<Image
					width={165}
					height={95}
					src={`https://flagcdn.com/${countryCode.toLowerCase()}.svg`}
					alt={countrySlug}
					className="object-cover align-middle rounded-sm"
				/>
			</div>
			<div className="flex flex-col items-center justify-center flex-1 font-thin">
				<span className="text-lg">{countryName}</span>
				<span className="text-sm">{countryCode}</span>
			</div>
		</div>
	);
};

export default CovidCardHeader;
