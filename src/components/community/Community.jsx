import "./Community.css";
const Community = () => {
    return <div data-aos="fade-up" className="p-5 sm:my-10 md:flex md:justify-between md:items-center md:flex-row-reverse">
        <div className="flex justify-start items-center md:flex-1">
            {/* boxes wrapper */}
            <div className="flex sm:relative sm:h-[300px] w-full flex-col gap-5">
                {/* 1 */}
                <div className="cursor-pointer sm:w-1/2 md:w-2/3 w-full sm:absolute sm:left-0 sm:top-[-2%]">
                <div className="relative flex transition ease-in-out delay-250 hover:bg-[#05013e] hover:shadow-md hover:shadow-black justify-start items-start sm:items-center flex-col sm:flex-row gap-5 bg-light rounded-lg w-full p-4">
                    <div className="absolute right-5 top-[50%] translate-y-[-50%]"><i className="fa-solid fa-ellipsis text-2xl"></i></div>
                
                    <div className="h-[65px] w-[65px] rounded-full overflow-hidden">
                        <img src="https://theme.streal.id/yorfy/wp-content/uploads/sites/5/2022/05/senior-man-mobile-phone-communication-connection-technology-conc-e1654607179381-150x150.jpg" alt="community" />
                    </div>
                    <div className="font-medium text-white">SHOOPHARDHIE<p className="font-light text-sm">Lorem ipsum, dolor..</p></div> 
                </div>
                </div>
                {/* 2 */}
                <div className="sm:w-1/2 md:w-2/3 cursor-pointer w-full sm:absolute md:left-[50%] sm:left-[50%] sm:translate-x-[-50%] sm:top-[50%] sm:translate-y-[-50%]">
                <div className="relative flex transition ease-in-out delay-250 hover:bg-[#05013e] hover:shadow-md hover:shadow-black justify-start items-start sm:items-center flex-col sm:flex-row gap-5 bg-light rounded-lg w-full p-4">
                <div className="absolute right-5 top-[50%] translate-y-[-50%]"><i className="fa-solid fa-ellipsis text-2xl"></i></div>
                
                    <div className="h-[65px] w-[65px] rounded-full overflow-hidden">
                        <img src="https://theme.streal.id/yorfy/wp-content/uploads/sites/5/2022/05/senior-man-mobile-phone-communication-connection-technology-conc-e1654607179381-150x150.jpg" alt="community" />
                    </div>
                    <div className="font-medium text-white">SHOOPHARDHIE<p className="font-light text-sm">Lorem ipsum, dolor..</p></div> 
                </div>
                </div>
                {/* 2 */}
                <div className="sm:w-1/2 md:w-2/3 cursor-pointer w-full sm:absolute md:left-[35%] sm:right-[0%] sm:bottom-[-2%]">
                    <div className="relative flex transition ease-in-out delay-250 hover:bg-[#05013e] hover:shadow-md hover:shadow-black justify-start items-start sm:items-center flex-col sm:flex-row gap-5 bg-light rounded-lg w-full p-4">
                    <div className="absolute right-5 top-[50%] translate-y-[-50%]"><i className="fa-solid fa-ellipsis text-2xl"></i></div>
                
                        <div className="h-[65px] w-[65px] rounded-full overflow-hidden">
                            <img src="https://theme.streal.id/yorfy/wp-content/uploads/sites/5/2022/05/senior-man-mobile-phone-communication-connection-technology-conc-e1654607179381-150x150.jpg" alt="community" />
                        </div>
                        <div className="font-medium text-white">SHOOPHARDHIE<p className="font-light text-sm">Lorem ipsum, dolor...</p></div> 
                    </div>
                </div>
            </div>
        </div>
        {/* text part */}
        <div className="md:w-[60%]">
            <h3 className="text-blue-500 font-semibold text-center md:text-start py-5">Community</h3>
            <p className="font-bold text-3xl text-center md:text-start md:text-[50px] leading-[55px]">Join Our Community and Get Many Benefits</p>
            <p className="text-center font-light break-words py-5 md:text-start">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus tempore ea amet.</p>
            <div>
                <button className="py-3 rounded-lg bg-blue-500 border-blue-500 hover:bg-[#05013e] border-2 hover:border-blue-500 px-3 w-full font-medium text-xl md:w-[212px]">Join Our Discord</button>
            </div>
        </div>
    </div>
};

export default Community;