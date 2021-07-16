import Head from 'next/head';
import { NextPage } from 'next';

const Home: NextPage = () => (
	<>
		<Head>
			<title>Covid-19 : Home</title>
		</Head>
		<div className="grid h-full place-items-center">
			<h1 className="font-black text-8xl">Home Page</h1>
		</div>
	</>
);

export default Home;
