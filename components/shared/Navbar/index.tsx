import classNames from 'classnames';

import NavLink from 'components/shared/NavLink';

interface NavbarProps {
	isOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = (props) => {
	const { isOpen } = props;

	return (
		<>
			<nav
				className={classNames(
					isOpen ? 'flex justify-center' : 'hidden md:flex',
					'flex-row justify-center items-center flex-1 md:justify-end'
				)}
			>
				<ul className="flex flex-col space-x-2 md:flex-row min-w-max">
					<NavLink href="/about">About</NavLink>
					<NavLink href="/portfolio">Summary</NavLink>
					<NavLink href="/cv">Provicial</NavLink>
					<NavLink href="/blog">FAQ</NavLink>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
