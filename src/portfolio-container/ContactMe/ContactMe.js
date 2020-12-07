import React from 'react'
import { useForm } from 'react-hook-form'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import './ContactMe.css'

const ContactMe = (props) => {
    
    /* HOOKS TO BE USED */
    const { register, handleSubmit, errors } = useForm();

    const getFormFields = () => {
        /*
         FORM STATIC DATA */
        let textFieldOptions = { your_name: { type: 'input', placeholder: 'Your Name', name: 'name', validations: { required: 'Your Name is required' } },
                                 your_email: { type: 'input', placeholder: 'Your Email Address', name: 'email', validations: { required: 'Your Email Address is required', pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ } },
                                 subject: { type: 'input', placeholder: 'Subject', name: 'subject', validations: { required: 'Subject is required' } },
                                 your_message: { type: 'text-area', placeholder: 'Your message', name: 'message', validations: { required: 'Your message is required' } }};   
                            
        return (
            <div className="form-field-container">
                <div className="text-field-container">
                        <input type="text" placeholder={textFieldOptions.your_name.placeholder} ref={register(textFieldOptions.your_name.validations)} name={textFieldOptions.your_name.name} className={`text-field ${ errors[textFieldOptions.your_name.name] ? 'red-border' : ''}`} />
                        { errors[textFieldOptions.your_name.name] && <div className="text-field-error"> <div className="error-pointer"></div> <span> { errors[textFieldOptions.your_name.name].message }</span> </div> }
                </div>
                <div className="text-field-container">
                        <input type="text" placeholder={textFieldOptions.your_email.placeholder} ref={register(textFieldOptions.your_email.validations)} name={textFieldOptions.your_email.name} className={`text-field ${ errors[textFieldOptions.your_email.name] ? 'red-border' : ''}`} />
                        { errors[textFieldOptions.your_email.name] && <div className="text-field-error"> <div className="error-pointer"></div> <span> { errors[textFieldOptions.your_email.name].message }</span> <span> { (errors[textFieldOptions.your_email.name] && !errors[textFieldOptions.your_email.name].message) ? 'Email is invalid' : '' } </span> </div> }
                </div>
                <div className="text-field-container">
                        <input type="text" placeholder={textFieldOptions.subject.placeholder} ref={register(textFieldOptions.subject.validations)} name={textFieldOptions.subject.name} className={`text-field ${ errors[textFieldOptions.subject.name] ? 'red-border' : ''}`} />
                        { errors[textFieldOptions.subject.name] && <div className="text-field-error"> <div className="error-pointer"></div> <span> { errors[textFieldOptions.subject.name].message }</span> </div> }
                </div>
                <div className="text-field-container text-area-container">
                        <textarea placeholder={textFieldOptions.your_message.placeholder} ref={register(textFieldOptions.your_message.validations)} name={textFieldOptions.your_message.name} className={`text-field text-field-area ${ errors[textFieldOptions.your_message.name] ? 'red-border' : ''}`}></textarea>
                        { errors[textFieldOptions.your_message.name] && <div className="text-field-error"> <div className="error-pointer"></div> <span> { errors[textFieldOptions.your_message.name].message }</span> </div> }
                </div>
            </div>
        )
    }  

    const handleFormSubmission = (data) => {
        console.log((data));
    }

    

    return (
        <div className="contact-me-container">
            <ScreenHeading subHeading={ "Let's Keep In Touch"} title={ (props.screenName) ? props.screenName : '' } />
            <div className="contact-me-map">
                <div className="contact-me-form">
                    <div className="contact-form-heading">
                        <span>Get in Touch</span>
                    </div>
                    <form onSubmit={handleSubmit(handleFormSubmission)}>

                        { getFormFields() }

                        <button className={'contact-me-submit-btn primary-btn'} type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;
