import './Picwaste.css'

function PicRecycleWaste(props){
    
    const {RecycleWaste, size} = props;
    if (size === "small") {
        return (
          <div>
            <div className="picwaste">
              {/* <p>{GeneralWaste.name}</p> */}
              <img src={RecycleWaste.picUrl} width="80px" height="80px" />
            </div>
          </div>
        );
      } else if (size === "zoom") {
        return (
          <div>
            <div className="picwasteZoom">
              {/* <p>{GeneralWaste.name}</p> */}
              <img src={RecycleWaste.picUrl} width="100px" height="100px" />
            </div>
          </div>
        );
      }
}
export default PicRecycleWaste;