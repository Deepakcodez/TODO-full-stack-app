import { NextResponse } from "next/server";
// import connectDB from '@helper/db'
import { connectDB } from "../../../../helper/db";
import { Users } from "@/models/user";



connectDB()

// export function GET(request) {

//     return new NextResponse({

//         message: "get response",
//     }
//     );
//   }


  export async function POST(request){

    const { name,email,password} = request.json;
    console.log('>>>>>>>>>>>', name)
    try {
        const user = new Users({
            name,
            email,
            password
        })
       const newUser =  await user.save()
        
    return new NextResponse({
         success : true,
        message: "user create",
        data : newUser
    },{status:200}
    );
        
    } catch (error) {
        console.log('>>>>>>>>>>>', error)
        return new NextResponse({
            success : false,
           message: "user creation failed",
       },{status:400}
       );
    }

   
    
  }