import { NextResponse } from "next/server";
import { connectDB } from "../../../../../helper/db";
import { Users } from "@/models/user";
connectDB();

export async function POST(request, { params }) {
    const { userId } = params;
    console.log('>>>>>>>>>>>', userId);

    try {
        if (!userId) {
            return NextResponse.json({
                success: false,
                message: "Please provide userId",
            }, { status: 400 });
        }

        // Corrected: Use await when calling Users.findByIdAndDelete
        const deletedUser = await Users.findByIdAndDelete(userId);

        if (!deletedUser) {
            return NextResponse.json({
                success: false,
                message: "User not found.",
            }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            message: "User deleted successfully.",
            data: deletedUser
        }, { status: 200 });
    } catch (error) {
        console.error('Error:', error);

        return NextResponse.json({
            success: false,
            message: "User deletion failed.",
        }, { status: 500 });
    }
}
