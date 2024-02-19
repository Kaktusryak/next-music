import connectMongoDB from "@/libs/mongodb";
import Report from "@/models/report";
import { NextResponse } from "next/server";


export async function POST(request){
    const {music_id,music_name,music_artists} = await request.json()
    await connectMongoDB();
    await Report.create({music_id,music_name,music_artists})
    
    return NextResponse.json({message:"Report created"},{status:201})
}