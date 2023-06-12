import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useState } from 'react';
const images = [
	{
		src: 'images/konstancin-1.png',
	},
	{
		src: 'images/konstancin-2.png',
	},
	{
		src: 'images/konstancin-3.png',
	},
];

export default function Galery() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<h2>galery</h2>
			<button type='button' onClick={() => setOpen(true)}>
				Open Lightbox
			</button>

			<Lightbox open={open} close={() => setOpen(false)} slides={images} />
		</>
	);
}
