import CardPortfolio from "../CardPortfolio";
const Portfolio = ({PortfolioList}) => {
    return (
        <div className="flex flex-col gap-10 p-20 bg-white">
           <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-bold ">Our Portfolio</h1>
                <p>Dive into diverse portfolio of architecture marvels, each a testament to out community to innovation, creativity, and excellence.</p>
            </div> 
            <div className="flex flex-row gap-10">
                {PortfolioList.map(Portfolio => (
                    <CardPortfolio Portfolio={Portfolio} />
                ))}
            </div>
         </div>
    );
};

export default Portfolio;