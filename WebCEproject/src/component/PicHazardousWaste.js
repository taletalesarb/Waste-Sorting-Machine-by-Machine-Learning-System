import './Picwaste.css'

function PicHazardousWaste(props){
    
    const {HazardousWaste, size} = props;
    if (size === "small") {
        return (
          <div>
            <div className="picwaste">
              
              <img className="ph" src={HazardousWaste.picUrl} />
            </div>
          </div>
        );
      } else if (size === "zoom") {
        return (
          <div>
            <div className="picwasteZoom">
              {/* <p>{GeneralWaste.name}</p> */}
              <img className="respic" src={HazardousWaste.picUrl} width="100px" height="100px" />
            </div>
          </div>
        );
      }
      else if (size === "highlight") {
        return (
          <div>
            <div className="picwasteHighlight">
              {/* <p>{GeneralWaste.name}</p> */}
              <img className="ph" src={HazardousWaste.picUrl} />
            </div>
          </div>
        );
      }
}
export default PicHazardousWaste;