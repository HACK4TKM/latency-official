import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import getRazerPayDetails from '../apis/getRazerPayDetails';
import { BASE_URL } from '../constants/urls';
import Axios  from 'axios';
import SideGradient from '../Svgs/SideGradient';

function RegistrationPayment(props) {
    const [price,setPrice] = useState(2);
    const [loading,setLoading] = useState(true);
    const [razorPayUrl,setRazorPayUrl]=useState("");
    const [callBackUrl,setCallBackUrl] = useState("");
    const [razorPayId,setRazorPayId]=useState("");
    const [orderId,setOrderId]=useState("");


    useEffect(async()=>{
        const response =await getRazerPayDetails("+918075145852")

        setPrice(response.amount/100);
        setRazorPayId(response.RAZORPAY_KEY_ID);
        setCallBackUrl(response.call_back_url);
        setOrderId(response.id)
        setLoading(false);
    },[]);

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
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

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        // if (!res) {
        //     alert("Razorpay SDK failed to load. Are you online?");
        //     return;
        // }

        // const result = await Axios.post("http://localhost:5000/payment/orders");

        // if (!result) {
        //     alert("Server error. Are you online?");
        //     return;
        // }

        // const { amount, id: order_id, currency } = result.data;

        const options = {
            key: razorPayId, // Enter the Key ID generated from the Dashboard
            amount:price.toString(),
            currency: "INR",
            name: "IEDC",
            description: "Test Transaction",
            image: "",
            // image: { logo },
            order_id: orderId,
            handler: async function (response) {
                const data = {
                    order_id: response.razorpay_order_id,
                    payment_id: response.razorpay_payment_id,
                    // razorpayOrderId: response.razorpay_order_id,
                    signature: response.razorpay_signature,
                };

                const result = await Axios.post(`${BASE_URL}/register/confirm/`, data);

                alert(result.data.msg);

            },
            prefill: {
                name: "Soumya Dey",
                email: "SoumyaDey@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Soumya Dey Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return (
        <>
        <SideGradient />
        
        <div className="absolute top-0 w-full h-screen justify-center flex items-center">
            <form onSubmit={displayRazorpay()} className="w-3/4 lg:w-1/4 bg-purpleC py-10 rounded-xl top-20">
                <div className="flex flex-col h-full items-center justify-start">
                    <h4 className="text-xl font-semibold text-white">Payment</h4>
                    <div className=" p-5 px-10 justify-center">
                        <label className="text-grayC">Summary</label>
                        <div className="flex mt-1 text-white items-center p-1 border-2 rounded-sm  border-grayC">
                            {/* <p>+91</p> */}
                            {/* <input className="bg-transparent focus:outline-none w-full" type="number" max={10} /> */}
                        </div>
                    </div>

                    {!loading?
                        <div className="flex flex-col items-center p-5 px-10 flex  justify-center">
                            <div className="flex mb-5">
                                <label className="text-white">Price:</label>
                                <label className="text-white ml-1">Rs {price}</label>
                            </div>
                            <button onClick={()=>displayRazorpay()}  className="border-blue-900 border-2 px-3 py-1 rounded-3xl px-10">
                            <p className="text-white text-sm">Pay</p>
                        </button>

                        </div>
                        :
                        <p className="text-white">Loading...</p>
                    }

                </div>

            </form>
            
        </div>
        </>
    );
}

export default RegistrationPayment;