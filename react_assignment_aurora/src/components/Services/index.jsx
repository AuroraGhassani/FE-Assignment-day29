import CardServices from "../CardServices";

const Services = ({ServicesList}) => {
    return (
        <div className="h-auto p-20 text-white bg-black">
            <h1 className="pb-10 text-3xl font-bold">Our Services</h1>
            <div className="flex flex-row gap-14">
              {ServicesList.map(Services => (
                  <CardServices Services={Services} />
              ))}
            </div>
        </div>
    )
}
export default Services;