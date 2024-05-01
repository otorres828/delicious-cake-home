import React from 'react';
import {
	ProductsContainer,
	ProductsHeading,
	ProductsWrapper,
	ProductsCard,
	ProductsImg,
	ProductsInfo,
	ProductsTitle,
	ArrowRight,
	ArrowLeft,

} from './ProductsElements';

function Products({ heading, data }) {
	return (
		<ProductsContainer id="menu">
			<ProductsHeading>{heading}</ProductsHeading>
			<ArrowLeft>&#10094;</ArrowLeft> {/* Flecha izquierda */}
			<ProductsWrapper>
				{data.map((product, index) => {
					return (
						<ProductsCard key={index}>
							<ProductsImg src={product.img} alt={product.alt} />
							<ProductsInfo>
								<ProductsTitle className='w-full'>{product.name}</ProductsTitle>
							</ProductsInfo>
						</ProductsCard>
					);
				})}
			</ProductsWrapper>
			<ArrowRight>&#10095;</ArrowRight> {/* Flecha derecha */}
		</ProductsContainer>
	);
}

export default Products;
