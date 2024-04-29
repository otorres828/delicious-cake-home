import React, { useState } from 'react';
import NavBar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import {
	HeroContainer,
	HeroContent,
	HeroItems,
	HeroH1,
	HeroP,
	HeroBtn,
} from './HeroElements';

function Hero() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<HeroContainer>
			<NavBar toggle={toggle} />
			<HeroContent>
				<HeroItems>
					{/* <HeroH1>Delicious Cake</HeroH1> */}
					<HeroP>Enjoy life eat cake</HeroP>
					{/* <HeroBtn><a href='#menu' style={{ "display":"none" }}>Ver Menu</a></HeroBtn> */}
				</HeroItems>
			</HeroContent>
		</HeroContainer>
	);
}

export default Hero;
