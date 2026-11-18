import { Container, Banner, CategoryMenu, ProductsContainer, CategoryButton } from "./styles"; 
import {useState, useEffect} from 'react';
import { api } from '../../services/api';
import {formatPrice} from '../../utils/formatPrice';
import { CardProduct } from "../../components/CardProduct";
import { useNavigate ,useLocation } from "react-router-dom";




export function Menu() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    
    
    const navigate = useNavigate();

     const {search} = useLocation(); //categoria=1

     const queryParams = new URLSearchParams(search)
     
     

     const [activeCategory, setActiveCategory] = useState(() =>{
        const categoryId =  +queryParams.get('categoria');
       
        if(categoryId){
          return categoryId 
        }
        return 0
     });

     
     

     

     useEffect(()  => {
    
            async function LoadCategories() {
                const { data } = await api.get('/categories')
    
                const newCategories = [{ id: 0, name: 'Todas' }, ...data];

                setCategories(newCategories);
                
            }
             async function LoadProducts() {
                      const { data } = await api.get('/products')
                   
                      const newProducts = data
                      .map((product) =>({currencyValue: formatPrice(product.price),...product}));
          
                      setProducts(newProducts);
                     // console.log(newProducts);
                       //console.log(data);
                  }
          

                   LoadCategories();
                  LoadProducts();
              
           
        }, []);
       
        useEffect(() => { 
         if(activeCategory === 0){
            setFilteredProducts(products);
         }else{
            const newFilteredProducts = products.filter(
                product => product.category_id === activeCategory,
            );

            setFilteredProducts(newFilteredProducts);
         }
            
        }, [products ,activeCategory]);


    return (
        <Container>
            <Banner>
                
                <h1>
                    O MELHOR
                    <br/>
                    HAMBÚRGUER
                    <br/>
                    ESTÁ AQUI!
                    <br/>
                    <span>Esse cardápio está irresistível!.</span>
                    </h1>
                    
            </Banner>
            <CategoryMenu>
                
            {categories.map(category => (
                <CategoryButton 
                key={category.id} 
                $isActiveCategory={category.id === activeCategory}
                onClick={ ()=> {
                 navigate(
                    {
                     pathname: '/cardapio',
                     search: `?categoria=${category.id}`
                    },
                    {
                     replace : true , 
                    },
                   
                 );
                  setActiveCategory(category.id)

                  console.log(category.id);
                    }}
                
                >{category.name}</CategoryButton>
                
            ))}
            </CategoryMenu>
            
               <ProductsContainer> 
                {filteredProducts.map(product => (
                    <CardProduct product={product} key={product.id} />
                ) )}
               </ProductsContainer>
            
        </Container>
    );
};