"use client"
import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"


export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("dc32f478-4ece-41b9-a97e-b64fd590957e")
    }, [])

    return null
}