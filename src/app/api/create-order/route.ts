import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req: NextRequest) {
    const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID!,
        key_secret: process.env.RAZORPAY_KEY_SECRET!
    })

    const order = await razorpay.orders.create({
        amount: 19900,
        currency: "INR",
        receipt: "order_receipt",
        notes: {
            "order_id": Math.random().toString(36).substring(2, 9)
        }
    })

    return NextResponse.json(order);
}