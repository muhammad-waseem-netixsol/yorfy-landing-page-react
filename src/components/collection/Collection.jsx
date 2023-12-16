
import Card from "./Card";
const Collection = () => {
    const arr = [1,2,3];
    return <div data-aos="fade-up" className="px-5">
        <h2 className="text-center font-bold py-0 text-blue-700">Featured</h2>
        <div className="text-[32px] font-bold md:w-[40%] lg:w-[60%] lg:text-[55px] text-center mx-auto leading-[48px] lg:leading-[60px] sm:py-10">Yorfy NFT Collections</div>
        <p className="md:w-6/12 font-light text-sm sm:text-base mx-auto my-3 text-justify sm:text-center sm:py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center items-center gap-5 col-span-2 sm:my-10">
               {arr.map(val => <Card key={val} cardNumber={val}/>)}
        </div>
        <div className="text-center py-5">
            <button className="border-2 hover:border-blue-500 hover:bg-blue-500 rounded-lg px-5 py-3 w-full sm:w-1/5">View On OpenSea</button>
        </div>
    </div>
};

export default Collection;