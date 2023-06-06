import { useState } from 'react';
import Link from 'next/link';
import AddTask from '@/components/AddTask.js';

export default function Cms({ data }) {
	const [newTask, setNewTask] = useState(null);

	const handleSetNewTask = (newTask) => {
		console.log('this is new task: ', newTask);
		setNewTask(newTask);
	};

	return (
		<>
			<section>
				<AddTask handleSetNewTask={handleSetNewTask} />
				{data &&
					data.map(({ _id, task }) => (
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
