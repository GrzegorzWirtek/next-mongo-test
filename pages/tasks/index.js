import { useState } from 'react';
import getTasksFromDB from './getTasksFromDB';
import Link from 'next/link';

export default function Tasks({ data }) {
	const [tasks, setTasks] = useState(data);

	return (
		<>
			<section>
				<h1>Main page</h1>
				{tasks &&
					tasks.map(({ _id, task }) => (
						<div key={_id}>
							<p>
								{task} {_id}
							</p>
							<Link href={`tasks/${_id}`}>Go to details</Link>
						</div>
					))}
			</section>
		</>
	);
}

export async function getStaticProps() {
	const data = await getTasksFromDB();

	return {
		props: {
			data,
		},
		revalidate: 3,
	};
}
