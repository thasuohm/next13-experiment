'use client'

import '~/styles/globals.css'
import {ReactNode, useState} from "react";

export default function Layout({children}: {
    children: ReactNode
}) {
    const [stateText] = useState('Client Layout')

    return (
        <>
            <span className="bg-green-200 p-2 rounded text-lg">{stateText}</span>
            {children}
        </>
    )
}
