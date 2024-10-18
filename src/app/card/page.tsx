import { getLocalData } from "../../lib/getData"
import SpellCard from "@/components/SpellCard"

export default async function Page() {
    const jsonData = await getLocalData()
    const objectData = JSON.parse(jsonData)

    const stuff = SpellCard()
    return stuff

    
}