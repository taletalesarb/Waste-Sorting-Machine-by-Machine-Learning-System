import "./Picwaste.css";
// import a from '../picture/bin.png' {var}
function PicGeneralWaste(props) {
  const { GeneralWaste, size } = props;

  if (size === "small") {
    return (
      <div>
        <div className="picwaste">
          <img src={GeneralWaste.picUrl} width="60px" height="60px" />
        </div>
      </div>
    );
  } else if (size === "zoom") {
    return (
      <div>
        <div className="picwasteZoom">
          <img className="respic" src={GeneralWaste.picUrl} width="100px" height="100px" />
        </div>
      </div>
    );
  } else if (size === "highlight") {
    return (
      <div>
        <div className="picwasteHighlight">
          <img src={GeneralWaste.picUrl} width="60px" height="60px" />
        </div>
      </div>
    );
  }
}
export default PicGeneralWaste;