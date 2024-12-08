const CardAbout = props => {
    const { About} = props;
        return (
            <div key={About.id} className="flex flex-col gap-2 px-20 py-3 bg-gray-200 rounded-lg">
                    <h2 className="text-4xl font-bold">{About.name}</h2>
                    <p>{About.description}</p>
            </div>
        );
};

export default CardAbout;
