"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./search-input";

import { Button } from "@/components/ui/button";


export const NavbarRoutes = () => {
    const { userId } = useAuth();
    const pathname = usePathname();
  
    const isTeacherPage = pathname?.startsWith("/teacher");
    const isCoursePage = pathname?.includes("/courses");
    const isSearchPage = pathname === "/search";
  
    return (
      <>
        {isSearchPage && (
          <div className="hidden md:block">
            <SearchInput/>
          </div>
        )}
        <div className="flex gap-x-2 ml-auto">
          {isTeacherPage || isCoursePage ? (
            <Link href="/">
              <Button size="sm" variant="ghost">
                <LogOut className="h-4 w-4 mr-2" />
                Exit
              </Button>
            </Link>
          ) :  (
            <Link href="/teacher/courses">
              <Button size="sm" variant="ghost" className="bg-purple-500 hover:bg-purple-500 text-white px-4 py-2 rounded">
                Teacher mode
              </Button>
            </Link>
          )}
          <UserButton
            afterSignOutUrl="/"
          />
        </div>
      </>
    )
  }