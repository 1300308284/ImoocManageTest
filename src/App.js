import React from 'react';
import './App.css';
import ComponentTest from './components/ComponentTest'

function App(state,props) {
  console.log("最外面的包裹组件app, 是个函数组件,没有state,props,this>>",state, props, this)
  return (
    <div className="App">
      <header className="App-header">
        <ComponentTest >

        </ComponentTest>
        
      </header>
    </div>
  );
}

export default App;
console.log("export export >>", React.Component)
