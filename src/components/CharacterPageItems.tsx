import BookIcon from "@/svgs/BookIcon"
import SmileyFace from "@/svgs/SmileyFace"

interface CharItemProps {
    text: string
    onClick: () => void
}
interface ItemProps {
    text: string
}

export function CharacterItem({text, onClick}: CharItemProps) {
return <li className="items-center rounded-xl p-2 hover:shadow-sm hover:shadow-gray-400
  hover:text-indigo-600 grid grid-cols-2 w-48 gap-2 border border-gray-200">
    <div className="col-span-2 flex flex-col place-items-center justify-items-center">
        <SmileyFace h="100" />
        <span className="ms-3 text-3xl">{text}</span>
    </div>
    <button onClick={onClick}  className="col-span-2 text-xl">view learned</button>
    <button className="text-yellow-500">rename character</button>
    <button className="text-red-800">delete character</button>
</li>
}

export function BookItem({text}: ItemProps) {
return <li className="items-center rounded-xl p-2 hover:shadow-sm hover:shadow-gray-400
  hover:text-indigo-600 grid grid-cols-2 w-48 gap-2 border border-gray-200">
    <div className="col-span-2 flex flex-col place-items-center justify-items-center">
        <BookIcon h="100" />
        <span className="ms-3 text-3xl">{text}</span>
    </div>
    <button className="col-span-2 text-xl">view learned</button>
    <button className="text-yellow-500">rename character</button>
    <button className="text-red-800">delete character</button>
</li>
}