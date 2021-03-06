import Link from 'next/link';

const BrandLogo: React.FC = () => (
	<div className="px-1 py-2 text-[36px] tracking-tighter font-black text-transparent min-w-max font-firaSans bg-gradient-to-r bg-clip-text from-gray-100 to-gray-50">
		<Link href="/">
			<a className="block mx-2 uppercase hover:line-through min-w-max">
				Covid<sub className="pr-1 mr-1 bg-gradient-to-r bg-clip-text from-gray-100 to-gray-50">19</sub>
			</a>
		</Link>
	</div>
);

export default BrandLogo;
