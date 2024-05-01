import React, { useState } from 'react';
import NavBar from '../Navbar/Navbar';
import {
	HeroContainer,
	HeroContent,
	HeroItems,
	HeroP,
	VideoBackground,
} from './HeroElements';
import ImgBg from '../../images/cake_frutos_rojos.mp4'; // Asegúrate de que esta ruta sea correcta

function Hero() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<HeroContainer>
			<VideoBackground autoPlay loop muted playsInLine src={ImgBg} type="video/mp4" />
			<NavBar toggle={toggle} />
			<HeroContent>
				<HeroItems>
					<HeroP>Enjoy life eat cake</HeroP>
				</HeroItems>
			</HeroContent>
		</HeroContainer>
	);
}

export default Hero;
