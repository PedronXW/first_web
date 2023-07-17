import { User } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

interface UserCellInterface {
    user: any;
}

const UserCell = ({ user }: UserCellInterface) => {

    const navigate=useNavigate();

    return (
        <div className="min-h-[144px] xl:max-w-[400px] flex flex-col w-full justify-end items-end cursor-pointer" onClick={()=>{navigate("xcdqhbdskhascbhsa")}}>
            <figure className="min-h-[54px] min-w-[54px] bg-primary_color relative z-10 right-4 border-[8px] border-background_color rounded-full flex justify-center items-center">
                <User size={20} className="text-white" />
            </figure>
            <div className="h-5/6 w-full rounded-lg self-end drop-shadow-3xl align-bottom -mt-7">
                <header className="h-2/4 w-full bg-primary_color rounded-t-md flex items-center pl-5 pr-5 justify-between">
                    <h3 className="text-secundary_color font-medium">ID: {user}</h3>
                </header>
                <div className="h-2/4 w-full bg-secundary_color rounded-b-lg flex items-center justify-center px-5">
                    <strong className="text-primary_color font-medium h-full flex justify-start items-center w-1/2 whitespace-nowrap overflow-ellipsis">Pedro de Almeida</strong>
                    <strong className="text-primary_color font-medium h-full flex justify-end items-center w-1/2">(35)99124-4060</strong>
                </div>
            </div>
        </div>
    )
}

export default UserCell