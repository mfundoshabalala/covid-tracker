import Head from 'next/head';
import { NextPage } from 'next';

const About: NextPage = () => (
	<>
		<Head>
			<title>Covid-19 : About Us</title>
		</Head>
		<div className="grid h-full place-items-center">
			<h1 className="font-black text-8xl">About Us</h1>
		</div>
	</>
);

export default About;
