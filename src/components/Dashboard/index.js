import React from 'react'
import Link from 'next/link'
import { HiTemplate } from 'react-icons/hi'
import { CgUserList } from 'react-icons/cg'
import { GiMailbox } from 'react-icons/gi'

export default function Dashboard() {
    return (
        <div className="mx-auto flex flex-col md:flex-row md:flex-wrap gap-10 w-full md:w-fit px-4">
            <Link className="icon-btn" href="/templates">
                <HiTemplate />
                <div>Templates</div>
            </Link>
            <Link className="icon-btn" href="/lists">
                <CgUserList />
                <div>Mailing Lists</div>
            </Link>
            <Link className="icon-btn" href="/recipients">
                <GiMailbox />
                <div>Recipients</div>
            </Link>
        </div>
    )
}