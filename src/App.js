import './App.css';
import CounterClass from './Components/ClassComponents/CounterClass';
import CounterFunctional from './Components/FunctionalComponents/CounterFunctional';
import Greeting from './Components/FunctionalComponents/Greetings';

function App() {
  return (
    <div>
      <Greeting />
       <CounterClass />
      <CounterFunctional />
    </div>
  );
}

export default App;
