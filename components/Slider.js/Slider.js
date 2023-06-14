import style from '@/styles/Slider.module.css';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Slider({ images, transitionTime }) {
	const sliderWrapperRef = useRef();
	const sliderRef = useRef();
	const isClicked = useRef(false);
	const currentElementPosition = useRef(0);
	const transition = useRef(0);
	const isMouseMoveLeft = useRef(true);

	useEffect(() => {
		const wrapper = sliderWrapperRef.current;
		const imageWidth = sliderRef.current.clientWidth;

		const handleMouseDown = (e) => {
			e.preventDefault();

			isClicked.current = true;
			currentElementPosition.current =
				e.clientX - wrapper.offsetLeft - transition.current;
		};

		const handleMouseUp = (e) => {
			e.preventDefault();
			isClicked.current = false;

			const difference = Math.abs(transition.current / imageWidth);
			const factor = parseInt(difference) + 1;
			const isMoveRigthFactor = isMouseMoveLeft.current ? 0 : -imageWidth;
			const isLeftEndFactor =
				imageWidth * factor > sliderWrapperRef.current.clientWidth - imageWidth
					? -imageWidth
					: 0;
			const newTransitionValue =
				imageWidth * factor + isMoveRigthFactor + isLeftEndFactor;

			wrapper.style.transition = `${transitionTime}s`;
			wrapper.style.transform = `translateX(-${newTransitionValue}px)`;
			transition.current = -newTransitionValue;

			setTimeout(() => {
				wrapper.style.transition = '0s';
			}, transitionTime * 1000);
		};

		const handleMouseMove = (e) => {
			e.preventDefault();
			if (!isClicked.current) return;

			isMouseMoveLeft.current = e.movementX > 0 ? false : true;
			let cursorPosition = e.clientX - wrapper.offsetLeft;
			wrapper.style.transform = `translateX(${
				cursorPosition - currentElementPosition.current
			}px)`;
			transition.current = cursorPosition - currentElementPosition.current;
		};

		wrapper.addEventListener('mousedown', handleMouseDown);
		window.addEventListener('mouseup', handleMouseUp);
		wrapper.addEventListener('mousemove', handleMouseMove);

		const cleanup = () => {
			wrapper.removeEventListener('mousedown', handleMouseDown);
			window.removeEventListener('mouseup', handleMouseUp);
			wrapper.removeEventListener('mousemove', handleMouseMove);
		};
	}, [transitionTime]);

	return (
		<div className={style.slider} ref={sliderRef}>
			<div className={style.slider__wrapper} ref={sliderWrapperRef}>
				{images.map((img) => (
					<div key={img.src.src} className={style.slider__item}>
						<Image
							src={img.src}
							alt='zd'
							height={'auto'}
							width={'auto'}
							className={style.slider__img}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
