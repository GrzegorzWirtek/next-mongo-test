import { useState } from 'react';
import getTasksFromDB from '@/utils/getTasksFromDB';
import Link from 'next/link';

export default function Tasks({ data }) {
	const [tasks, setTasks] = useState(data);

	return (
		<>
			<section>
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

export async function getStaticProps(context) {
	const { preview, previewData } = context;
	const data = await getTasksFromDB();
	const newData = [...data, previewData];
	console.log('new data:', newData);

	return {
		props: {
			data: preview ? newData : data,
		},
		revalidate: 3,
	};
}
