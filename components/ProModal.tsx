"use client"

import axios from "axios"
import { useState } from "react"
import { MessageSquare, ImageIcon, VideoIcon, Music, Code, Check, Zap } from "lucide-react"
import { Dialog, DialogHeader, DialogContent, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { useProModal } from "@/hooks/useProModal"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"


const tools = [
    {
        label: "Conversation",
        icon: MessageSquare,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",

    },
    {
        label: "Music",
        icon: Music,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",

    },
    {
        label: "Image",
        icon: ImageIcon,
        color: "text-pink-700",
        bgColor: "bg-pink-700/10",

    },
    {
        label: "Video",
        icon: VideoIcon,
        color: "text-orange-700",
        bgColor: "bg-orange-700/10",

    },
    {
        label: "Code",
        icon: Code,
        color: "text-green-700",
        bgColor: "bg-green-700/10",

    },
]

export const ProModal = () => {
    const proModal = useProModal()
    const [loading, setLoading] = useState(false)

    const onSubscribe = async () => {
        try {
            setLoading(!loading)
            const response = await axios.get("/api/stripe")

            window.location.href = response.data.url
        } catch (error) {
            console.log(error, 'STRIPE CLIENT ERROR')
        } finally {
            setLoading(!loading)
        }
    }

    return (
        <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                        <div className="flex items-center gap-x-2 font-bold py-1">
                            Upgrade to GPT 4
                            <Badge className="uppercase text-sm py-1" variant="premium">
                                pro
                            </Badge>
                        </div>
                    </DialogTitle>
                    <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
                        {tools.map((tool) => (
                            <Card
                                key={tool.label}
                                className="p-3 border-black/5 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-x-4">
                                    <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                        <tool.icon className={cn("w-6 h-6", tool.color)} />
                                    </div>
                                    <div className="font-semibold text-sm">
                                        {tool.label}
                                    </div>
                                </div>
                                <Check className="text-primary w-5 h-5" />
                            </Card>
                        ))}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button
                        disabled={loading}
                        onClick={onSubscribe}
                        size="lg"
                        variant="premium"
                        className="w-full"
                    >
                        Upgrade
                        <Zap className="w-4 h-4 ml-2 fill-white" />
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}