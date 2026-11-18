import { api } from "../../../services/api";
import { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import './styles.css'

import { toast } from 'react-toastify';
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../../hooks/CartContext";




export function CheckoutForm() {
  const { cartProducts, clearCart } = useCart();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const {
    state: { clientSecret, dpmCheckerLink },
  } = useLocation();



  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || isLoading) {
      console.error('Stripe ou Elements com falha, tente novamente');
      return;
    }

    setIsLoading(true);

    try {
      const { error: submitError } = await elements.submit();
      if (submitError) {
        setMessage(submitError.message);
        return;
      }


      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        clientSecret,
        redirect: "if_required",
      });


      // Successful payments redirect to the return_url. Display immediate errors.
      if (error) {
        setMessage(error.message);
        toast.error(error.message);
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        const products = cartProducts.map((product) => ({
          id: product.id,
          quantity: product.quantity,
          price: product.price,
        }));
        // Pagamento aprovado: registra o pedido na sua API
        const { status } = await api.post(
          '/orders',
          { products },
          { validateStatus: () => true },
        );

        if (status === 200 || status === 201) {
          setTimeout(() => {
            navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);
            
          }, 3000);
          
          clearCart();
          toast.success('Pedido Realizado com Sucesso');
        } else if (status === 400) {
          toast.error('Falha ao Realizar seu Pedido');
        } else {
          throw new Error();
        }
      } else {
        setMessage('Pagamento não concluído. Tente novamente.');
      }
    } catch (error) {
      navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);
    } finally {
      setIsLoading(false);
    }
  };

  const paymentElementOptions = {
    layout: "accordion"
  }

  return (
    <div className="Container">
      <form id="payment-form" onSubmit={handleSubmit}>

        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button disabled={isLoading || !stripe || !elements} id="submit" className="button">
          <span id="button-text">
            {isLoading ? <div className="spinner" id="spinner"></div> : "Pagar Agora"}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
}
