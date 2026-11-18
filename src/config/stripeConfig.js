import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    'pk_test_51TqiZJRo7M6dn7I1qSqbipadrI2SPqCns3y0FHaErHgbhthtyWKG2gbAIR1iIDpsCAigbOLCsNEJmI2SgbFdu0D800tGXnL6vh'

);

export default stripePromise;