const handler = async (req, res) => {
	if (req.query.secret !== 'secret-token') {
		return res.status(401).json({ message: 'Invalid token' });
	}

	const { body: newTask } = req;

	res.setPreviewData(newTask);

	res.send(newTask);
};

export default handler;
