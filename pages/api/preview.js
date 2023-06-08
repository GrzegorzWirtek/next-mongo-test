const handler = async (req, res) => {
	res.setPreviewData(req.query);
	res.redirect('/tasks');
};

export default handler;
