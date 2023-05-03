import './App.css';
import MeuPrimeiroComponent from './components/MeuPrimeiroComponent';
import ComponentReaproveitavel from './components/ComponentReaproveitavel';
import ComponentProps from './components/ComponentProps';
import ComponentPropsStruct from './components/ComponentPropsStruct';
import ComponentEstilos from './components/ComponentEstilos';
import ComponentFragments from './components/ComponentFragments';
import ComponentList from './components/ComponentList';
import ComponentImg from './components/ComponentImg';

function App() {
  return (
    <div className="App"> 
      <MeuPrimeiroComponent />
      <ComponentReaproveitavel />
      <ComponentReaproveitavel />
      <ComponentProps valor='Você é incrível, não desista dos seus sonhos!'/>
      <ComponentPropsStruct tec='ReactJS'/>
      <ComponentEstilos />
      <ComponentFragments />
      <ComponentList />
      <ComponentImg />
    </div>
  );
}

export default App;
