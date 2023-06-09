import { X } from "@phosphor-icons/react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { removeNotification } from "../../slices/stateNotificationSlice";

const Notification = () => {

    var state = useAppSelector((state) => state.notification.state);

    const actions = useAppDispatch();

    if (state == true) {
        setTimeout(() => {
            actions(removeNotification())
        }, 7000)
    }

    return (
        <div className={`h-16 w-72 bg-gradient-to-r from-primary_color to-gray-600 drop-shadow-3xl justify-between rounded-md p-1 px-3 items-center absolute bottom-4 right-4 ${state ? "flex" : "hidden"}`}>
            <div className="flex flex-col justify-start">
                <h2 className="text-secundary_color font-medium text-sm">Nome da atividade</h2>
                <h3 className="text-secundary_color font-regular text-xs">ID da atividade</h3>
            </div>
            <figure className="w-7 justify-center flex items-center cursor-pointer" onClick={() => { actions(removeNotification()) }}>
                <X size={20} className="text-secundary_color"/>
            </figure>
        </div>
    )
}

export default Notification;