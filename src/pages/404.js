import React from 'react'
import Link from 'next/link'

export default function Page404() {
    return (
        <main className="h-screen bg-bg text-white text-xl flex flex-col gap-10 py-20 px-4">
            <h1 className="text-4xl font-bold text-center">Error 404</h1>
            <h2 className="text-center">The file or page you requested could not be found.</h2>
            <Link className="btn-primary" href="/">Home</Link>
        </main>
    )
}
