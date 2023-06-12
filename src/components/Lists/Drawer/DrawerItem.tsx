import { useNavigate } from 'react-router-dom';

interface DrawerItemInterface {
    item: any
    selected: boolean
}

const DrawerItem = ({ item, selected }: DrawerItemInterface) => {

    const navigate = useNavigate();

    return (
        <li className={`h-12 w-full cursor-pointer flex items-center bg-gray-light pl-2 ${selected ? "bg-secundary_color rounded-l-lg" : "bg-transparent hover:bg-gray-900 rounded-l-lg"}`} onClick={() => { navigate(item.route) }}>
            <figure className={`min-h-[40px] min-w-[40px] flex justify-center items-center`}>
                {selected ? item.iconSelected : item.icon}
            </figure>
            <figcaption className={`flex min-w-[132px] ml-2 text-base ${selected ? "text-primary_color" : "text-secundary_color"}`}>{item.name}</figcaption>
        </li>
    )
}

export default DrawerItem;