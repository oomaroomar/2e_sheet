import { CharacterContext, CharacterContextType } from "@/context/CharacterContext";
import { useLogoutMutation, useMeQuery } from "@/gql/graphql";
import { apolloClient } from "@/lib/apolloClient";
import { isServer } from "@/lib/utils";
import Link from "next/link";
import { useContext } from "react";

export default function Me() {

    const {data, loading} = useMeQuery({skip: isServer()})
    const [logout, {loading: logoutFetching}] = useLogoutMutation()
    const {setCharId} = useContext(CharacterContext) as CharacterContextType

    if(!loading && data?.me) {
        return <div>
            <span>
            Hello, {data.me.username}!
            </span>
            <button onClick={async () => {
                await logout()
                await apolloClient.resetStore()
                setCharId(null)
            }} disabled={logoutFetching} className="w-64 text-5xl h-64 border border-slate-200 bg-slate-100 rounded-3xl">
                Log out
            </button>
            </div>
    }

    return <div className="flex-1 flex gap-10 flex-wrap place-content-center ">
    <Link href="/user/login" ><button className="w-64 text-5xl h-64 border border-slate-200 bg-slate-100 rounded-3xl">Log in</button></Link>
    <Link href="/user/register" ><button className="w-64 text-5xl h-64 border border-slate-200 bg-slate-100 rounded-3xl">Sign up</button></Link>
  </div>
}