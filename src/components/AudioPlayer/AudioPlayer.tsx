import { useEffect, useRef } from "react";
import { usePersistanceStore } from "../../hooks/usePersistanceStore";


interface AudioPlayerInterface {
    client: string;
    audio_id: string;
}

const AudioPlayer = ({client, audio_id}:AudioPlayerInterface) => {

    const ref = useRef<any>();

    const store=usePersistanceStore();

    const soundPlay = async () => {
        const audio = await fetch("http://10.1.1.24:3000/logs/audio/"+audio_id,
            {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + store.value.token,
                    client: client
                }
            }
        );
        const blob = await audio.blob();
        if (blob && ref.current!= null && ref!=null) {
            ref.current.src = URL.createObjectURL(blob);
            ref.current.parentElement.load();
        } else {
            console.warn("Can not load");
        }
    }

    useEffect(() => {
        soundPlay()
    }, [])

    return (
        <div className="w-full">
            <audio controls className="w-full">
                <source ref={ref} type="audio/wav"/>
            </audio>
        </div>
    )
}

export default AudioPlayer;