import CallCell from "./CallCell";

const CallsList = () => {

    const calls = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    return(
        <div className="grid h-full w-full grid-cols-auto md:gap-8 gap-2 md:px-12 pl-7 pr-6 pb-5">
            {calls.map((call, key) => <CallCell key={key} call={call}/>)}
        </div>
    )
}

export default CallsList;