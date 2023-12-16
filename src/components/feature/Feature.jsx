import FeatureDesktop from "./Feature-desktop";


const Feature = () => {
    return <> <div className="px-5">
        <h2 className="text-center font-bold py-5 text-blue-700">Featured</h2>
        <div className="text-[32px] font-bold md:w-[40%] lg:w-[60%] lg:text-[55px] text-center mx-auto leading-[48px] lg:leading-[60px] sm:py-5">Hot Trending On This Week from Yorfy</div>
        <p className="md:w-1/2 font-light mx-auto my-5 text-justify sm:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        {/* image box */}
        <div className="flex flex-col sm:flex-row sm:gap-10 rounded-xl shadow-xl p-3 my-5  md:hidden" style={{background: "#081956"}}>
          
            {/* 2 */}
            <div className="sm:basis-2/5 sm:h-[500px]">
                <div className="w-full h-[296px] sm:h-full mx-auto overflow-hidden rounded-xl shadow-2xl shadow-blue-950">
                <img className="block h-full w-full" src="https://theme.streal.id/yorfy/wp-content/uploads/sites/5/2022/10/yorfy_g8422-800x800.jpg" alt="yorfy" />
                </div>
            </div>
      
            {/* 1 */}
            <div className="flex flex-col sm:basis-3/5 sm:justify-center sm:items-center">
            <div className="flex flex-1 flex-col justify-between sm:justify-center sm:gap-5 my-5 sm:my-0">
                <div className="flex justify-start">
                <div className="h-[32px] sm:h-[80px] flex justify-center items-center"><img className="block h-full" src="https://theme.streal.id/yorfy/wp-content/uploads/sites/5/2022/05/yorfy-fav-icon.png" alt="yorfy" /></div>
            </div>
            <div className="font-semibold text-2xl sm:text-3xl py-5 sm:py-0">YorEyes #234</div>
            <div className="text-base font-light text-justify break-words">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
            </div>
            
            {/* 3 */}
            <div className="flex-1 flex justify-around sm:justify-center sm:gap-5 flex-col items-center">   
            <div className="font-semibold text-2xl sm:text-3xl text-justify sm:w-full sm:text-start">Interesting with This Item?</div>
            <div className="font-light break-words py-5 sm:py-0 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
            <div className="text-center sm:text-start sm:w-full">
                <button className="bg-blue-500 rounded-lg h-[48px] w-[212px]">Buy on OpenSea</button>
            </div>
            </div>
            </div>
    </div>
    </div>
       <FeatureDesktop />
    </>
};
export default Feature;