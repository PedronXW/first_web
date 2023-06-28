import QueueCell from "./QueueCell";

const QueuesList = () => {

    const queues=[1,2,3,5,6,7,8,9,10,9,8,4,5,6];

    return (
        <div className="grid w-full grid-cols-auto md:gap-8 gap-2 md:px-12 pl-7 pr-6 pb-4">
            {queues.map((queue, key) => <QueueCell key={key} queue={queue}/>)}
        </div>
    )
}

export default QueuesList;