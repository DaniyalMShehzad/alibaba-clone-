import './App.css';
import Cards from './cards/card';
import Card2 from './cards/card2';
import Cards3 from './cards/card3';
import Cards4 from './cards/card4';
import Cards5 from './cards/cards5';
import Cards6 from './cards/cards6';
import Cards7 from './cards/cards7';
import Cards8 from './cards/cards8';
import Cards9 from './cards/cards9';
import Footer from './footer/footer';
import DenseAppBar from './navbar/navbar';
import Navbar2 from './navbar/navbar2';
import Slider1 from './slider/slider1';

function App() {
  return (
    <div className="App">
      <DenseAppBar/>
      <Navbar2/>
      <div className="main-App">
      <Slider1/>
      <Cards/>
      <Card2/>
      <Cards3/>
      <Cards4/>
      <Cards5/>
      <Cards9/>
      <Cards6/>
      <Cards7/>
      <Cards8/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
