import { BiBuildingHouse } from "react-icons/bi";
import { MdArrowOutward } from "react-icons/md";

const CardServices = props => {
    const { Services} = props;
        return (
            <div key={Services.id} className="flex flex-col items-start gap-4">
                    <icon className="text-4xl"><BiBuildingHouse /></icon>
                    <h2 className="text-lg font-bold">{Services.name}</h2>
                    <p>{Services.description}</p>
                    <button className="flex flex-row items-center gap-2 px-3 py-1 text-sm text-white underline">Visit Projects <MdArrowOutward /></button>
            </div>
        );
};

export default CardServices;
