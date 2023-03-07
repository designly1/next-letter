// @/components/Layout/AuthLayout.js

import React, { useEffect } from 'react'
import Head from 'next/head'
import MenuBar from './MenuBar'
import LoginScreen from '../Auth/LoginScreen'

import { useSession } from "next-auth/react"

export default function AuthLayout({ children, title }) {
    const { data: session } = useSession();

    let titleConcat = "nLetter";
    if (title) titleConcat += " | " + title;

    if (session) {
        return (
            <>
                <Head>
                    <title>{titleConcat}</title>
                </Head>
                <main className="h-screen bg-bg text-white/90">
                    <header className="mb-10">
                        <MenuBar />
                    </header>
                    <div className="flex flex-col">
                        {children}
                    </div>
                </main>
            </>
        )
    } else {
        return <LoginScreen />
    }
}
