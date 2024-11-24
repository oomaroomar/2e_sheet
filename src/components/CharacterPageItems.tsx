import BookIcon from "@/svgs/BookIcon"
import SmileyFace from "@/svgs/SmileyFace"

interface CharItemProps {
    text: string
    onClick: () => void
    selected: boolean
}
interface ItemProps {
    text: string
    onClick: () => void
    selected: boolean
}

export function CharacterItem({text, onClick, selected}: CharItemProps) {
return <li className={`items-center hover:cursor-pointer rounded-xl p-2 hover:shadow-sm hover:shadow-gray-400
  grid grid-cols-2 w-48 gap-2 border border-gray-200 ${selected ? 'text-pink-600' : 'shadow-pink-600'}`}>
    <div onClick={onClick} className="col-span-2 flex flex-col place-items-center justify-items-center">
        <SmileyFace h="100" />
        <span className="ms-3 text-2xl">{text}</span>
    </div>
</li>
}

export function BookItem({text, onClick, selected}: ItemProps) {
return <li className={`items-center hover:cursor-pointer rounded-xl p-2 hover:shadow-sm hover:shadow-gray-400
  grid grid-cols-2 w-48 gap-2 border border-gray-200 ${selected ? 'text-pink-600' : 'shadow-pink-600'}`} >
    <div onClick={onClick} className="col-span-2 flex flex-col place-items-center justify-items-center">
        <BookIcon h="100" />
        <span className="ms-3 text-3xl">{text}</span>
    </div>
</li>
}