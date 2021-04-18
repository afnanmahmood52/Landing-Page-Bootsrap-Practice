import React from 'react'
import './LabelInputField.css'


export default function LabelInputField(props) {
    
    const {type, name, maxlength, value, onChange, errorMsg, errorFlag, labelText, required, placeHolder, disabled} = props

    return (
        <div className="input-container">
            <label for class="input-label">{labelText}{required ?<span style={{color:'red'}}>*</span>:null}</label>   

            <div className="input-container-field">
                <input class="input-field" id="" type={type} name={name} maxlength={maxlength} value={value} onChange={onChange} placeholder={placeHolder} disabled={disabled}/>
                <p className="input-field-err-msg" style={{display: errorFlag ? "inline-block":"none"}}>{errorMsg}</p>
            </div>
        </div>
    )
}
