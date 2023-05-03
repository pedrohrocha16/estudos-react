import './App.css';
import MeuPrimeiroComponent from './components/MeuPrimeiroComponent';
import ComponentReaproveitavel from './components/ComponentReaproveitavel';
import ComponentProps from './components/ComponentProps';
import ComponentPropsStruct from './components/ComponentPropsStruct';
import ComponentEstilos from './components/ComponentEstilos';

function App() {
  return (
    <div className="App"> 
      <MeuPrimeiroComponent />
      <ComponentReaproveitavel />
      <ComponentReaproveitavel />
      <ComponentProps valor='Você é incrível, não desista dos seus sonhos!'/>
      <ComponentPropsStruct tec='ReactJS'/>
      <ComponentEstilos />
    </div>
  );
}

export default App;
