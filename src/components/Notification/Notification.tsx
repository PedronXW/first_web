import { House } from "@phosphor-icons/react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { removeNotification } from "../../slices/stateNotificationSlice";

const Notification=()=>{

    var state = useAppSelector((state) => state.notification.state);

    const actions = useAppDispatch();

    if(state==true){
        setTimeout(()=>{
            actions(removeNotification())
        }, 4000)
    }
    
    return(
        <div className={`h-16 w-72 bg-secundary_color drop-shadow-3xl rounded-md border-[1px] p-1 px-5 border-primary_color items-center absolute bottom-4 right-4 ${state?"flex":"hidden"}`}>
            <figure className="w-10">
                <House size={20}/>
            </figure>
            <div className="flex flex-col justify-start">
                <h2>Nome da atividade</h2>
                <h3>ID da atividade</h3>
            </div>
        </div>
    )
}

export default Notification;