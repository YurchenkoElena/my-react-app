import React from "react";
import './css/App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content'

const App = (props) => {
  return (
      <div className="App-wrapper">
          <Header />
          <Content store={props.store} />
      </div>
  );
}

export default App;
