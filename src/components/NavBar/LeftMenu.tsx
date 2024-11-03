import Link from 'next/link'

export default function LeftMenu() {
    return <div>
    <ul className="space-y-2 font-medium">
        <li>
            <Link className="flex items-center p-2 rounded-lg" href="/">
             <span className="ms-3">Home</span>
            </Link>
        </li>
        <li>
        <Link className="flex items-center p-2 rounded-lg" href="/spells">
             <span className="ms-3">All spells</span>
        </Link>
        </li>
        <li>
        <Link className="flex items-center p-2 rounded-lg" href="/spells/priest">
             <span className="ms-3">Cleric spells</span>
        </Link>
        </li>
        <li>
        <Link className="flex items-center p-2 rounded-lg" href="/spells/wizard">
             <span className="ms-3">Wizard spells</span>
        </Link>
        </li>
        
    </ul>
    <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200">
        <li>
        <Link className="flex items-center p-2 rounded-lg" href="/admin">
             <span className="ms-3">Admin</span>
        </Link>
        </li>
        <li>
        <Link className="flex items-center p-2 rounded-lg" href="/spells/wizard">
             <span className="ms-3">Log in</span>
        </Link>
        </li>
        <li><Link className="flex items-center p-2 rounded-lg" href="/spells/wizard">
             <span className="ms-3">Sign up</span>
        </Link>
        </li>
    </ul>
    </div>

}