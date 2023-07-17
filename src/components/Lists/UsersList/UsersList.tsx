import UserCell from "./UserCell";

const UsersList=()=>{

    const user=[1,2,3,4,5,6]

    return(
        <div className="grid grid-cols-auto w-full gap-4 md:px-12 pl-7 pr-6 ">
            {user.map((user, key) => <UserCell key={key} user={user}/>)}
        </div>
    )
}

export default UsersList;