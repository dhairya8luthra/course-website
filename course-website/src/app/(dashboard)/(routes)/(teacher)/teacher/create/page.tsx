"use client";
import * as z from "zod";
import axios from "axios";
import {zodResolver} from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
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
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues:{
            title:''
        }
    })
    const {isSubmitting,isValid} = form.formState;
    const OnSubmit =(values: z.infer<typeof schema>) =>{
        console.log(values);
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
                <form onSubmit={form.handleSubmit(OnSubmit)}
                className="space-y-8 mt-8">
                    <FormField
                    control={form.control}
                    name="title"
                    render={({field}) =>(
                        <FormItem>
                            <FormLabel>
                                Course Title
                            </FormLabel>
                            <FormControl>
                                <Input
                                disabled={isSubmitting}
                                placeholder="eg Face Yoga Course"
                                {...field}></Input>
                            </FormControl>
                        </FormItem>
                    )}></FormField>
                </form>
            </Form>
        </div>
    </div>
  )
}
