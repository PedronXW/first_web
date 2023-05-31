import icon from '../../assets/icon.png';

const HeaderMobile = () => {
    return (
        <div className="h-16 w-full flex md:hidden justify-center bg-primary_color drop-shadow-3xl">
            <div className="min-h-[50px] min-w-[50px] max-h-[50px] max-w-[50px] flex justify-center items-center -ml-5">
                <img src={icon} />
            </div>
            <div className={`items-center flex -mt-1`}>
                <h2 className={`text-2xl font-bold text-secundary_color`}>IPorter</h2>
            </div>
        </div>
    )
}

export default HeaderMobile;