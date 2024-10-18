export default function SpellInfo() {
    return <div className="p-4" >
        <div className="grid grid-cols-2 gap-y-2 bg-white text-black rounded-xl shadow-md" >
            <div className="col-span-2 grid grid-cols-10 bg-alteration rounded-t-xl text-xl">
                <div className="px-2 py-1" ><b>{"1)"}</b></div>
                <div className="col-span-9 px-2 py-1" ><b>Spellname</b></div>
            </div>
            <div className="col-span-2 px-2" > <b>S V M: </b>100gp pearl with super duper cool cuck shit with fucking crazy shit</div>
            <div className="px-2" > <b>Damage:</b>  1d2</div>
            <div className="px-2" > <b>Duration:</b> 4h</div>
            <div className="px-2" > <b>AoE:</b> 20ft. cube </div>
            <div className="px-2" > <b>Range:</b>  30 yds.</div>
            <div className="px-2" > <b>Casting Time:</b> 1</div>
            <div className="px-2" > <b>Save:</b>  Special</div>
            <div className="col-span-2 p-2 pt-0 text-2xl" > <b className="text-lg">Description: </b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque necessitatibus quo sit itaque minima dolore magnam nam a facere? Numquam repellendus dolore quae dignissimos rem nostrum ipsum eaque sequi eius! </div>
        </div>
    </div>
}