import { useRef } from "react";
import QueueCell from "./QueueCell";

const QueuesList = () => {

    const ref = useRef<any>(null);

    const queues = [1, 2, 3, 5, 6, 7, 8, 9, 10];


    function drop(ev: any) {
        ev.preventDefault();
        let data = ev.dataTransfer.getData("text");
        var arr = [...ref.current.children]
        let draggingItem:any;
        const notDraggingItems:any = []
        arr.map((item: any) => {
             if (item.id === data) { 
                draggingItem = item; 
            } else { 
                notDraggingItems.push(item);
            } 
        });
        let nextSibling = notDraggingItems.find((notDragging:any) => {
            console.log(notDragging.offsetTop, notDragging.offsetHeight, ev.target,  ev.target.getBoundingClientRect().top);
            return  ev.target.getBoundingClientRect().top<= notDragging.offsetTop + notDragging.offsetHeight / 2;
        });
        console.log(nextSibling);
        const newQueuesOrder:any[]=[];
        notDraggingItems.map((queue:any)=>{
            if(queue===nextSibling.id){
                newQueuesOrder.push(draggingItem);
            }
            newQueuesOrder.push(queue);
        });
        ref.current.insertBefore(draggingItem, nextSibling);
    }

    function handleDragOver(ev: any) {
        ev.preventDefault();
    }


    return (
        <ul ref={ref} onDrop={drop} onDragOver={handleDragOver} className="grid grid-cols-1 w-full md:px-12 pl-7 pr-6 pb-4 gap-10">
            {queues.map((queue, key) => <QueueCell key={key} queue={queue} />)}
        </ul>
    )
}

export default QueuesList;