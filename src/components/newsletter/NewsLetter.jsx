const NewsLetter = () => {
    return <div data-aos="fade-up" className="rounded-lg m-5 p-5 sm:py-16 sm:my-10 bg-[#081956] my-10 shadow-md ">
        <h3 className="text-blue-500 font-semibold text-center pb-5">News Letter</h3>
        <div className="text-3xl lg:text-4xl leading-[48px] mx-auto font-bold text-center">You Do Not Want to Miss Out on this!</div>
        <p className="font-light text-base text-center px-4 py-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem magnam distinctio.</p>
        <div className="flex md:flex-row justify-center items-center w-full flex-col gap-5 mt-5 xl:w-1/2 mx-auto">
            <div className="w-full md:flex-grow">
                <input className="block h-full w-full px-2 py-3 rounded-md border-2 bg-blue-950 outline-none" placeholder="Your Email..." type="text" />
            </div>
            <div className="w-full md:basis-2/5">
                <input className="block h-full w-full px-2 py-3 rounded-md border-2 border-blue-500 bg-blue-500 cursor-pointer hover:bg-[#04003a]" value="Submit" type="button" />
            </div>
        </div>
    </div>
    
};

export default NewsLetter;