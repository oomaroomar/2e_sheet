import Link from "next/link";

interface ItemProps {
    text: string
    href: string
}

export default function LeftmenuItem({text, href}: ItemProps) {
return <li>
    <Link className="flex items-center p-2 rounded-lg hover:text-indigo-600" href={href}>
        <span className="ms-3">{text}</span>
    </Link>
</li>
}