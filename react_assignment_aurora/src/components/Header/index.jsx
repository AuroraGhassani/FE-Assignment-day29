const Header = () => {
    return (
      <header>
        <div className="sticky top-0 z-50 flex flex-row items-center justify-between px-20 py-5 text-white bg-black ">
          <div>
            <img
              src="./src/assets/logo.jpeg"
              alt="logo"
              className="object-cover w-24"
            />
          </div>
          <div>
            <ul className="flex flex-row gap-6">
              <li className="cursor-pointer hover:underline">Home</li>
              <li className="cursor-pointer hover:underline">Our Services</li>
              <li className="cursor-pointer hover:underline">About Us</li>
              <li className="cursor-pointer hover:underline">Our Portfolio</li>
              <li className="cursor-pointer hover:underline">Testimonial</li>
            </ul>
          </div>
          <div>
            <button className="px-3 py-1 text-sm text-black bg-white rounded-lg">
              Contact Us
            </button>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  