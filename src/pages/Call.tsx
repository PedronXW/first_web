import { useEffect, useRef } from "react";


const Call=()=>{
    const ref = useRef<any>()

    const soundPlay = async () => {
        console.log(ref)
        const audio = await fetch("http://10.1.1.24:3000/logs/audio/1687271212.464",
            {
                method: "GET",
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgzMTBjMDAwLTJmYTgtNDRlNS04MTMyLWY2NmFlM2RjY2ExNyIsImlhdCI6MTY4NzI5MTM3NywiZXhwIjoxNjg3MzAyMTc3fQ.I7nvog0Nm4zEsmJ6YBkVFI0rcxOAmzFgUiolePciMVc",
                    client: "d471de34-7bca-46dd-acde-e173c85813ff"
                }
            }
        );
        const blob = await audio.blob();
        if (blob && ref) {
            ref.current.src = URL.createObjectURL(blob);
            ref.current.parentElement.load();
            console.info("Ready!", ref.current.src);
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
                <source ref={ref} type="audio/wav" />
            </audio>
        </div>
    )
}

export default Call;