import "./Picwaste.css";

// import a from '../picture/bin.png' {var}
//import indexpic from './Select';

import PictureGeneralWaste from "../data/PictureGeneralWaste";

function PicGeneralWaste(props) {
  const { GeneralWaste, size } = props;

  if (size === "small") {
    return (
      <div>
        <div className="picwaste">
          {/* <p>{GeneralWaste.name}</p> */}
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
