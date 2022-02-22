import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Table from "./component/Table";
import Select from "./component/Select";
import PicGeneralWaste from "./component/PicGeneralWaste";
import Bar from "./component/Bar";

import Graph from "./component/Graph";
//import MaterialUIPickers from "./component/Date";

function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css2?family=Acme&display=swap"
        rel="stylesheet"
      ></link>

      <Header />
      <Table />
      
      {/* <Bar /> */}
      
    </div>
  );
}

export default App;
