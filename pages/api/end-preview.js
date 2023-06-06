const handler = async (req, res) => {
	res.clearPreviewData();
	res.end('Preview mode disable');
};

export default handler;
