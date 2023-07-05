import CallCell from "./CallCell";

const CallsList = () => {

    const calls = [1,2,3,4,5,6,7,8,9,10];

    return(
        <div className="flex flex-col w-full gap-4 md:px-12 pl-7 pr-6 ">
            {calls.map((call, key) => <CallCell key={key} call={call}/>)}
        </div>
    )
}

export default CallsList;