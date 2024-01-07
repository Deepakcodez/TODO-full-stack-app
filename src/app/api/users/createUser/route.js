import { NextResponse } from "next/server";
import { connectDB } from "../../../../helper/db";
import { Users } from "@/models/user";
connectDB();


export async function POST(request) {
    try {
        const {name, email, password} = await request.json();


        if (!email || !password) {
            return  NextResponse.json({
                success: false,
                message: "Please provide both email and password.",
            }, { status: 400 });
        }

        const newUser = new Users({
            name,
            email,
            password
        });

        await newUser.save();

        // Log the response object to the console
        console.log('Response:', {
            success: true,
            message: "User created successfully.",
            data: newUser
        });

        return  NextResponse.json({
            success: true,
            message: "User created successfully.",
            data: newUser
        }, { status: 200 });
    } catch (error) {
        console.error('Error:', error);

        // Log the error object to the console
        console.error('Error response:', {
            success: false,
            message: "User creation failed.",
        });

        return  NextResponse.json({
            success: false,
            message: "User creation failed.",
        }, { status: 500 });
    }
}
