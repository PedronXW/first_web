import LogCell from "./LogCell"

const LogsList = () => {

    const logs=[1,2,3,4,5,6,7,8,9,10]

    return(
        <div className="grid w-full grid-cols-1 md:gap-8 gap-2 md:px-12 pl-7 pr-6 pb-4">
            {logs.map((log, key) => <LogCell key={key} log={log}/>)}
        </div>
    )
}

export default LogsList