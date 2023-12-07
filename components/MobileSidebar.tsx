"use client"

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SideBar from "@/components/SideBar";
import { useState, useEffect } from "react";

interface MobileSidebarProps {
    apiLimitCount: number
    isPro: boolean
}

const MobileSidebar = ({ apiLimitCount, isPro = false }: MobileSidebarProps) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <>
            <Sheet>
                <SheetTrigger>
                    <div className="md:hidden">
                        <Menu />
                    </div>
                </SheetTrigger>
                <SheetContent side="left" className="p-0">
                    <SideBar apiLimitCount={apiLimitCount} isPro={isPro} />
                </SheetContent>
            </Sheet>
        </>

    )
}

export default MobileSidebar

