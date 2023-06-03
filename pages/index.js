import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Home({ data }) {
	const [tasks, setTasks] = useState(data);

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.main}>
				<h1>Main page</h1>
				{tasks &&
					tasks.map(({ _id, task }) => (
						<div key={_id}>
							<p>
								{task} {_id}
							</p>
						</div>
					))}
			</main>
		</>
	);
}

export async function getStaticProps() {
	const res = await fetch('http://localhost:3000/api/tasks');
	const data = await res.json();

	return {
		props: {
			data,
		},
		revalidate: 3,
	};
}
