import { connectMongoDB } from '@/libs/mongodb/MongoConnect';
import TaskModel from '@/libs/mongodb/models/TaskModel';

export default async function getTasksFromDB() {
	await connectMongoDB();
	const tasks = await TaskModel.find();
	const data = JSON.parse(JSON.stringify(tasks));
	return data;
}
