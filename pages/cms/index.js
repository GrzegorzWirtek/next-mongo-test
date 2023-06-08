import Link from 'next/link';
import AddTask from '@/components/AddTask.js';
import { useRouter } from 'next/router';

export default function Cms({ data }) {
	const router = useRouter();

	const handleSetNewTask = async (newTask) => {
		const query = JSON.stringify(newTask);
		router.push(`/api/preview?query=${query}`);
	};

	const handleClearPreview = async () => {
		router.push('/api/end-preview');
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
