import Link from 'next/link';
import AddTask from '@/components/AddTask.js';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Cms({ data }) {
	const router = useRouter();

	const handleSetNewTask = async (newTask) => {
		await axios.post('/api/preview?secret=secret-token', newTask);
		router.push('/tasks');
	};

	const handleClearPreview = async () => {
		await axios.post('/api/end-preview');
		router.push('/tasks');
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
				<button onClick={handleClearPreview} style={{ margin: '15px' }}>
					CLEAR PREVIEW
				</button>
			</section>
		</>
	);
}
