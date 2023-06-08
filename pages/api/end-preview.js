const handler = async (_, res) => {
	res.clearPreviewData();
	res.redirect('/tasks');
};

export default handler;
