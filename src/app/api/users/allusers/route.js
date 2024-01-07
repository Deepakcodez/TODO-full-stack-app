import { NextResponse } from "next/server";
import { connectDB } from "../../../../helper/db";
import { Users } from "@/models/user";

connectDB();

export async function GET() {
    try {
        // Corrected: Use proper variable declaration for allUsers
        const allUsers = await Users.find();
        
        console.log('>>>>>>>>>>> all users', allUsers);
        
        return NextResponse.json({
            success: true,
            message: "all users data",
            data: allUsers
        }, {
            status: 200
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "internal error",
            error: error.message
        }, {
            status: 500
        });
    }
}
