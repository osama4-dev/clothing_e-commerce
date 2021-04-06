import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51Id69BSHpxKmbFgo2nT3grwBgCm3Fjg9MEw10UapZcKtOD6yyUomaNtWx8c1L4StmaVAq3jnPe9wwZIgGtsEtapv007VkSWngD";

    const onToken = token =>{
        console.log(token)
        alert('Payment Successfull')
    }
  //for checking out StripeCheckout properties visit the github/react-stripe-checkout repository
  //token property handles submit
  return (
    <StripeCheckout
      label="Pay Now"
      name="E_Commerce_Clothing"
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total price is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton