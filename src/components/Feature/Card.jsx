import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import { ProductsImg } from '../Products/ProductsElements';

function Card({ product }) {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            autoplay
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
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
