import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Portfolio from './Components/Portfolio';
import Testimonia from './Components/Testimonia';
import TestimonialComponent from './Components/TestimonialComponent';
import Service from './Components/Service';
import Contacts from './Components/Contacts';
import About from './Components/About';
import Summary from './Components/Summary';
import Footer from './Components/Footer';
import Home from './Components/Home';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Home/>
      <About/>
      <Service/>
      <Summary/>
      <Portfolio/>
      <Testimonia/>
      <Contacts/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
