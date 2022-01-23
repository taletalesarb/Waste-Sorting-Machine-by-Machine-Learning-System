import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Table from './component/Table';
import Select from './component/Select';
import Date from './component/Date';
import Graph from './component/Graph';


function App() {
  return (
    
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Acme&display=swap" rel="stylesheet"></link>
      <Header />
      {/* <Table /> */}
      <Date />
      <Graph />
      {/* <Select /> */}
    </div>
    
  );
}

export default App;
