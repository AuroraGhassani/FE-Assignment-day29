import CardAbout from "../CardAbout";
const About = ({AboutList}) => {
    return (
      <div className="flex flex-col items-center justify-center p-20 bg-white gap-14">
        <div className="relative flex w-full max-w-5xl ">
          <img
            src="./src/assets/about.jpg"
            alt="aboutImage"
            className="object-cover w-1/2"
          />
          <div className="absolute w-1/2 p-8 text-gray-800 bg-white shadow-lg right-20 bottom-10">
            <h1 className="mb-4 text-3xl font-bold">About Us</h1>
            <p className="text-sm leading-relaxed">
              We specialize in crafting innovative and timeless architectural designs that blend functionality, aesthetics, and sustainability. With a passion for creating spaces that inspire, we work closely with our clients to transform their visions into reality, whether it’s a modern home, a commercial space, or a public landmark. Our commitment to quality and attention to detail ensures that every project we undertake not only meets but exceeds expectations, leaving a lasting impression on the communities we serve.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-10 text-center">
              {AboutList.map(About => (
                  <CardAbout About={About} />
              ))}
            </div>
      </div>
    );
  };
  
  export default About;
  