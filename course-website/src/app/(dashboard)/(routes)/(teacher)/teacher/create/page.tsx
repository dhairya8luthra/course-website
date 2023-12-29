"use client";
import * as z from "zod";
import axios from "axios";
import {zodResolver} from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
    Form ,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {Input} from "@/components/ui/input"
const schema = z.object({
    title: z.string().min(1,{
        message:"Title is required"
    })
    });
export default function Createpage() {
    const router = useRouter();
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues:{
            title:''
        }
    })
    const {isSubmitting,isValid} = form.formState;
    const OnSubmit = async(values: z.infer<typeof schema>) =>{
        console.log(values);
        try {
            const response = await axios.post("/api/course",values);
            

        }catch{
            console.log("Something went Wrong")
        }
    }
  return (
    <div className="max-w-5xl mx-auto flex md:items-center 
    md:justify-center h-full p-6">
        <div>
            <h1 className="text-2xl">
                Name your course
            </h1>
            <p className="text-sm text-slate-600">
                What would you like to name your course?
            </p>
            <Form {...form}>
          <form
            onSubmit={form.handleSubmit(OnSubmit)}
            className="space-y-8 mt-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-purple-700">
                    Course title
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 'Face Yoga Course'"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    What will you teach in this course?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Link href="/">
                <Button
                  type="button"
                  variant="ghost"
                >
                  Cancel
                </Button>
              </Link>
              <Button
                type="submit"
                disabled={!isValid || isSubmitting}
              >
                Continue
              </Button>
            </div>
          </form>
        </Form>
     
        </div>
    </div>
  )
}
