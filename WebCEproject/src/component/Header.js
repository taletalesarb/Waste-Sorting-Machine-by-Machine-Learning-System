import './Header.css'
// import a from '../picture/bin.png' {var}

import Date from "./Date";

function Header(props){
    const { newDate, value } = props;
    return(
        <div>
            <div className="container1">
                <p className="x"></p>   
                <p class="header">
                <img className="logo" src = {require('../picture/bin.png')} width="30" height="30" />Waste Sorting Machine by Machine Learning System            
                </p>

                <p><Date newDate={newDate} value={value}/></p>
            
            </div>
           
        </div>
    );
}
export default Header;