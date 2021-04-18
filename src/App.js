import './App.css';
import ContactForm from './Components/ContactForm/ContactForm';
import Navbar from './Components/Navbar/Navbar';
import Section1 from './Components/Section1/Section1';
import Section2 from './Components/Section2/Section2';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Section1/>
      <Section2/>
      <ContactForm/>
      
    </div>
  );
}

export default App;
