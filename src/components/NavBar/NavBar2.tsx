import Link from "next/link"
import {NavBarBtn} from "./NavBarBtn"
import { useMeQuery } from "@/gql/graphql"
import { isServer } from "@/lib/utils"
import HomeIcon from "@/svgs/HomeIcon"


export default function Navbar() {
    const {data} = useMeQuery({skip: isServer()})

    return <div className="flex place-items-center gap-2 justify-between p-2 px-6" >
        <div>
        <Link href="/">
        <NavBarBtn onClick={() => console.log('nice click bro')}>
            <HomeIcon h="24px"/>
        </NavBarBtn>
        </Link>
        </div>
        <div className="flex place-items-center gap-2 justify-between">
        <Link href="/spells">
        <NavBarBtn onClick={() => console.log('nice click bro')} text="All spells" />
        </Link>
         <Link href="/spells/priest">
        <NavBarBtn onClick={() => console.log('nice click bro')} text="Cleric spells" />
        </Link>
        <Link href="/spells/wizard">
        <NavBarBtn onClick={() => console.log('nice click bro')} text="Wizard spells" />
        </Link>
        <Link href="/characters">
        <NavBarBtn onClick={() => console.log('nice click bro')} text="Manage characters" />
        </Link>
        </div>
        <div className="flex place-items-center justify-center">
        {data?.me?.id ? <div>Logged in as {data.me.username}</div> : 
        <>
        <Link href="/user/login">
        <NavBarBtn onClick={() => console.log('nice click bro')} text="Log in" />
        </Link>
        <Link href="/user/register">
        <NavBarBtn onClick={() => console.log('nice click bro')} text="Sign up" />
        </Link>
        </>
        }
        </div>
    </div>
}