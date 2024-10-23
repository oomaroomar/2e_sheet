"use client"
import {useHelloQuery} from '@/gql/graphql'


export default function Page() {

    useHelloQuery()

    return <div>
        hello world
    </div>
    
}