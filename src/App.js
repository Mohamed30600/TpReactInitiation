import './css/App.css';
import PremierNoeud from './components/PremierNoeud';
import SecondNoeud from './components/SecondNoeud';
import TroisiemeNoeud from './components/TroisiemeNoeud'
import ListPersonn from './components/ListPersonn';


function App() {
  
  return (
    <div>
      
      {/* <div  className='Digi-header'>
      <PremierNoeud />
      </div>
      <div className='Digi-main'>
      <SecondNoeud />
      </div>
      <div className='Digi-footer'>
      <TroisiemeNoeud />
      </div> */}
        <h1 className=''>Crud react avec condition formulaire</h1>
    <ListPersonn/>
     
      
    </div>
  );
}

export default App;
