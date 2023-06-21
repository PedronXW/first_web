import RamalCell from "./RamalCell";

const RamaisList = () => {

    const ramais=[1,2,3,5,6,7,8,9,10,9,8,4,5,6];

    return (
        <div className="grid grow-1 w-full grid-cols-auto md:gap-8 gap-2 md:px-12 pl-7 pr-6 pb-4">
            {ramais.map((ramal, key) => <RamalCell key={key} ramal={ramal}/>)}
        </div>
    )
}

export default RamaisList;