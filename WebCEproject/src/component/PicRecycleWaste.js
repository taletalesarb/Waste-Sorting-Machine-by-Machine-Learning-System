import './Picwaste.css'

function PicRecycleWaste(props){
    const {RecycleWaste, size} = props;
    if (size === "small") {
        return (
          <div>
            <div className="picwaste">
              <img className="ph" src={RecycleWaste.picUrl} />
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
              <img className="ph" src={RecycleWaste.picUrl} />
            </div>
          </div>
        );
      }
}
export default PicRecycleWaste;