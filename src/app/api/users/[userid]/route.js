import { NextResponse } from "next/server";
import { connectDB } from "../../../../helper/db";
import { Users } from "@/models/user";

connectDB();

export async function GET(request, { params }) {
  const { userid } = params;
  console.log(">>>>>>>>>>>", userid);
  if (!userid) {
    return NextResponse.json(
      {
        success: false,
        message: "User ID not provided.",
      },
      { status: 400 }
    );
  }

  try {
    const user = await Users.findById(userid);

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "User found.",
        data: user,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal error.",
      },
      { status: 500 }
    );
  }
}
export async function PUT(request, { params }) {
    const { userid } = params;
    const { name, password } = await request.json();


    if (!userid) {
        return NextResponse.json(
            {
                success: false,
                message: "User ID not provided.",
            },
            { status: 400 }
        );
    }

    try {
        const user = await Users.findById(userid);

        if (!user) {
            return NextResponse.json(
                {
                    success: false,
                    message: "User not found.",
                },
                { status: 404 }
            );
        }

        if (!name || !password) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Name or password is missing.",
                },
                { status: 400 }
            );
        }

        user.name = name;
        user.password = password;

        const updatedUser = await user.save();

        return NextResponse.json(
            {
                success: true,
                message: "User details updated.",
                data: updatedUser,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Internal error.",
            },
            { status: 500 }
        );
    }
}
