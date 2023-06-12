import RamalCellList from "./RamalCellList";

const RamaisList = () => {

    const ramais=[1,2,3,5,6,7,8,9,10,9,8,4,5,6];

    return (
        <div className="grid h-full w-full grid-cols-auto md:gap-7 gap-2 md:px-12 px-4">
            {ramais.map((ramal, key) => <RamalCellList key={key} ramal={ramal}/>)}
        </div>
    )

}

export default RamaisList;