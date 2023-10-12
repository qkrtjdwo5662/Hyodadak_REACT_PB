import logo from './logo.svg';
import './App.css';

import Test from './components/Test';
import ButtonTest from './components/ButtonTest';
import BtnToNaver from './components/BtnToNaver';
import BtnToNaver2 from './components/BtnToNaver2';

import ClassState from './components/ClassState';
import FuntionalState from './components/FunctionalState';
import ChangeState from './components/ChangeState';
function App() {
  return (
    <div className="App">
      <Test />
      <ButtonTest />
      <BtnToNaver/>
      <br/>
      <BtnToNaver2/>
      <br/>
      <ClassState/>
      <br/>
      <FuntionalState/>
      <br/>
      <ChangeState />
    </div>
    
  );
}

export default App;
