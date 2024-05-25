import styled from 'styled-components';
import ImgBg from '../../images/rebanada.jpg';


export const VideoBackground = styled.video`
  position: fixed;
  opacity: 1; 
  top: 0;
  left: 0;
  z-index: -1;
  min-height: 100%;
  min-width: 100%;

  background-position: center;
  background-size: center;
  filter: brightness(0.8) saturate(0.6); /* Ajusta la saturación y el brillo según sea necesario */
  @media screen and (max-width: 720px) {
    background-size: contain;
    height: 100vh;
  }
`;

export const ImageBackground = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  min-height: 100%;
  min-width: 100%;

  object-fit: cover; 

  opacity: 0.9; // Aumenta la opacidad a 0.8 (el valor puede variar dependiendo de tu preferencia)

  filter: brightness(1) saturate(1); // Ajusta la saturación a 1.5 veces más alta que el original

  @media screen and (max-width: 720px) {
    width: 100%; 
    height: auto; 
  }
`;


export const HeroContainer = styled.div`
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
		// url(${ImgBg});
	height: 100vh;
	background-position: center;
	background-size: center;
	@media screen and (max-width: 1024px) {
		background-size: contain;
	}
`;

export const HeroContent = styled.div`
	height: calc(100vh-80px);
	max-height: 100%;
	padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	height: 100vh;
	max-height: 100%;
	padding: 0 2rem;
	width: 650px;
	color: #fff;
	text-transform: uppercase;
	line-height: 1;
	font-weight: bold;

	@media screen and (max-width: 650px) {
		width: 100%;
	}
`;

export const HeroH1 = styled.h1`
	font-size: clamp(0.2rem, 10vw, 5rem);
	margin-bottom: 1rem;
	// box-shadow: 3px 5px #e9ba23;
	letter-spacing: 3px;
`;

export const HeroP = styled.p`
	font-size: clamp(2rem, 2.5vw, 3rem);
	margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
	font-size: 1.4rem;
	padding: 1rem 4rem;
	border: none;
	background: #e31837;
	color: #fff;
	transition: 0.2s ease-out;

	&:hover {
		background: #ffc500;
		transition: 0.2s ease-out;
		cursor: pointer;
		color: #000;
	}
`;
