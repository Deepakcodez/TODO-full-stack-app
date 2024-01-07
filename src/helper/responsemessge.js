import { NextResponse } from "next/server"

export  const responseMessage =(succesCode,message,data,statusCode)=>{
    return NextResponse.json({
        success:succesCode,
        message : message,
        data : data,

    },{
        status:statusCode
    })
}