import React from 'react';
import {
	ProductsContainer,
	ProductsHeading,
	ProductsWrapper,
	ProductsCard,
	ProductsImg,
	ProductsInfo,
	ProductsTitle,

} from './ProductsElements';

function Products({ heading, data }) {
	return (
		<ProductsContainer id="menu">
			<ProductsHeading>{heading}</ProductsHeading>
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
		</ProductsContainer>
	);
}

export default Products;
