import Header from './components/Header'
import Banner from './components/Banner'
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {

  const ServicesList = [
    {
      id: 1,
      name: "Architectural Design",
      description: "Our architectural design ethos integrates innovation, sustainability, and client satisfaction from inception to realization.",    
    },
    {
      id: 2,
      name: "Interior Design",
      description: "Our architectural design ethos integrates innovation, sustainability, and client satisfaction from inception to realization.",    
    },
    {
      id: 3,
      name: "Exterior Design",
      description: "Our architectural design ethos integrates innovation, sustainability, and client satisfaction from inception to realization.",    
    },
  ]

  const PortfolioList = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/2a/bc/4c/2abc4c88d80f67a5fa827f109be1864d.jpg",
      name: "House Architecture Design in New York",    
      description: "Our architectural design ethos integrates innovation, sustainability, and client satisfaction from inception to realization."
    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/64/59/1f/64591fa465f3795230bf69eb3acf327c.jpg",
      name: "Interior Design in New York",
      description: "Our architectural design ethos integrates innovation, sustainability, and client satisfaction from inception to realization."  
    },
    {
      id: 3,
      image: "https://i.pinimg.com/736x/d1/20/d1/d120d1533cf6ea206c5a5ba4574c50d1.jpg",
      name: "Sustainable Architecture",
      description: "Our architectural design ethos integrates innovation, sustainability, and client satisfaction from inception to realization."
    },
  ]

  const AboutList = [
    {
      id: 1,
      name: "3000+",    
      description: "Successful Projects"
    },
    {
      id: 2,
      name: "2500+",    
      description: "Happy Clients"
    },
    {
      id: 3,
      name: "100%",    
      description: "Client Satisfaction"
    },
   
  ]
  
  return (
   <div>
    <Header />
    <Banner />
    <Services ServicesList={ServicesList}/>
    <About AboutList={AboutList}/>
    <Portfolio PortfolioList={PortfolioList} />
    <Footer />
    </div>
  ) 
}

export default App;
