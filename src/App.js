import './App.css';
import ContactForm from './Components/ContactForm/ContactForm';
import Footer from './Components/FooterSection/Footer';
import Navbar from './Components/Navbar/Navbar';
import Section1 from './Components/Section1/Section1';
import Section2 from './Components/Section2/Section2';
import Section3 from './Components/Section3/Section3';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <ContactForm/>
      <Footer/>
      
    </div>
  );
}

export default App;
