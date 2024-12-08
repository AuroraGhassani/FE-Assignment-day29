import { MdArrowOutward } from "react-icons/md";

const CardPortfolio = props => {
    const { Portfolio} = props;
        return (
            <div key={Portfolio.id} className="flex flex-col items-start gap-3">
                    <img src={Portfolio.image} alt="portfolio" className="object-cover shadow-md h-1/2 w-96"/>
                    <h2 className="text-lg font-bold">{Portfolio.name}</h2>
                    <p>{Portfolio.description}</p>
                    <button className="flex flex-row items-center gap-2 px-3 py-1 text-sm text-white bg-gray-800 rounded-lg">Visit Projects <MdArrowOutward /></button>
            </div>
        );
};

export default CardPortfolio;