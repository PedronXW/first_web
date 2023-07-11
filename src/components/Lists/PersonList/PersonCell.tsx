import { useState } from "react";

interface PersonCellInterface {
    person: any;
    type?: "gray" | "white";
}

const PersonCell = ({ person, type="gray" }: PersonCellInterface) => {

    const [dragging, setDragging] = useState<boolean>(false);
    const [state, setState] = useState<boolean>(true);

    function handleDraggingStart(ev: any) {
        ev.dataTransfer.setData("text", String(person));
        setDragging(true);
    }

    function handleDraggingEnd() {
        setDragging(false);
    }

    return (
        <div onClick={()=>{setState(!state)}} id={String(person)} draggable={true} onDragStart={handleDraggingStart} onDragEnd={handleDraggingEnd} className={`min-h-[50px] cursor-pointer px-6 w-full flex items-center ${type=="gray"?"bg-background_color": "bg-secundary_color drop-shadow-3xl"} mb-3 rounded-md gap-4 ${state?"opacity-100":"opacity-40"}`}>
            <input type="checkbox" checked={state}/>
            <span className="grow-1 w-full text-primary_color text-base">{person}</span>
            <span className="text-primary_color text-base w-fit whitespace-nowrap">(35) 3422-9066</span>
        </div>
    )
}

export default PersonCell;