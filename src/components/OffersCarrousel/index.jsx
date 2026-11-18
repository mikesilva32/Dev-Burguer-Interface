import { useEffect, useState } from 'react';
//import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import * as MultiCarouselModule from 'react-multi-carousel'; import 'react-multi-carousel/lib/styles.css';
import {Container, Title  } from './style';
import { CardProduct } from '../CardProduct';
import {formatPrice} from '../../utils/formatPrice';

const Carousel = MultiCarouselModule.default?.default || MultiCarouselModule.default || MultiCarouselModule.Carousel;
import { api } from '../../services/api'

export function OffersCarousel() {
    const [offers, setOffers] = useState([]);

    useEffect(() => {

        async function LoadProducts() {
            const { data } = await api.get('/products')
         
            const onlyOffers = data.filter(product => product.offer)
            .map((product) =>({currencyValue: formatPrice(product.price),...product}));

            setOffers(onlyOffers);
            //console.log(onlyOffers);
             //console.log(data);
        }

        LoadProducts();
    }, []);
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
            slidesToSlide: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1280, min: 690 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 690, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <Container>
            <Title>Ofertas do Dia</Title>

            <Carousel responsive={responsive}
            infinite={true}
            partialVisbile={false}
            itemClass='carousel-item'
            >
               {offers.map(product => (
                <CardProduct key={product.id} product={product} />
               ))}
              
            </Carousel>
        </Container>

    );
};