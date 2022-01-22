import './Header.css'
// import a from '../picture/bin.png' {var}
function Header(){
    return(
        <div>
            <div class="container1">
            <p class="header">
            <img src = {require('../picture/bin.png')} width="30" height="30" />Waste Sorting Machine by Machine Learning System</p>
            </div>
            <br/><br/>
        </div>
    );
}
export default Header;