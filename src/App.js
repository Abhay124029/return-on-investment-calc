import './App.css';
import Header from "./Components/Header"
import Input from "./Components/InputWithToggle"
import TimeFrame from './Components/TimeFrame';
import ApyComp from './Components/ApyComp';
import Details from './Components/Details';
import InputApy from './Components/InputApy';
import { CreateRoiContext } from './RoiContext';

function App() {
  return (
    <CreateRoiContext>
    <div className="App">
     <Header/>
     <Input/>
     <TimeFrame/>
     <ApyComp/>
     <InputApy/>
     <Details/>
    </div>
    </CreateRoiContext>
  );
}

export default App;



