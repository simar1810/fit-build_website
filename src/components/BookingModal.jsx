'use client'
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const BookingModal = ({ isOpen, onClose }) => {
    const router = useRouter();
    const [scriptLoaded, setScriptLoaded] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [step, setStep] = React.useState('info');
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: ''
    });

    // Razorpay script loader
    React.useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        script.onload = () => setScriptLoaded(true);
        script.onerror = () => {
            console.error("Failed to load Razorpay script");
            alert("Failed to load payment gateway. Please refresh and try again.");
        };
        document.body.appendChild(script);

        return () => {
            const existingScript = document.querySelector(
                'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
            );
            if (existingScript) {
                document.body.removeChild(existingScript);
            }
        };
    }, []);

    React.useEffect(() => {
        if (isOpen) setStep('info');
    }, [isOpen]);

    const handleClose = () => {
        setStep('info');
        onClose();
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        if (!formData.name.trim()) {
            alert("Please enter your name");
            return false;
        }
        if (!formData.email && !formData.phone) {
            alert("Please provide either email or phone number");
            return false;
        }
        if (formData.phone && formData.phone.length !== 10) {
            alert("Phone number must be exactly 10 digits");
            return false;
        }
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            alert("Please enter a valid email address");
            return false;
        }
        return true;
    };

    const createOrder = async () => {
        try {
            const res = await fetch(
                '/api/create-order',
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        amount: 1999,
                        // note: { client: "Fit & Build" },
                        // type: "Consultation",
                    }),
                }
            );
            if (!res.ok) {
                const errorText = await res.text();
                throw new Error(`Failed to create order: ${res.status} - ${errorText}`);
            }
            const orderData = await res.json();
            return orderData;
        } catch (error) {
            console.error("Error creating order:", error);
            throw error;
        }
    };

    const verifyPayment = async (paymentData) => {
        try {
            if (!paymentData.razorpay_payment_id) {
                throw new Error("Missing payment ID");
            }

            const verificationPayload = {
                razorpay_order_id: paymentData.razorpay_order_id,
                razorpay_payment_id: paymentData.razorpay_payment_id,
                razorpay_signature: paymentData.razorpay_signature,
            };

            const verifyRes = await fetch('/api/verify-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(verificationPayload)
            });

            const data = await verifyRes.json();

            if (data.success) {

                setFormData({ name: "", email: "", phone: "" });
                setStep('info');
                onClose();
                router.push("/book?paid=true#calendar-section");
            } else {
                alert("Payment verification failed: " + data.message);
            }

        } catch (error) {
            console.error("Payment verification error:", error);
            alert(" Payment verification failed. Please contact support.");
        }
    };

    const openRazorpay = async (e) => {
        e.preventDefault();

        if (!scriptLoaded) {
            alert("Payment gateway is still loading. Please wait a moment and try again.");
            return;
        }
        if (!validateForm()) {
            return;
        }
        const keyId = process.env.NEXT_PUBLIC_RAZORPAY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
        if (!keyId) {
            alert("Payment configuration error. Please contact support.");
            return;
        }

        setLoading(true);
        try {
            const order = await createOrder();
            if (!order.id) {
                throw new Error("Failed to create valid order");
            }

            const options = {
                key: keyId,
                amount: order.amount,
                currency: order.currency || "INR",
                name: "Fit & Build",
                description: "Strategy & Clarity Call",
                image: "/logo-app.png",
                order_id: order.id,
                handler: async function (response) {
                    if (!response.razorpay_payment_id) {
                        alert("Payment verification failed: No payment ID received. Please try again.");
                        setLoading(false);
                        return;
                    }
                    const paymentData = {
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_order_id: response.razorpay_order_id || order.id,
                        razorpay_signature: response.razorpay_signature || null,
                    };
                    try {
                        await verifyPayment(paymentData);
                    } catch (error) {
                        alert("Payment verification failed. Please contact support with payment ID: " + response.razorpay_payment_id);
                    } finally {
                        setLoading(false);
                    }
                },
                prefill: {
                    name: formData.name,
                    email: formData.email,
                    contact: formData.phone,
                },
                notes: {
                    type: "Strategy & Clarity Call",
                    validity: "single consultation",
                },
                theme: {
                    color: "#C82909",
                },
                modal: {
                    ondismiss: function () {
                        setLoading(false);
                    },
                },
            };

            const rzp = new window.Razorpay(options);
            rzp.on("payment.failed", function (response) {
                alert(`Payment failed: ${response.error.description || "Unknown error"}`);
                setLoading(false);
            });
            rzp.open();
        } catch (error) {
            console.error(error);
            alert("Failed to initiate payment. Please try again. " + error.message);
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">

            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={handleClose}
            ></div>

            <div className="relative bg-[#1a1a19] rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8 animate-fadeIn border border-[#3D3838] max-h-[90vh] overflow-y-auto">
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
                >
                    <FaTimes size={20} />
                </button>

                {step === 'info' ? (
                    <>
                        <h2 className="text-xl sm:text-2xl font-bold text-center text-[#8b1a1a] mb-4 pr-6 leading-tight">
                            Build with Jehangir Strategy & Clarity Call — ₹1,999
                        </h2>
                        <div className="space-y-4 text-sm sm:text-base text-gray-300 font-medium leading-relaxed mb-8">
                            <p>
                                A focused 1-on-1 video session to assess your current situation, goals, identify what’s holding you back, and define the right path forward.
                            </p>
                            <p>
                                The ₹1,999 fee ensures the call is reserved for individuals who are serious about making a meaningful transformation.
                            </p>
                            <p>
                                The ₹1,999 fee is fully adjusted against your coaching investment if you decide to work with me.
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setStep('details')}
                            className="w-full bg-[#8b1a1a] text-white font-bold py-3 rounded-lg shadow-lg hover:bg-[#a02006] transform hover:-translate-y-0.5 transition duration-200"
                        >
                            Continue to Book
                        </button>
                    </>
                ) : (
                    <>
                        <h2 className="text-2xl font-bold text-center text-[#f4f2f2] mb-2">
                            Strategy & <span className='text-[#8b1a1a]'>Clarity Call</span>
                        </h2>
                        <p className="text-center text-gray-400 mb-8 text-sm">
                            ₹1,999 · Fill in your details to proceed
                        </p>

                        <form className="space-y-4" onSubmit={openRazorpay}>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    className="w-full px-4 py-3 bg-[#2B2929] border border-[#3D3838] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C82909]/50 placeholder-gray-500 text-white transition-all"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="w-full px-4 py-3 bg-[#2B2929] border border-[#3D3838] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C82909]/50 placeholder-gray-500 text-white transition-all"
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    maxLength={10}
                                    className="w-full px-4 py-3 bg-[#2B2929] border border-[#3D3838] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C82909]/50 placeholder-gray-500 text-white transition-all"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#8b1a1a] text-white font-bold py-3 rounded-lg shadow-lg hover:bg-[#a02006] transform hover:-translate-y-0.5 transition duration-200 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Processing...' : 'Pay ₹1,999 & Book'}
                            </button>
                            <button
                                type="button"
                                onClick={() => setStep('info')}
                                className="w-full text-gray-400 text-sm hover:text-white transition"
                            >
                                Back
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default BookingModal;
