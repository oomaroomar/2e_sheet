import SpellCard from "@/components/SpellCard";
import SpellInfo from "@/components/SpellInfo";

export default function Home() {
  const card = SpellCard()
  const info = SpellInfo()

  const cards = []
  for (let i = 0; i < 50; i++) {
    cards.push(card)
  }
  const infos = []
  for (let i = 0; i < 50; i++) {
    infos.push(info)
  }

  return (
    <div className="w-screen h-lvh flex p-2" >
      <div className="flex flex-wrap w-3/5 overflow-auto flex-1" >
        {cards.map(card => card)}
      </div>
      <div className="flex flex-1 flex-wrap w-2/5 overflow-auto container max-w-3xl p-4 align-self-end" >
        {infos.map(info => info)}
      </div>
    </div>
  );
}
