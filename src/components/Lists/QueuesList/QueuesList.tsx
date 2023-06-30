import { useRef, useState } from "react";
import QueueCell from "./QueueCell";

const QueuesList = () => {

    const ref = useRef<any>(null);

    const [queues, setQueues] = useState([1, 2, 3, 5, 6, 7, 8, 9, 10]);


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
            return  ev.target.getBoundingClientRect().top<= notDragging.offsetTop + notDragging.offsetHeight / 2;
        });
        const newQueuesOrder:any[]=[];
        notDraggingItems.map((queue:any)=>{
            if(queue===nextSibling.id){
                newQueuesOrder.push(draggingItem);
            }
            newQueuesOrder.push(queue);
        });
        setQueues(newQueuesOrder)
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