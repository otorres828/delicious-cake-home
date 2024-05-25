import React, { useState } from 'react';
import NavBar from '../Navbar/Navbar';
import {
	HeroContainer,
	HeroContent,
	HeroItems,
	HeroP,
	ImageBackground,
	VideoBackground,
} from './HeroElements';
import ImgBg from '../../images/tarta_frutos_rojos.MP4'; // Asegúrate de que esta ruta sea correcta
import Tienda1 from '../../images/tienda_1.jpg'; // Asegúrate de que esta ruta sea correcta

function Hero() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};


	return (
		<HeroContainer>
			{window.innerWidth > 820 ?

				<ImageBackground src={Tienda1} type="image" />

				:

				<VideoBackground autoPlay loop muted playsInLine src={ImgBg} type="video/mp4" />
			}
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
