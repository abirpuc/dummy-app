import { NextResponse } from "next/server";
import { user } from "./data"

export async function GET(){
    const data = user;
    return NextResponse.json(data,{status: 200})
}