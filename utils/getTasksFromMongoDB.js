import { connectMongoDB } from '@/libs/mongodb/MongoConnect';
import TaskModel from '@/libs/mongodb/models/TaskModel';

const getTasksFromMongoDB = async () => {
	await connectMongoDB();
	const res = await TaskModel.find();
	const data = JSON.parse(JSON.stringify(res));
	return data;
};

export default getTasksFromMongoDB;
