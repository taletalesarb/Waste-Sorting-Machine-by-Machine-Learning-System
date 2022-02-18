import "./Picwaste.css";

// import a from '../picture/bin.png' {var}

function PicGeneralWaste(props) {
  const { GeneralWaste, size } = props;
  if (size == "small") {
    return (
      <div>
        <div className="picwaste">
          {/* <p>{GeneralWaste.name}</p> */}
          <img src={GeneralWaste.picUrl} width="80px" height="80px" />
        </div>
      </div>
    );
  } else if (size == "zoom") {
    return (
      <div>
        <div className="picwaste">
          {/* <p>{GeneralWaste.name}</p> */}
          <img src={GeneralWaste.picUrl} width="100px" height="100px" />
        </div>
      </div>
    );
  }
}
export default PicGeneralWaste;
