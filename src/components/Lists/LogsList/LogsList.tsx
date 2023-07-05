import LogCell from "./LogCell"

const LogsList = () => {

    const logs=[1,2,3,4,5,6,7,8,9,10]

    return(
        <div className="flex flex-col w-full gap-4 md:px-12 pl-7 pr-6 ">
            {logs.map((log, key) => <LogCell key={key} log={log}/>)}
        </div>
    )
}

export default LogsList