import './Picwaste.css'

// import a from '../picture/bin.png' {var}

function PicGeneralWaste(props){
    
    const {GeneralWaste} = props;
    return(
        <div>
            <div className='picwaste'>
                {/* <p>{GeneralWaste.name}</p> */}
                <img src={GeneralWaste.picUrl} width="80px" height="80px" />
            </div>
        </div>
    );
}
export default PicGeneralWaste;