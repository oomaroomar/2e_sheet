export default function SpellCard() {
    return <div className="container w-96 p-3 " >
        <div className="grid grid-cols-2 gap-y-2 bg-white text-black rounded-xl hover:shadow-md" >
            <div className="col-span-2 grid grid-cols-10 bg-alteration rounded-t-xl text-xl">
                <div className="px-2 py-1" ><b>{"1)"}</b></div>
                <div className="col-span-9 px-2 py-1" ><b>Spellname</b></div>
            </div>
            <div className="col-span-2 px-2" > <b>S V M: </b>100gp pearl with super duper cool cuck shit with fucking crazy shit</div>
            <div className="p-2 pt-0" > <b>dmg:</b>  1d2</div>
            <div className="p-2 pt-0" > <b>dur:</b> 4h</div>
        </div>
    </div>
}