const handler = async (req, res) => {
	if (
		req.query.secret !== process.env.NEXT_PUBLIC_PREVIEW_SECRET ||
		!req.query.slug
	) {
		return res.status(401).json({ message: 'Invalid token' });
	}

	res.clearPreviewData();
	res.redirect(req.query.slug);
};

export default handler;
