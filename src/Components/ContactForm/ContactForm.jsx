import React, {useState} from 'react'
import LabelInputField from '../Utils/LabelInputField/LabelInputField'
import LabelTextArea from '../Utils/LabelTextArea/LabelTextArea'
import './ContactForm.css'

export default function ContactForm() {
    const [name, setName] = useState('')
    const [nameErrorMsg, setNameErrorMsg] = useState('Field Required')
    const [nameErrorFlag, setNameErrorFlag] = useState(false)

    const [phone, setPhone] = useState('')
    const [phoneErrorMsg, setPhoneErrorMsg] = useState('Field Required')
    const [phoneErrorFlag, setPhoneErrorFlag] = useState(false)

    const [email, setEmail] = useState('')
    const [emailErrorMsg, setEmailErrorMsg] = useState('Field Required')
    const [emailErrorFlag, setEmailErrorFlag] = useState(false)

    const [request, setRequest] = useState('')
    

    const nameHandler = (e) =>{
        //alert(e.target.value)
        const RegExp = /^[a-zA-Z ]+$/
        const validReg = RegExp.test(e.target.value)
        // alert(validReg)
        if(validReg){
            setNameErrorFlag(false)
        }
        else{
            if(e.target.value === '')
                setNameErrorFlag(false)
            else{
                setNameErrorMsg('Only Alphabets are allowed')
                setNameErrorFlag(true)
            }
                
        }

        setName(e.target.value)
    }
    
    const phoneHandler = (e) =>{
        const RegExp = /^[0-9-]+$/
        const validReg = RegExp.test(e.target.value)
        // alert(validReg)
        if(validReg){
            setPhoneErrorFlag(false)
        }
        else{
            if(e.target.value === '')
                setPhoneErrorFlag(false)
            else{
                setPhoneErrorMsg('Only Numbers are allowed')
                setPhoneErrorFlag(true)
            }
        }

        setPhone(e.target.value)
    }

    const emailHandler = (e) =>{
        //alert(e.target.value)
        const RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const validReg = RegExp.test(e.target.value)
        
        if(validReg){
            setEmailErrorFlag(false)
        }
        else{
            if(e.target.value === '')
                setEmailErrorFlag(false)
            else{
                setEmailErrorMsg('A valid email is required')
                setEmailErrorFlag(true)
            }
        }

        setEmail(e.target.value)
    }

    const requestHandler = (e)=>{
        setRequest(e.target.value)
    }


    return (
        <section id="#contact-form">
        <div className="contact-form">
        <div className="container">
            <div className="row">
                <div className="col-md-2 col-sm-2"></div>
                <div className="col-md-8 col-sm-8">
                    <div className="contact-form-main-title">
                        <h1>HAVE ANY QUESTIONS?</h1>
                    </div>
                </div>
                <div className="col-md-2 col-sm-2"></div>
            </div> 
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <div className="name-field">
                        <LabelInputField
                            type="text"
                            name="Full Name"
                            labelText={"Full Name"}
                            placeHolder={"Your good name"}
                            maxLength={30}
                            value={name}
                            onChange={nameHandler}
                            errorMsg={nameErrorMsg}
                            errorFlag={nameErrorFlag}
                            required={true}
                            labelColor={'white'}
                        />
                    </div>
                </div>
                <div className="col-sm-2"></div>
            </div>    
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-4">
                    <div className="phone-field">
                        <LabelInputField
                            type="text"
                            name="Phone Number"
                            labelText={"Phone Number"}
                            placeHolder={"Your phone number"}
                            value={phone}
                            onChange={phoneHandler}
                            errorMsg={phoneErrorMsg}
                            errorFlag={phoneErrorFlag}
                            required={true}
                            labelColor={'white'}
                        />
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="phone-field">
                        <LabelInputField
                            type="text"
                            name="Email"
                            labelText={"Email"}
                            placeHolder={"Your email id"}
                            maxLength={30}
                            value={email}
                            onChange={emailHandler}
                            errorMsg={emailErrorMsg}
                            errorFlag={emailErrorFlag}
                            required={true}
                            labelColor={'white'}
                        />
                    </div>
                </div>
                <div className="col-sm-2"></div>
            </div>
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <div className="request-field">
                        <LabelTextArea
                            name="Request"
                            labelText={"Message"}
                            placeHolder={"Enter detailed message here"}
                            maxLength={340}
                            value={request}
                            onChange={requestHandler}
                            labelColor={'white'}
                        />
                    </div>
                </div>
                <div className="col-sm-2"></div>
            </div>
            <div className="row">
                <div className="col-sm-6"></div>
                <div className="col-sm-4">
                    <div className="contact-button-section">
                        <button className="submit-btn">
                            Submit
                        </button>
                    </div>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>
        </div>
        </section>
    )
}
