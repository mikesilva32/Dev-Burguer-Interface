import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useCart } from '../../hooks/CartContext'
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { useNavigate } from 'react-router-dom';

import { Button } from '../Button';
import { Container } from './styles';


export function CartResume() {
    const [finalPrice, setFinalPrice] = useState(0);
    const [deliveryTax] = useState(500);

    const navigate = useNavigate();

    const { cartProducts, clearCart } = useCart();

    useEffect(() => {
        const sunAllItens = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc;
        }, 0);

        setFinalPrice(sunAllItens);
    }, [cartProducts]);

    const submitOrder = async () => {
        const products = cartProducts.map((product) => {
            return {
                id: product.id,
                quantity: product.quantity,
                price: product.price
            };
        });
        try {
            const { data } = await api.post('/create-payment-intent', { products });

            navigate('/checkout', {
                state: data,
            })

        } catch (err) {
            toast.error('Erro tente Novamente!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

        
    };

    return (
        <div>
            <Container>
                <div className='container-top'>
                    <h2 className='title'>Resumo do Pedido</h2>
                    <p className='itens'>Itens</p>
                    <p className='itens-price'>{formatPrice(finalPrice)}</p>
                    <p className='delivery-tax'>Taxa de entega</p>
                    <p className='deliver-tax-price'>{formatPrice(deliveryTax)}</p>

                </div>

                <div className='container-botton'>
                    <p className=''>Total</p>
                    <p className=''>{formatPrice(finalPrice + deliveryTax)}</p>
                </div>
            </Container>

            <Button onClick={submitOrder}>Finalizar Pedido</Button>
        </div>
    );
}
