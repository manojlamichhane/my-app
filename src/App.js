import './App.css';
import Events from './Components/Events/Events';
import Header from './Components/Header/Header'
import Next from './Components/Next/Next';
import Products from './Components/Products';
import Services from './Components/Services/Services';
import Footer from './Components/Footer'

function App() {
  return (
    <div >
      <Header/>
      <Services/>
      <Products/>
      <Next/>     
      <Events/>
      <Footer/>      
    </div>
  );
}

export default App;