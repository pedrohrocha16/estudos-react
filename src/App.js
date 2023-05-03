import './App.css';
import MeuPrimeiroComponent from './components/MeuPrimeiroComponent';
import ComponentReaproveitavel from './components/ComponentReaproveitavel';
import ComponentProps from './components/ComponentProps';

function App() {
  return (
    <div className="App"> 
      <MeuPrimeiroComponent />
      <ComponentReaproveitavel />
      <ComponentReaproveitavel />
      <ComponentProps valor='Você é incrível, não desista dos seus sonhos!'/>
    </div>
  );
}

export default App;
