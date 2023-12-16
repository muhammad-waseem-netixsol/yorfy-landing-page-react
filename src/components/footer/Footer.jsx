const Footer = () => {
    return <div className="p-5">
        <div className="flex justify-between items-center py-4 mb-4 border-blue-500 border-b">
            <div className="h-[40px] w-[125px]">
                <img className="block h-full w-full" src="https://theme.streal.id/yorfy/wp-content/uploads/sites/5/2022/05/yorfy-logo-800x250.png" alt="yorfy brand logo" />
            </div>

            <div className="flex justify-center items-center gap-1 sm:gap-3">
                <div className="h-[32px] rounded-full w-[32px] bg-blue-500 flex justify-center items-center overflow-hidden hover:text-blue-500 cursor-pointer hover:bg-[#04003a] hover:border"><i class="fa-brands fa-facebook"></i></div>
                <div className="h-[32px] rounded-full w-[32px] bg-blue-500 flex justify-center items-center overflow-hidden  hover:text-blue-500 cursor-pointer hover:bg-[#04003a] hover:border"><i class="fa-brands fa-instagram"></i></div>
                <div className="h-[32px] rounded-full w-[32px] bg-blue-500 flex justify-center items-center overflow-hidden  hover:text-blue-500 cursor-pointer hover:bg-[#04003a] hover:border"><i class="fa-brands fa-linkedin"></i></div>
                <div className="h-[32px] rounded-full w-[32px] bg-blue-500 flex justify-center items-center overflow-hidden  hover:text-blue-500 cursor-pointer hover:bg-[#04003a] hover:border"><i class="fa-brands fa-youtube"></i></div>
            </div>
        </div>
        <div className="md:flex md:justify-between md:items-center">
        <p className="font-light text-base text-center md:text-start my-5 md:my-1">© 2022 Yorfy Template • All Rights Reserved</p>
        <p className="font-light text-base text-center md:text-start my-5 md:my-1">Made With Love by Streal Studio</p>
        </div>
    </div>
};

export default Footer;