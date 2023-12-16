import "./Badge.css";

const Badge = () => {
    return <div className="relative">
                <div className="flex justify-around items-center bg-purple-500 lg:my-20 mx-auto py-5 my-10">
                    <div className="font-bold text-center lg:text-3xl text-lg">Discount Sale</div>
                    <div className="text-shad font-bold text-center lg:text-3xl sm:text-lg hidden md:block">Up To 40%</div>
                    <div className="font-bold text-center lg:text-3xl sm:text-lg hidden md:block">Discount Sale</div>
                    <div className="text-shad font-bold text-center text-lg lg:text-3xl">Up To 40%</div>
                </div>
            </div>
};

export default Badge;