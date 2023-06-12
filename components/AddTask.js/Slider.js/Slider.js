import style from '@/styles/Slider.module.css';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import img1 from '@/public/images/konstancin-1.png';
import img2 from '@/public/images/konstancin-2.png';
import img3 from '@/public/images/konstancin-3.png';

export default function Slider() {
	const [position, setPosition] = useState(0);
	const imgRef = useRef();
	const isClicked = useRef(false);

	const photos = [
		{
			src: img1,
			alt: 'konstancin',
		},
		{
			src: img2,
			alt: 'konstancin 2',
		},
		{
			src: img3,
			alt: 'konstancin 3',
		},
	];

	const NrOfPhotos = photos.length;

	const handleDrag = (e) => {
		console.log('drag', e.clientX);
	};

	return (
		<div className={style.slider}>
			<div
				className={style.slider__photos}
				onDrag={(e) => handleDrag(e)}
				ref={imgRef}
				style={{
					width: `${NrOfPhotos}00%`,
					transform: `translateX(${position}px)`,
				}}>
				{photos.map((photo) => (
					<div key={photo.src.src} className={style.slider__photo}>
						<Image
							className={style.slider__image}
							src={photo.src}
							alt={photo.alt}
							height='auto'
							width='auto'
						/>
					</div>
				))}
			</div>
		</div>
	);
}
