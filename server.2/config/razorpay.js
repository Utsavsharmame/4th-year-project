const Razorpay = require("razorpay");

// exports.instance = new Razorpay({
// 	key_id: process.env.RAZORPAY_KEY,
// 	key_secret: process.env.RAZORPAY_SECRET,
// });

const RAZORPAY_KEY = "rzp_test_gKq159LXhmBNm6"

const RAZORPAY_SECRET = "M50dl5ttpeGs66qlog6TUxof"

exports.instance = new Razorpay({
	key_id: RAZORPAY_KEY,
	key_secret: RAZORPAY_SECRET,
});
