import './Picwaste.css'

function PicRecycleWaste(props){
    const {RecycleWaste, size} = props;
    if (size === "small") {
        return (
          <div>
            <div className="picwaste">
              <img src={RecycleWaste.picUrl} width="60px" height="60px" />
            </div>
          </div>
        );
      } else if (size === "zoom") {
        return (
          <div>
            <div className="picwasteZoom">
              <img className="respic" src={RecycleWaste.picUrl} width="100px" height="100px" />
            </div>
          </div>
        );
      }
      else if (size === "highlight") {
        return (
          <div>
            <div className="picwasteHighlight">
              <img src={RecycleWaste.picUrl} width="60px" height="60px" />
            </div>
          </div>
        );
      }
}
export default PicRecycleWaste;