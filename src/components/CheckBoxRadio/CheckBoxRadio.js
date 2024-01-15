import React,{useState} from "react";

const CheckBoxRadio = ({handleFilters,list}) => {
    const [Value,setValue] = useState('0');

    const renderRadioBox = () => (
        list && list.map((value)=> (
            <div key = {value.id} className="checkebox ml-3">
                <label>
                    <input type ="radio"
                    name ="price"
                    value = {`${value.id}`}/>
                    <span className="cr"><i className="cr-icon fas fa-check"></i></span>
                     {value.name}
                </label>
            </div>
        ))
    );

    const handleChange = (event) => {
        setValue(event.target.value)
        handleFilters(event.target.value)
    };

    return (
        <ul className="list-unstyled">
            <li onChange = {handleChange} value={Value}>
                {renderRadioBox()}
            </li>
        </ul>
    );
}

export default CheckBoxRadio;