import './Bar.css'
// import a from '../picture/bin.png' {var}
import PicGeneralWaste from './Picwaste';
import PictureGeneralWaste from '../data/PictureGeneralWaste';

function Bar(){
    const GeneralWasteElements = PictureGeneralWaste.map((GeneralWaste, index) => {
        return <PicGeneralWaste key={index} GeneralWaste={GeneralWaste} />;
      });

    return(
        <div className='bar'>
            <div className="grid">
                {GeneralWasteElements}
            </div>
        </div>
    );
}
export default Bar;