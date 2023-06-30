import { useState } from "react";

interface PersonCellInterface {
    person: any;
}

const PersonCell = ({ person }: PersonCellInterface) => {

    const [dragging, setDragging] = useState<boolean>(false);

    function handleDraggingStart(ev: any) {
        ev.dataTransfer.setData("text", String(person));
        setDragging(true);
    }

    function handleDraggingEnd() {
        setDragging(false);
    }

    return (
        <div id={String(person)} draggable="true" onDragStart={handleDraggingStart} onDragEnd={handleDraggingEnd} className={`h-14 px-6 w-full flex items-center bg-secundary_color drop-shadow-3xl mb-3 rounded-md gap-4 ${dragging?"opacity-0":"opacity-100"}`}>
            <input type="checkbox" />
            <span className="grow-1 w-full text-primary_color text-base">{person}</span>
            <span className="text-primary_color text-base w-fit whitespace-nowrap">(35) 3422-9066</span>
        </div>
    )
}

export default PersonCell;