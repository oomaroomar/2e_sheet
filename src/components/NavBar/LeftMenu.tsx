import LeftmenuItem from './LeftmenuItem'
import Section from './LeftmenuSection'

export default function LeftMenu() {
    return <div>
    <ul className="space-y-2 font-medium transition-transform">
          <LeftmenuItem href="/" text="Home" />
          <LeftmenuItem href="/spells" text="All spells" />
          <LeftmenuItem href="/spells/priest" text="Cleric spells" />
          <LeftmenuItem href="/spells/wizard" text="Wizard spells" />
    </ul>
    <Section>
          <LeftmenuItem href="/" text="Characters" />
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