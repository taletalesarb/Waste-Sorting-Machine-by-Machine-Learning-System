import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Table from "./component/Table";
import Select from "./component/Select";
import PicGeneralWaste from "./component/Picwaste";
import Bar from "./component/Bar";

function App() {
  
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Acme&display=swap" rel="stylesheet"></link>
      <Header />
      <Table />
      {/* {GeneralWasteElements} */}
      {/* <Select /> */}
      <Bar />
      
    </div>
  );
}

export default App;
