const handler = async (req, res) => {
	res.setPreviewData(req.query);
	res.redirect(req.query.slug);
};

export default handler;
