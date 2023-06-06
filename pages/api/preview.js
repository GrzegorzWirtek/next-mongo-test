const handler = async (req, res) => {
	if (req.query.secret !== 'secret-token') {
		return res.status(401).json({ message: 'Invalid token' });
	}

	res.setPreviewData({
		_id: 'testit123',
		task: 'Task 1',
		description: 'Descr 1',
		date: '12:12:12, 2023',
	});

	res.send({ task: 'Task 1', description: 'Descr 1', date: '12:12:12, 2023' });
	// res.redirect(post.slug);
};

export default handler;
