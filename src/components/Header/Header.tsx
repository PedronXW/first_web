import { ReactNode } from "react";

interface HeaderInterface{
    title: string;
    children?: ReactNode;
}

const Header = ({title, children}:HeaderInterface) => {
    return(
        <header className="min-h-[70px] max-h-[70px] w-full pl-8 md:px-12 pr-6 flex justify-between pt-6">
            <h2 className="text-2xl text-primary_color font-bold">{title}</h2>
            {children}
        </header>
    )
}

export default Header;