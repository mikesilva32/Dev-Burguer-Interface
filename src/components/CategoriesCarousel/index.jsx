import { useEffect, useState } from 'react';
//import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import * as MultiCarouselModule from 'react-multi-carousel'; import 'react-multi-carousel/lib/styles.css';
import { Container, Title, ContainerItens, CategoryButton } from './styles';
import { useNavigate } from 'react-router-dom';


const Carousel = MultiCarouselModule.default?.default || MultiCarouselModule.default || MultiCarouselModule.Carousel;
import { api } from '../../services/api'

export function CategoriesCarousel() {
    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        async function LoadCategories() {
            const { data } = await api.get('/categories')

            setCategories(data);
           // console.log(data);
        }

        LoadCategories();
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
            <Title>Categorias</Title>

            <Carousel responsive={responsive}
                infinite={true}
                partialVisbile={false}
                itemClass='carousel-item'
            >
                {categories.map(category => (
                    <ContainerItens key={category.id} $imageUrl={category.url} >
                        < CategoryButton

                            onClick={() =>
                                navigate(

                                    {
                                        pathname: '/cardapio',
                                        search: `?categoria=${category.id}`
                                    })
                            }

                        >{category.name}</CategoryButton>


                    </ContainerItens>))}

            </Carousel>
        </Container>

    );
};