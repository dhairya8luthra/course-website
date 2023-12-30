import {auth} from "@clerk/nextjs"
import { redirect } from "next/navigation"
import { db } from "@/lib/db"
import { Akaya_Kanadaka } from "next/font/google";

const ChapterIdPage =  async({params}:{params: {courseId: string; chapterId: string}}) => {
    const {userId} = auth();
    if(!userId) {
        return redirect("/")
    }

    const chapter = await db.chapter.findUnique({
        where: { 
        id: params.chapterId,
        courseId:params.courseId },
    
    include: {
        muxData:true,
    },
    });
    if(!chapter){
       return redirect("/")
    }
    const requiredFields = [
        chapter.title,
        chapter.description,
        chapter.videoUrl,
        
    ]
    return(
        <div>
            Chapter Id page
        </div>
    );

}

export default ChapterIdPage