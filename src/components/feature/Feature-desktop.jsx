const FeatureDesktop = () => {
    return <div className="px-5 hidden md:block w-full h-[500px] my-10"> 
    <div className="flex justify-between sm:gap-10 rounded-xl shadow-xl p-3 my-5" style={{background: "#081956"}}>
        {/* 1 */}
        <div data-aos="fade-right" className="flex-1 flex justify-evenly sm:gap-5 flex-col items-center">
            <div className="flex justify-start">
            <div className="h-[32px] sm:h-[80px] flex justify-center items-center"><img className="block h-full" src="https://theme.streal.id/yorfy/wp-content/uploads/sites/5/2022/05/yorfy-fav-icon.png" alt="yorfy" /></div>
        </div>
        <div className="font-bold text-center xl:text-4xl lg:text-3xl w-[60%]">YorEyes #234</div>
        <div className="text-base font-light text-center break-words">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
        </div>       
        {/* 2 */}
        <div className="flex-1">
            <div className="w-full h-[296px] sm:h-full mx-auto overflow-hidden rounded-xl shadow-2xl shadow-blue-950">
            <img className="block h-full w-full" src="https://theme.streal.id/yorfy/wp-content/uploads/sites/5/2022/10/yorfy_g8422-800x800.jpg" alt="yorfy" />
            </div>
        </div>



        {/* 3 */}
        <div data-aos="fade-left" className="flex-1 flex justify-evenly sm:gap-5 flex-col items-center">   
        <div className="font-bold text-center xl:text-4xl lg:text-3xl w-[65%]">Interesting with This Item?</div>
        <div className="font-light text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
        <div className="">
            <button className="bg-blue-500 rounded-lg h-[48px] w-[212px]">Buy on OpenSea</button>
       </div>
       </div>
       </div>
</div>
};

export default FeatureDesktop;