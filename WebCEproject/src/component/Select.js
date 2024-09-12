
import "./Select.css";

function Select() {
  return (
    <div>
      <div className="container-select">
        <div className="container-pic"></div>

        <div className="container-text-button">

          <p>Waste</p>
          <br/>

          <button className="button-select">
            <img src={require("../picture/left.png")} width="30" height="30" />
          </button>
          
          <button className="button-select">
            <img src={require("../picture/right.png")} width="30" height="30" />
          </button>
        </div>
      </div>

      <div className="bar"></div>
    </div>
  );
}
export default Select;
