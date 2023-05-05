import './App.css';
import MeuPrimeiroComponent from './components/MeuPrimeiroComponent';
import ComponentReaproveitavel from './components/ComponentReaproveitavel';
import ComponentProps from './components/ComponentProps';
import ComponentPropsStruct from './components/ComponentPropsStruct';
import ComponentEstilos from './components/ComponentEstilos';
import ComponentFragments from './components/ComponentFragments';
import ComponentList from './components/ComponentList';
import ComponentImg from './components/ComponentImg';
import ComponentsEvents from './components/ComponentsEvents';
import EventForm from './components/EventForm';
import EventoButton from './components/EventoButton';
import PegandoDados from './components/PegandoDados';



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
      <ComponentsEvents />
      <EventForm />
      <EventoButton />
      <PegandoDados />
    </div>
  );
}

export default App;
