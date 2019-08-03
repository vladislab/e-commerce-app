import React from "react";
import StripeCheckout from "react-stripe-checkout";

export default function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_Sgrk5IicSfQMeLevrQENh1K9006iDDpF23";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay With Stripe"
      name="E-Commerce React."
      billingAddress
      shippingAddress
      image="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}
