import './Picwaste.css'
import PictureRecycleWaste from '../data/PictureRecycleWaste';

export const RecycleWasteElementsHighlight = PictureRecycleWaste.map((RecycleWaste, index) => {
  return <PicRecycleWaste key={index} RecycleWaste={RecycleWaste} size="highlight"/>;
});

function PicRecycleWaste(props){
    
    const {RecycleWaste, size} = props;
    if (size === "small") {
        return (
          <div>
            <div className="picwaste">
              {/* <p>{GeneralWaste.name}</p> */}
              <img src={RecycleWaste.picUrl} width="60px" height="60px" />
            </div>
          </div>
        );
      } else if (size === "zoom") {
        return (
          <div>
            <div className="picwasteZoom">
              {/* <p>{GeneralWaste.name}</p> */}
              <img className="respic" src={RecycleWaste.picUrl} width="100px" height="100px" />
            </div>
          </div>
        );
      }
      else if (size === "highlight") {
        return (
          <div>
            <div className="picwasteHighlight">
              {/* <p>{GeneralWaste.name}</p> */}
              <img src={RecycleWaste.picUrl} width="60px" height="60px" />
            </div>
          </div>
        );
      }
}
export default PicRecycleWaste;