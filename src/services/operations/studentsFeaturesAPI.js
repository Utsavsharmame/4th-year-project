import { studentEndpoints } from "../apis";
 import { apiConnector } from "../apiConnector";
 // import { toast } from " react-hot-toast";
 import rzpLogo from "../../assets/Logo/rzp_logo.png";
import {toast} from "react-hot-toast";
import {setPaymentLoading} from "../../reducer/slices/courseSlice";

import {resetCart} from "../../reducer/slices/cartSlice";



 const  {COURSE_PAYMENT_API, COURSE_VERIFY_API, SEND_PAYMENT_SUCCESS_EMAIL_API} = studentEndpoints;

 function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });

 }


export async function buyCourse(token, courses, userDetails, navigate, dispatch) {
  const toastId = toast.loading('Loading...');
  try{
    // load the script
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if(!res){
      toast.error('Razorpay SDK Failed  to load the script');
      return;

    }
    // initize the order
    const orderResponse = await apiConnector("POST", COURSE_PAYMENT_API, { courses },
       {
      Authorization: `Bearer ${token}`,
    });

    console.log("Full Order Response:", orderResponse);

    if (!orderResponse.data || !orderResponse.data.data) {
      console.error("Invalid API Response:", orderResponse);
      throw new Error("Invalid response from the payment API");
    }

    const paymentDetails = orderResponse.data.data;
    const { currency, amount, id } = paymentDetails;

    if (!currency || !amount || !id) {
      console.error("Missing Payment Details:", paymentDetails);
      throw new Error("Missing required payment details in the API response");
    }

    const options = {
      key: process.env.RAZORPAY_KEY,
      currency,
      amount: `${amount}`,
      order_id: id,
      name: "CodeCraft",
      description: "Thank you for buying the course",
      image: rzpLogo,
      prefill: {
        name: `${userDetails.firstName}`,
        email: userDetails.email,
      },
      handler: function (response) {
        sendPaymentSuccessEmail(response, amount, token);
        verifyPayment({ ...response, courses }, token, navigate, dispatch);
      },
    };

    // NOW OPEN THE RAZORPAY SDK
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    paymentObject.on("Payment failed", function(response){
        toast.error("oopsss- payment failed");
        console.log(response.error);
      });



  }
  catch(error){
    console.log("PAYMENT API ERROR...", error);

    toast.error('Could not make the payment');
  }

    toast.dismiss(toastId);
}

 async function sendPaymentSuccessEmail(response, amount, token) {
  try{
     await apiConnector("POST", SEND_PAYMENT_SUCCESS_EMAIL_API,
       {
        orderId: response.razorpay_order_id,
       paymentId: response.razorpay_payment_id,
       amount
       },{
          Authorization: `Bearer ${token}`,
       });


 }
 catch(error){
  console.log("PAYMENT SUCCESS EMAIL ERROR...", error);


 }
}

// verify the payment
async function verifyPayment(bodyData, token, navigate, dispatch) {
 const toastId = toast.loading('Verifying Payment...');

 dispatch(setPaymentLoading(true));
 try{
    const response = await apiConnector("POST", COURSE_VERIFY_API, bodyData, {
    Authorization: `Bearer ${token}`,
 })
 if(!response.data.success){
    throw new Error(response.data.message);
  }
  toast.success('Payment Successful , you are added to the courses ');
  navigate("/dashboard/enrolled-courses");
  dispatch(resetCart());


}

catch(error){
  console.log("VERIFY PAYMENT ERROR...", error);
  toast.error("Could not verify the payment");
}
toast.dismiss(toastId);
dispatch(setPaymentLoading(false));
}
