// import arch1 from "../assets/architecture-1.jpg";
// import int1 from "../assets/interior-1.jpg";
// import arch2 from "../assets/architecture-2.jpg";
// import int2 from "../assets/interior-2.jpg";

const Banner = () => {
    return (  
        <div className="flex flex-row items-center justify-between h-screen p-20 text-white bg-black">
            <div className="flex flex-row">
                <img src="./src/assets/architecture-1.jpg" alt="logo" className="object-cover w-96 h-96"/>
                {/* <img src="./src/assets/interior-1.jpg" alt="logo" className="absolute object-cover h-48 w-60 left-60 top-96"/> */}
            </div>
            <div className="flex flex-col items-center gap-4 px-10 text-center">
                <h1 className="text-5xl font-bold">Explore Architectural Excellence with us!</h1>
                <p>Discover Inspired Architectural Solutions Tailored <br/> to your Unique Style and Needs</p>
                <button className="px-3 py-1 text-sm text-black bg-white rounded-lg" >Get Started</button>
            </div>
            <div className="flex flex-row">
            <img src="./src/assets/interior-2.jpg" alt="logo" className="object-cover w-96 h-96"/>
            {/* <img src="./src/assets/architecture-2.jpg" alt="logo" className="absolute object-cover h-48 w-60 right-60 top-40"/> */}
            </div>
        </div>
    );
};

export default Banner;
