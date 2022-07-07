
import './display.css'

function CreateList(item){
    return(
        <li className="listItem">{item}</li>
    )
}
function Display(props){

    return(
        <div className="displayBox">
        <ul>
        {props.list.map(CreateList)}
        </ul>
        
        </div>
    )
};
export default Display;