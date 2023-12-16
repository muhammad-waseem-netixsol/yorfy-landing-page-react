import image1 from "../../assets/partners1.png";
const Partners = () => {
    return <div data-aos="fade-up"> 
        <h3 className="text-blue-500 font-semibold text-center py-5">Collaboration</h3>
            <div className="text-3xl font-bold text-center">Our Partners</div>
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 justify-center items-center py-5">
                <div className="h-[30px] w-[125px] sm:h-[50px] sm:w-[250px] mx-auto">
                    <img className="block h-full w-full" src="https://theme.streal.id/yorfy/wp-content/uploads/sites/5/2022/05/logo1.png" alt="partners" />
                </div>
           
           
                <div className="h-[30px] w-[125px] sm:h-[50px] sm:w-[250px] mx-auto">
                    <img className="block h-full w-full" src="https://theme.streal.id/yorfy/wp-content/uploads/sites/5/2022/05/logo2.png" alt="partners" />
                </div>
            
                <div className="h-[30px] w-[125px] sm:h-[50px] sm:w-[250px] mx-auto">
                    <img className="block h-full w-full" src="https://theme.streal.id/yorfy/wp-content/uploads/sites/5/2022/05/logo3.png" alt="partners" />
                </div>
           
                <div className="h-[30px] w-[125px] sm:h-[50px] sm:w-[250px] mx-auto">
                    <img className="block h-full w-full" src="https://theme.streal.id/yorfy/wp-content/uploads/sites/5/2022/05/logo4.png" alt="partners" />
                </div>
            </div>
    </div>
};

export default Partners;