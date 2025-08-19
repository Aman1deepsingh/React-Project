// import logo from './logo.svg';
import './App.css';
// import { useEffect, useState } from 'react';
import HelloWorld from './components/Hello';
import Class from './components/Class';
import ArrayMethods from './components/ArrayMethods';
import Destructuring from './components/Destructuring';
import SpreadOperator from './components/SpreadOperator';
import Module from './components/Module';
import Ternary from './components/Ternary';
import RenderHTML from './components/RenderHTML';
import JSX from './components/JSX';
import Card from './components/Components';
import Props from './components/Props';
import Events from './components/Events';
import Conditional from './components/Conditional';
import List from './components/List';
import Forms from './components/Forms';
import Memo from './components/Memo';
import UseStateHook from './components/hooks/UseState';
import UseContext from './components/hooks/UseContext';
import UseRef from './components/hooks/UseRef';
import UseReducer from './components/hooks/UseReducer';
import UseCallback from './components/hooks/UseCallback';
import UseMemo from './components/hooks/UseMemo';
import Git from './components/Git';
import Modules from './components/Modules';


function App() {
  // const [data, setData] = useState();
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch('/api')
  //     .then(res => res.json())
  //     .then(data => setData(data.message))
  //     .catch(err => setData(err))
  // }, [data])

  // useEffect(() => {
  //   fetch('/api/items')
  //     .then(res => res.json())
  //     .then(data => setItems(data))
  //     .catch(err => setItems(err))
  // }, [items])
  return (

    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? 'Loading...': data}</p>
        <p>Items</p>
        <ul>{!items.length ? "Loading" : items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}</ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <HelloWorld />
      <Class />
      <ArrayMethods />
      <Destructuring />
      <SpreadOperator />
      <Module />
      <Ternary />
      <RenderHTML />
      <JSX />
      <Card width="200px" height="250px" />
      <Props message="Prop component" />
      <Events />
      <Conditional />
      <List />
      <Forms />
      <Memo />
      <UseStateHook />
      {/* <UseEffect /> */}
      <UseContext />
      <UseRef />
      <UseReducer />
      <UseCallback />
      <UseMemo />
      <Git />
      <Modules />
    </div>
  )
}

export default App;
