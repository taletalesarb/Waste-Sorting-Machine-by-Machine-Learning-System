import './Picwaste.css'
import PictureHazardousWaste from '../data/PictureHazardousWaste';

export const HazardousWasteElementsHighlight = PictureHazardousWaste.map((HazardousWaste, index) => {
  return <PicHazardousWaste key={index} HazardousWaste={HazardousWaste} size="highlight"/>;
});

function PicHazardousWaste(props){
    
    const {HazardousWaste, size} = props;
    if (size === "small") {
        return (
          <div>
            <div className="picwaste">
              {/* <p>{GeneralWaste.name}</p> */}
              <img src={HazardousWaste.picUrl} width="80px" height="80px" />
            </div>
          </div>
        );
      } else if (size === "zoom") {
        return (
          <div>
            <div className="picwasteZoom">
              {/* <p>{GeneralWaste.name}</p> */}
              <img src={HazardousWaste.picUrl} width="100px" height="100px" />
            </div>
          </div>
        );
      }
      else if (size === "highlight") {
        return (
          <div>
            <div className="picwasteHighlight">
              {/* <p>{GeneralWaste.name}</p> */}
              <img src={HazardousWaste.picUrl} width="80px" height="80px" />
            </div>
          </div>
        );
      }
}
export default PicHazardousWaste;