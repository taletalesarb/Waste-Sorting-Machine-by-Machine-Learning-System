import './Bar.css'

// import a from '../picture/bin.png' {var}

function Bar(props) {
    
    const {type, ind, GeneralWasteElements,RecycleWasteElements,HazardousWasteElements, GH , RH , HH } = props;
    
    if(type==="1"){
        
        return(
            <div className="barg">
                <div className="flex">
                    {GeneralWasteElements.slice(0,ind)}
                    {GH[ind]}
                    {GeneralWasteElements.slice(ind+1,GeneralWasteElements.length)}
                    
                </div>
            </div>
            );
    }

    else if(type==="2" ){
        return(
          <div className="barr">
              <div className="flex">
                  {RecycleWasteElements.slice(0,ind)}
                  {RH[ind]}
                  {RecycleWasteElements.slice(ind+1,RecycleWasteElements.length)}
              </div>
          </div>
      );
      }
    else{
        return(
            <div className="barh">
                <div  className="flex">
                    {HazardousWasteElements.slice(0,ind)}
                    {HH[ind]}
                    {HazardousWasteElements.slice(ind+1,HazardousWasteElements.length)}
                </div>
            </div>
        );
    }

}
export default Bar;