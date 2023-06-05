import { connectMongoDB } from '@/libs/mongodb/MongoConnect';
import TaskModel from '@/libs/mongodb/models/TaskModel';

export default async function getTasksFromDB(_id) {
	await connectMongoDB();
	const task = await TaskModel.findById({ _id });
	const data = JSON.parse(JSON.stringify(task));
	return data;
}
