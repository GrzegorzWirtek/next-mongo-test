import { useState } from 'react';
import getTasksFromDB from '@/utils/getTasksFromDB';
import Link from 'next/link';
// import { connectMongoDB } from '@/libs/mongodb/MongoConnect';
// import TaskModel from '@/libs/mongodb/models/TaskModel';

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
	// await connectMongoDB();
	// const tasks = await TaskModel.find();
	// const data = JSON.parse(JSON.stringify(tasks));

	return {
		props: {
			data,
		},
		revalidate: 3,
	};
}
