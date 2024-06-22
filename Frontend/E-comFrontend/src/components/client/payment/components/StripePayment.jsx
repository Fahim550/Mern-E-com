import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { stateContext } from "../../../../App";
const CheckoutForm = ({ userInfo }) => {
  const [stateData, setStateData] = useContext(stateContext);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      // Show error to your customer
      setErrorMessage(submitError.message);
      return;
    }

    // Create the PaymentIntent and obtain clientSecret from your server endpoint
    // const res = await fetch("/create-intent", {
    //   method: "POST",
    // });

    // const { client_secret: clientSecret } = await res.json();
    const clientSecret =
      "sk_test_51OyzgCP8DhZtuvySpddp5Zl9pGW7aZ020ufXFfqJy79s3ihqIFbhUHNHaCbhHtEpOTtEnkHzrjrryOfdG7f7Swv900Wf5o1ixA";

    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      clientSecret,
      confirmParams: {
        return_url: "http://localhost:5173/payment",
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }

    const Products = JSON.parse(sessionStorage.getItem("cartProducts"));
    const OrderProducts = {
      email: sessionStorage.getItem("email"),
      products: Products,
      address: userInfo.address,
      orderId:
        "id" +
        Math.random()
          .toString(36)
          .substring(2, length + 2),
      payment: userInfo.totalPrice,
    };
    console.log("userInfo", userInfo);
    console.log("OrderProducts", OrderProducts);

    await postData(
      "https://mern-e-com-4gkd.onrender.com/orders",
      OrderProducts
    ).then((response) => {
      if (response.code == 200) {
        console.log("Response Data : ", OrderProducts);
        sessionStorage.setItem("email", OrderProducts.email);
        sessionStorage.removeItem("cartProducts");
        setStateData({ ...stateData, products: [] });
        navigate("/orders");
      } else {
        alert("You are not in db You must be valid user");
      }
    });
  };

  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        type="submit"
        disabled={!stripe || !elements}
        className="bg-green-500 text-white px-5 py-2 rounded-lg mt-2"
      >
        Pay
      </button>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};
const stripePromise = loadStripe(
  "pk_test_51OyzgCP8DhZtuvyShZ31EHbtGksFyhldX0G0GGU6Ah0rHSkcxxjVuOwEIfBCNSiqiSbxyEXr4IPfytYXUePLeOBi00JOU6EU8D"
);

export default function StripePayment({ money, userInfo }) {
  const options = {
    mode: "payment",
    amount: money ? Math.round(money) : 1,
    currency: "usd",
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm userInfo={userInfo} />
    </Elements>
  );
}

// ReactDOM.render(<App />, document.body);
