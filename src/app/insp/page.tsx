import { getLocalData } from "../../lib/getData"
import SpellInfo from '@/components/SpellInfo'

export default async function Page() {
    const jsonData = await getLocalData()
    const objectData = JSON.parse(jsonData)
    const stuff = SpellInfo()
    return stuff

    
}