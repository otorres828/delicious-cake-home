import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ProductsImg } from '../Products/ProductsElements';

function Card({ product }) {
    return (
        <Swiper
            spaceBetween={100}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {product.img.map((imageUrl, index) => {
                return (
                    <SwiperSlide ><ProductsImg src={imageUrl} alt={product.alt} /></SwiperSlide>
                );
            })}
        </Swiper>
    );
}

export default Card;
