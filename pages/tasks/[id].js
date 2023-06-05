import getTasksFromDB from './getTasksFromDB';
import getTaskFromDB from './getTaskFromDB';

export default function Task({ data }) {
	const { _id, task, description } = data;
	return (
		<>
			<h2>{task}</h2>
			<p>{_id}</p>
			<p>{description}</p>
		</>
	);
}

export async function getStaticPaths() {
	const data = await getTasksFromDB();

	const paths = data.map((task) => {
		return {
			params: {
				id: task._id.toString(),
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const { params } = context;

	const data = await getTaskFromDB(params.id);

	return {
		props: {
			data,
		},
	};
}
