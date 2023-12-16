import bgImage from "../../assets/Bacground.svg";
const Background = () => {
    return <div className="h-screen max-w-screen min-w-full absolute left-0 top-0">
        <img className="block h-full w-full" src={bgImage} alt="fixedbgsvg" />
    </div>
};

export default Background;