import './App.css';                        
import Cards from './cards/card';          
import Card2 from './cards/card2';         
import Cards3 from './cards/card3';        
import Cards4 from './cards/card4';        
import Card10 from './cards/cards10';      
import Cards11 from './cards/cards11';      
import Cards12 from './cards/cards12';      
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
      <Card10/>                           
      <Cards6/>                           
      <Cards7/>                           
      <Cards11/>                          
      <Cards8/>                           
      </div>                              
      <Cards12/>                          
      <Footer/>                           
    </div> 
  );                                                                                                                                                             
}
export default App;    