import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay=new Razorpay({
    key_id:process.env.RAZORPAY_KEY_ID!,
    key_secret:process.env.RAZORPAY_KEY_SECRET!
})

export async function POST(req:NextRequest){
    const order=await razorpay.orders.create({
        amount:19900,
        currency:"INR",
        receipt:"order_receipt",
        notes:{
            "order_id":"1234567890"
        }
    })

    return NextResponse.json(order);
}