import './Table.css'
function Table(){
    return(
        <div className="container2">
            <table id="Amount">
                <tr>
                <th className="one"></th>
                <th className="one">Amount of waste (pieces)</th>
                </tr>
                <tr>
                <th className="two">General Waste</th>
                </tr>
                <tr>
                <th className="three">Recycle Waste</th>
                </tr>
                <tr>
                <th className="four">Hazardous Waste</th>
                </tr>
            </table>
        </div>
    );
}
export default Table;
