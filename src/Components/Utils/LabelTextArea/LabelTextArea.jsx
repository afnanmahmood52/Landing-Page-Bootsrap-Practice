import React from 'react'
import './LabelTextArea.css'


export default function LabelTextArea(props) {
    
    const { name, maxLength, value, onChange, labelText, required, placeHolder, disabled, labelColor} = props

    return (
        <div className="input-container">
            <label for class="input-label" style={{'color':labelColor}}>{labelText}{required ?<span style={{color:'red'}}>*</span>:null}</label>   

            <div className="input-container-field">
                <textarea class="input-textarea-field" id="" name={name} maxlength={maxLength} value={value} onChange={onChange} placeholder={placeHolder} disabled={disabled}/>
            </div>
        </div>
    )
}
