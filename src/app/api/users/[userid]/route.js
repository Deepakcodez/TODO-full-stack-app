import { NextResponse } from "next/server";
import { connectDB } from "../../../../helper/db";
import { Users } from "@/models/user";

connectDB();


export  function GET(){
    return new NextResponse("get method")
}


export async function POST(request) {
    try {
        const { name, email, password } = request.body;

        if (!email || !password) {
            return new NextResponse.json({
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

        return new NextResponse.json({
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

        return new NextResponse.json({
            success: false,
            message: "User creation failed.",
        }, { status: 500 });
    }
}
