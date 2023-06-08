const handler = async (req, res) => {
	if (req.query.secret !== 'secret-token') {
		return res.status(401).json({ message: 'Invalid token' });
	}

	const { body: newTask } = req;
	await res.clearPreviewData();
	await res.setPreviewData(newTask);
	await res.send(newTask);
	res.revalidate('/tasks');
};

export default handler;
