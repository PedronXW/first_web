import ClientCell from "./ClientCell";

interface ClientListInterface{
    clients: Array<any>;
}

const ClientList=({clients}:ClientListInterface)=>{
    return(
        <div className="grid h-full w-full grid-cols-auto md:gap-7 gap-2 px-4">
            {clients.map((client, index)=><ClientCell client={client} key={index}/>)}
        </div>
    )
}

export default ClientList;