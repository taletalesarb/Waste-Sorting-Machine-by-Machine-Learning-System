import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Table from "./component/Table";
import Select from "./component/Select";

import Bar from "./component/Bar";

import Graph from "./component/Graph";
import Date from "./component/Date";
import MaterialUIPickers from "./component/Date";


function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css2?family=Acme&display=swap"
        rel="stylesheet"
      ></link>
      
      <Header />
      {/* <Graph/> */}
      
      <Table />
      {/* <MaterialUIPickers /> */}
    </div>
  );
}

export default App;

