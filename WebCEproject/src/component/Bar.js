import './Bar.css'

// import a from '../picture/bin.png' {var}
import PicGeneralWaste from './PicGeneralWaste';
import PictureGeneralWaste from '../data/PictureGeneralWaste';

import PicRecycleWaste from './PicRecycleWaste';
import PictureRecycleWaste from '../data/PictureRecycleWaste';

import PicHazardousWaste from './PicHazardousWaste';
import PictureHazardousWaste from '../data/PictureHazardousWaste';


import { GeneralWasteElementsHighlight } from './PicGeneralWaste';
import { RecycleWasteElementsHighlight } from './PicRecycleWaste';
import { HazardousWasteElementsHighlight } from './PicHazardousWaste';

export const GeneralWasteElements = PictureGeneralWaste.map((GeneralWaste, index) => {
    return <PicGeneralWaste key={index} GeneralWaste={GeneralWaste} size="small" />;
});
  
export const RecycleWasteElements = PictureRecycleWaste.map((RecycleWaste, index) => {
    return <PicRecycleWaste key={index} RecycleWaste={RecycleWaste} size="small"/>;
});

export const HazardousWasteElements = PictureHazardousWaste.map((HazardousWaste, index) => {
    return <PicHazardousWaste key={index} HazardousWaste={HazardousWaste} size="small"/>;
});


function Bar(props) {
    
    const {type, ind} = props;
    
    if(type==="1"){
        
        return(
            <div className="barg">
                <div className="flex">
                    {GeneralWasteElements.slice(0,ind)}
                    {GeneralWasteElementsHighlight[ind]}
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
                  {RecycleWasteElementsHighlight[ind]}
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
                    {HazardousWasteElementsHighlight[ind]}
                    {HazardousWasteElements.slice(ind+1,HazardousWasteElements.length)}
                </div>
            </div>
        );
    }

}
export default Bar;