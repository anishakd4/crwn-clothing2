import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_WWyV25rt5sibfrrz5KOaAhTV00OgQl0lB8';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful')
    };

    return(
        <StripeCheckout 
            label='pay now' 
            name='Anish CLothing' 
            image='https://sendeyo.com/up/d/f3eb2117da' 
            description={`your total is $${price}`}
            amount={priceForStripe}
            panelLabel='PAYY NOWW'
            token={onToken}
            stripeKey={publishableKey} />
    );
}

export default StripeCheckoutButton;