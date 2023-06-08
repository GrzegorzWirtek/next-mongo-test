const handler = async (req, res) => {
	await res.clearPreviewData();
	await res.end('Preview mode disable');
	res.revalidate('/tasks');
};

export default handler;
