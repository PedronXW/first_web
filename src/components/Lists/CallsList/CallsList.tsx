import CallCell from "./CallCell";

const CallsList = () => {

    const calls = [1];

    return(
        <div className="grid w-full grid-cols-auto md:gap-8 gap-2 md:px-12 pl-7 pr-6 pb-4">
            {calls.map((call, key) => <CallCell key={key} call={call}/>)}
        </div>
    )
}

export default CallsList;