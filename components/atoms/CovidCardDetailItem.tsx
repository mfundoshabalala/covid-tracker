const CovidCardDetailItem: React.FC<DetailProps> = (props) => {
	const { title, value } = props;
	return (
		<div className="flex flex-col items-center justify-center -space-y-1">
			<span className="tracking-tighter">{title}</span>
			<span className="text-sm">{value.toLocaleString()}</span>
		</div>
	);
};

export default CovidCardDetailItem;
