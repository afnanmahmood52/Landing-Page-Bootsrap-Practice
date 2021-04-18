import React from 'react'
import './LabelInputField.css'


export default function LabelInputField(props) {
    
    const {type, name, maxLength, value, onChange, errorMsg, errorFlag, labelText, required, placeHolder, disabled, labelColor} = props

    return (
        <div className="input-container">
            <label for class="input-label" style={{'color':labelColor}}>{labelText}{required ?<span style={{color:'red'}}>*</span>:null}</label>   

            <div className="input-container-field">
                <input class="input-field" id="" type={type} name={name} maxlength={maxLength} value={value} onChange={onChange} placeholder={placeHolder} disabled={disabled}/>
                <p className="input-field-err-msg" style={{display: errorFlag ? "inline-block":"none"}}>{errorMsg}</p>
            </div>
        </div>
    )
}
