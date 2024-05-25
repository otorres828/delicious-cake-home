import styled from 'styled-components';

export const ArrowLeft = styled.div`
//   position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
`;

export const ArrowRight = styled.div`
//   position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
`;


export const ProductsContainer = styled.div`
	/* width: 100vw; */
	// min-height: 100vh;
	padding: 1rem 0rem;
	// background: #D6ECEC;
	// color: #fff;
`;

export const ProductsWrapper = styled.div`
 display: flex;
 margin:  0 auto;
//  padding: 1px 3rem 0 3rem;

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
//    -ms-overflow-style: none; /* IE y Edge */
//    scrollbar-width: none; /* Firefox */
//    &::-webkit-scrollbar {
//      display: none; /* Chrome, Edge, Safari */
// 	 color:black;
//    }

::-webkit-scrollbar {
	width: 12px; /* Ancho de la barra de desplazamiento */
  }

  ::-webkit-scrollbar-track {
	background: transparent; /* Color de fondo de la barra de desplazamiento */
  }

  ::-webkit-scrollbar-thumb {
	background-color: darkgrey; /* Color de la barra de desplazamiento */
	border-radius: 20px; /* Redondeo de los bordes de la barra de desplazamiento */
	&:hover {
	  background-color: grey; /* Cambia el color al pasar el mouse */
	}
  }
 }
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
	margin-bottom: 2.5rem;
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
	padding: 1rem;
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
+	background: #e31837;
	color: #fff;
	transition: 0.2s ease-out;

	&:hover {
		background: #ffc500;
		transition: 0.2s ease-out;
		cursor: pointer;
		color: #000;
	}
`;
