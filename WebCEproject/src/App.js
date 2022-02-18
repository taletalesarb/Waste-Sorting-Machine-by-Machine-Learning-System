import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Table from "./component/Table";
import Select from "./component/Select";
import PicGeneralWaste from "./component/PicGeneralWaste";
import Bar from "./component/Bar";
//import {MaterialUIPickers} from "./component/Date";
import {Demo} from "./component/Graph";



function App() {

  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Acme&display=swap" rel="stylesheet"></link>
      <Header />
      
      <Table />
      

      {/* {GeneralWasteElements} */}
      {/* <Select /> */}
      {/* <Bar type ="2"/> */}
      
      {/* <Bar /> */}
      
    </div>
  );
}

export default App;