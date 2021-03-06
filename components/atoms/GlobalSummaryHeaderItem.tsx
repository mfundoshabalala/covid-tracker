import classNames from 'classnames';

interface GlobalDetailsProps {
	title: string;
	value1?: number;
	value2?: number;
	className?: string;
}

const GlobalSummaryHeaderItem: React.FC<GlobalDetailsProps> = (props) => {
	const { title, value1, value2, className = '' } = props;
	const styles = `grid py-4 shadow sm:flex-1 place-items-center max-w-prose rounded`;

	return (
		<section className={classNames(styles, className)}>
			<h2 className="text-2xl font-black uppercase">{`Global ${title} Cases`}</h2>
			<div className="font-mono text-lg font-light max-w-max">
				<div className="flex justify-between w-full space-x-4">
					<span className="">New:</span>
					<span className="">{value1?.toLocaleString()}</span>
				</div>
				<div className="flex justify-between w-full space-x-4">
					<span className="">Total:</span>
					<span className="">{value2?.toLocaleString()}</span>
				</div>
			</div>
		</section>
	);
};

export default GlobalSummaryHeaderItem;
