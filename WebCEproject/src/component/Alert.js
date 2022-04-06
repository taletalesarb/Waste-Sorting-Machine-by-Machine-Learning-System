import "./Alert.css";

function Alert(props) {

    const {date} = props;
    
    function popupnone(){
      document.getElementById("popup").style.display = "none";
      
    }
    
    return (
      <div id = "popup">
        <div className="conalert">
          <p>You select date "{date}".</p>
          <button className="closebt" onClick={popupnone}>close</button>
        </div>
      </div>
    );
    }

export default Alert;
