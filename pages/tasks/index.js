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
							{_id.length < 24 ? null : (
								<Link href={`tasks/${_id}`}>Go to details {_id.length}</Link>
							)}
						</div>
					))}
				<Link
					style={{
						display: 'inline-block',
						margin: '20px',
						border: '1px solid grey',
					}}
					href='/cms'>
					GO TO CMS
				</Link>
			</section>
		</>
	);
}

export async function getStaticProps(context) {
	const { preview, previewData } = context;
	const data = await getTasksFromDB();
	const newData = [...data, previewData];

	return {
		props: {
			data: preview ? newData : data,
		},
		revalidate: 3,
	};
}
