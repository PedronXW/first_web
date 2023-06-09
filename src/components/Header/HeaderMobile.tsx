import icon from '../../assets/icon.png';

const HeaderMobile = () => {
    return (
        <header className="h-16 w-full flex md:hidden justify-center bg-gradient-to-r from-primary_color to-gray-600 drop-shadow-3xl">
            <figure className="min-h-[50px] min-w-[50px] max-h-[50px] max-w-[50px] flex justify-center items-center -ml-5">
                <img src={icon} />
            </figure>
            <figcaption className={`text-2xl font-bold text-secundary_color self-center -mt-1`}>IPorter</figcaption>
        </header>
    )
}

export default HeaderMobile;