import React from 'react'
import { BellIcon, HashtagIcon, BookmarkIcon, CollectionIcon, MailIcon, HomeIcon, UserIcon, DotsCircleHorizontalIcon, } from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'
import { signIn, signOut, useSession } from 'next-auth/react'

function Sidebar() {

    const { data: session } = useSession()

    return (
        <div className='flex flex-col col-span-2'>
            <img className='m-3 h-10 w-10' src='https://links.papareact.com/drq' />
            <SidebarRow Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={HashtagIcon} title="Explore" />
            <SidebarRow Icon={BellIcon} title="Notifications" />
            <SidebarRow Icon={MailIcon} title="Messages" />
            <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
            <SidebarRow Icon={CollectionIcon} title="Lists" />
            <SidebarRow onClick={session ? signOut : signIn} Icon={UserIcon} title={session? 'SIGN OUT': 'SIGN IN'} />
            <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
        </div>
    )
}

export default Sidebar