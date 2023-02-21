import './css/App.css';
import PremierNoeud from './components/PremierNoeud';
import SecondNoeud from './components/SecondNoeud';
import TroisiemeNoeud from './components/TroisiemeNoeud'


function App() {
  
  return (
    <div>
      
      <div  className='Digi-header'>
      <PremierNoeud />
      </div>
      <div className='Digi-main'>
      <SecondNoeud />
      </div>
      <div className='Digi-footer'>
      <TroisiemeNoeud />
      </div>
     
      
    </div>
  );
}

export default App;
