import Link from "next/link";

interface ItemProps {
    text: string
    href: string
}

function LeftmenuItem({text, href}: ItemProps) {
return <li>
    <Link className="flex items-center p-2 rounded-lg hover:text-pink-600" href={href}>
        <span className="ms-3">{text}</span>
    </Link>
</li>
}

function Section({children}: Readonly<{children: React.ReactNode;}>) {
    return <ul className="pt-4 mt-4 space-y-2 font-medium border-t opacity-100 border-pink-400">
        {children}
    </ul>
}

export default function LeftMenu() {
    return <div>
    <ul className="space-y-2 font-medium transition-transform pt-14">
          <LeftmenuItem href="/" text="Home" />
          <LeftmenuItem href="/spells" text="All spells" />
          <LeftmenuItem href="/spells/priest" text="Cleric spells" />
          <LeftmenuItem href="/spells/wizard" text="Wizard spells" />
    </ul>
    <Section>
          <LeftmenuItem href="/spells/homebrew" text="Homebrew a spell" />
          <LeftmenuItem href="/characters" text="Characters" />
          <LeftmenuItem href="/user/login" text="Spellbooks" />
    </Section>
    <Section>
          <LeftmenuItem href="/" text="Admin" />
          <LeftmenuItem href="/user/login" text="Settings" />
          <LeftmenuItem href="/user/login" text="Log in" />
          <LeftmenuItem href="/user/register" text="Sign up" />
    </Section>
    </div>

}


