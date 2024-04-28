import styled from 'styled-components';

export const ProductsContainer = styled.div`
	/* width: 100vw; */
	min-height: 100vh;
	padding: 5rem calc((100vw - 1300px) / 2);
	background: #D6ECEC;
	color: #fff;
`;

export const ProductsWrapper = styled.div`
 display: flex;
 margin: 0 auto;

 /* Estilos para pantallas mayores a md */
 @media (min-width: 769px) {
   flex-wrap: wrap;
   justify-content: center;
 }

 /* Estilos para pantallas md o menos */
 @media (max-width: 768px) {
   overflow-x: auto; /* Permite el desplazamiento horizontal */
   scroll-snap-type: x mandatory; /* Habilita el desplazamiento suave y el ajuste de los elementos */
   -webkit-overflow-scrolling: touch; /* Mejora la experiencia de desplazamiento en dispositivos táctiles */
   scroll-padding: 50px; /* Espacio adicional al desplazarse */
   scroll-padding-left: 0; /* Ajusta el espacio adicional al principio */
   scroll-padding-right: 0; /* Ajusta el espacio adicional al final */

   /* Ocultar la barra de desplazamiento */
   -ms-overflow-style: none; /* IE y Edge */
   scrollbar-width: none; /* Firefox */
   &::-webkit-scrollbar {
     display: none; /* Chrome, Edge, Safari */
   }
//  }
`;



export const ProductsCard = styled.div`
	margin: 0 2rem;
	line-height: 2;
	width: 300px;
`;

export const ProductsImg = styled.img`
	height: 450px;
	min-width: 300px;
	max-width: 100%;
	box-shadow: 8px 8px #fdc500;
`;

export const ProductsHeading = styled.h1`
	font-size: clamp(2rem, 2.5vw, 3rem);
	text-align: center;
	margin-bottom: 5rem;
	color:black;
`;

export const ProductsTitle = styled.h2`
	font-weight: 400;
	font-size: 1.5rem;
	color:black;
`;

export const ProductsInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	text-align: center;
`;

export const ProductsDesc = styled.p`
	margin-bottom: 1rem;
`;

export const ProductsPrice = styled.p`
	margin-bottom: 1rem;
	font-size: 2rem;
`;

export const ProductsButton = styled.button`
	font-size: 1rem;
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
