import Slider from '@/components/Slider.js/Slider';
import img1 from 'public/images/konstancin-1.png';
import img2 from 'public/images/konstancin-2.png';
import img3 from 'public/images/konstancin-3.png';

export default function Galery() {
	const images = [
		{ src: img1, alt: 'opis' },
		{ src: img2, alt: 'opis' },
		{ src: img3, alt: 'opis' },
	];
	const transitionTime = 0.2;

	return (
		<>
			<h2>Galery</h2>
			<Slider images={images} transitionTime={transitionTime} />
		</>
	);
}
