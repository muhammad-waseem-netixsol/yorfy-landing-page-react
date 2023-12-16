
import Logo from "../../assets/Logo.png";

const Card = props => {

    return <div className={`flex-1 border-blue-600 border-2 rounded-lg p-4 sm:p-5 ${props.cardNumber === 3 && "md:mx-auto md:w-[60%] md:col-span-2 lg:mx-0 lg:w-full lg:col-span-1"}`}>
    <div className="h-[320px] rounded-lg overflow-hidden">
        <img className="block h-full w-full" src="https://theme.streal.id/yorfy/wp-content/uploads/sites/5/2022/10/yorfy_g8486-800x800.jpg" alt="yorfy cards" />
    </div>
    <div className="flex justify-start items-center gap-5 pt-5">
        <div className="inline-block max-w-fit">
            <img src={Logo} alt="yorfy" />
        </div>
        <div className="font-bold text-start text-2xl">YorHayr #332</div>    
    </div>
</div>
};

export default Card;