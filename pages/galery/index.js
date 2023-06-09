import img1 from '@/public/images/konstancin-1.png';
import img2 from '@/public/images/konstancin-2.png';
import img3 from '@/public/images/konstancin-3.png';
import Image from 'next/image';

import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
// import './styles.css';

const AdaptiveHeight = (slider) => {
	function updateHeight() {
		slider.container.style.height =
			slider.slides[slider.track.details.rel].offsetHeight + 'px';
	}
	slider.on('created', updateHeight);
	slider.on('slideChanged', updateHeight);
};

export default function Galery() {
	const [currentSlide, setCurrentSlide] = React.useState(0);
	const [loaded, setLoaded] = useState(false);
	const [sliderRef, instanceRef] = useKeenSlider(
		{
			initial: 0,
			slideChanged(s) {
				setCurrentSlide(s.track.details.rel);
			},
			created() {
				setLoaded(true);
			},
		},
		[AdaptiveHeight],
	);

	return (
		<div className='galery'>
			<div className='navigation-wrapper'>
				<div ref={sliderRef} className='keen-slider'>
					<Image
						className='keen-slider__slide number-slide1'
						src={img1}
						alt={img1}
					/>
					<Image
						className='keen-slider__slide number-slide1'
						src={img2}
						alt={img2}
					/>
					<Image
						className='keen-slider__slide number-slide1'
						src={img3}
						alt={img3}
					/>
				</div>
				{loaded && instanceRef.current && (
					<>
						<Arrow
							left
							onClick={(e) =>
								e.stopPropagation() || instanceRef.current?.prev()
							}
							disabled={currentSlide === 0}
						/>

						<Arrow
							onClick={(e) =>
								e.stopPropagation() || instanceRef.current?.next()
							}
							disabled={
								currentSlide ===
								instanceRef.current.track.details.slides.length - 1
							}
						/>
					</>
				)}
			</div>
			{loaded && instanceRef.current && (
				<div className='dots'>
					{[
						...Array(instanceRef.current.track.details.slides.length).keys(),
					].map((idx) => {
						return (
							<button
								key={idx}
								onClick={() => {
									instanceRef.current?.moveToIdx(idx);
								}}
								className={
									'dot' + (currentSlide === idx ? ' active' : '')
								}></button>
						);
					})}
				</div>
			)}
		</div>
	);
}

function Arrow(props) {
	const disabeld = props.disabled ? ' arrow--disabled' : '';
	return (
		<svg
			onClick={props.onClick}
			className={`arrow ${
				props.left ? 'arrow--left' : 'arrow--right'
			} ${disabeld}`}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'>
			{props.left && (
				<path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
			)}
			{!props.left && (
				<path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
			)}
		</svg>
	);
}
