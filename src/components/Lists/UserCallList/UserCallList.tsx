import UserCallCell from "./UserCallCell";

interface UserCallListInterface{
    user:string;
}

const UserCallList=({user}:UserCallListInterface)=>{

    const calls=[1,2,3,4,5,6,7,8,9,10]

    return(
        <div className="grid grid-cols-1 w-full gap-4">
            {calls.map((call,key)=><UserCallCell call={call} key={key}/>)}
        </div>
    )
}

export default UserCallList;