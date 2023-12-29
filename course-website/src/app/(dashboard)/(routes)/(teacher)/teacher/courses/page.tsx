import Link from "next/link"
import { Button } from "@/components/ui/button"
export default function coursespage() {
    return (
      <div className="p-6">
        <Link href ="/teacher/create">
            <Button>Create a Course</Button>
        </Link>
      </div>
    )
  }
  