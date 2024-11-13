import Link from "next/link"
import NavBarBtn from "./NavBarBtn"
import { useMeQuery } from "@/gql/graphql"
import { isServer } from "@/lib/utils"


export default function Navbar() {
    const {data} = useMeQuery({skip: isServer()})

    return <div className="hidden z-40 w-full py-2 lg:grid grid-cols-2" >
        <div className="flex place-items-center gap-2 justify-center" >
        <Link href="/">
        <NavBarBtn onClick={() => console.log('nice click bro')} text="Home" />
        </Link>
        <Link href="/spells/wizard">
        <NavBarBtn onClick={() => console.log('nice click bro')} text="Wizard spells" />
        </Link>
        <Link href="/spells/priest">
        <NavBarBtn onClick={() => console.log('nice click bro')} text="Cleric spells" />
        </Link>
        <Link href="/spells">
        <NavBarBtn onClick={() => console.log('nice click bro')} text="All spells" />
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