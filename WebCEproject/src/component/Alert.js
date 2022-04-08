import "./Alert.css";

function Alert(props) {

    const {date} = props;

    function popupnone(){
      document.getElementById("popup").style.display = "none";
    }

    function three(){
      document.getElementById("timer").innerHTML = "close (3s)";
    }
    function two(){
      document.getElementById("timer").innerHTML = "close (2s)";
    }
    function one(){
      document.getElementById("timer").innerHTML = "close (1s)";
    }
    function zero(){
      document.getElementById("timer").innerHTML = "close";
    }

    setTimeout(popupnone,4000);
    setTimeout(three, 1000);
    setTimeout(two, 2000);
    setTimeout(one, 3000);
    setTimeout(zero, 0);

    return (
      <div id = "popup">
        <div className="conalert">
          <p>You select date "{date}".</p>
          <button id ="timer" className="closebt" onClick={popupnone}>close</button>
        </div>
      </div>
    );
    };
export default Alert;