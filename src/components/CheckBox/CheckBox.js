import React,{useState} from "react";
import "../../pages/Menu/MenuStyle.css";

const CheckBox = ({handleFilters,list}) => {
    const [Checked,setChecked] = useState([]);

    const hadleToggle = (value) => {
        const currentIndex = Checked.indexOf(value);
        const newChecked =[...Checked];

        if(currentIndex === -1) {
            newChecked.push(value)
        }else {
            newChecked.splice(currentIndex,1)
        }
        setChecked(newChecked)
        handleFilters(newChecked)
    };

    const renderCheckBoxLists = () => list && list.map((value,index)=> (
        <li key = {index} >
            <div className="checkbox ml-3">
                <label>
                    <input onChange={()=> hadleToggle(value.name)} type ="checkbox" checked = {Checked.indexOf(value.name) === -1 ? false:true}/>
                    <span className="cr">
                        <i className="cr-icon fas fa-check"></i>
                    </span>
                    {value.name}
                </label>
            </div>
        </li>
    ));

    return (
         <ul className="list-unstyled">
            {renderCheckBoxLists()}
         </ul>
    )
}
export default CheckBox;