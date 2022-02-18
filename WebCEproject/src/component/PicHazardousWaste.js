import './Picwaste.css'

function PicHazardousWaste(props){
    
    const {HazardousWaste, size} = props;
    if (size == "small") {
        return (
          <div>
            <div className="picwaste">
              {/* <p>{GeneralWaste.name}</p> */}
              <img src={HazardousWaste.picUrl} width="80px" height="80px" />
            </div>
          </div>
        );
      } else if (size == "zoom") {
        return (
          <div>
            <div className="picwaste">
              {/* <p>{GeneralWaste.name}</p> */}
              <img src={HazardousWaste.picUrl} width="100px" height="100px" />
            </div>
          </div>
        );
      }
}
export default PicHazardousWaste;