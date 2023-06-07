import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { removeNotification } from "../../slices/stateNotificationSlice";

const Notification=()=>{

    var state = useAppSelector((state) => state.notification.state);

    const actions = useAppDispatch();

    if(state==true){
        setInterval(()=>{
            actions(removeNotification())
        }, 4000)
    }
    
    return(
        <div className={`h-20 w-72 bg-red-500 absolute bottom-4 right-4 ${state?"flex":"hidden"}`}>
            
        </div>
    )
}

export default Notification;