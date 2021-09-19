import '../../css_framework/Bootstrap.min.css'
import './ContactUs.css'
import LogoAltera from './logo-ALTA-v2@2x.png'
import { useDispatch,useSelector } from 'react-redux'
import { updateError, updateValue } from '../app_contact/contactSlice'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'

const ContactUs = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const errorMessage = useSelector((state)=>state.contact.error);
    const [amountClicked,setAmountClicked] = useState(0);
    const {name} = errorMessage;
    const {email} = errorMessage;
    const {phone} = errorMessage;
    
    useEffect(()=>{
        if(amountClicked !==0 && !(name || email || phone)){
            history.push('/review_message')
        }
    },[amountClicked]);

    const handleChange = (e) => {
        const action = {
            value : e.target.value,
            nameValue : e.target.name
        }
        dispatch(updateValue(action));
    }

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(updateError());
        setAmountClicked(amountClicked+1);
    }

    return(
        <div className="container-fluid p-0">
            <div className="row flex-lg-row flex-column m-0">
                <div className="col-lg-4 col-12 d-flex justify-content-center align-items-center bg-form">
                    <img src={LogoAltera} alt="logo" style={{height:'142px'}}/>
                </div>
                <form className="form bg-white col-lg-8 col-12 d-flex flex-column justify-content-center align-items-start">
                    <h2 className="contact-us alterra-color-blue fw-400">Contact Us</h2>
                    <label htmlFor="name" className="label-form alterra-color-blue fw-400">Full Name<span className="red">*</span></label>
                    <input onChange={handleChange} className={"input-form rounded px-2 py-1 "+(name ? "input-form-danger" :"")} 
                    type="text" name="name" id="name" placeholder="Your Full Name Here..."/>
                    <p className="danger-text fw-400 red">{name}</p>
                    <label htmlFor="email" className="label-form alterra-color-blue fw-400">Email Address<span className="red">*</span></label>
                    <input onChange={handleChange} className={"input-form rounded px-2 py-1 "+(email ? "input-form-danger" :"")} 
                    type="email" name="email" id="email" placeholder="example@domail.com"/>
                    <p className="danger-text fw-400 red">{email}</p>
                    <label htmlFor="phone" className="label-form alterra-color-blue fw-400">Phone Number<span className="red">*</span></label>
                    <input onChange={handleChange} className={"input-form rounded px-2 py-1 "+(phone ? "input-form-danger" :"")}
                    type="text" name="phone" id="phone" placeholder="08573890xxxxx"/>
                    <p className="danger-text fw-400 red">{phone}</p>
                    <label htmlFor="nationality" className="label-form alterra-color-blue fw-400">Nationality</label>
                    <select onChange={handleChange} className="input-form rounded px-2 py-1" name="nationality" id="nationality">
                        <option value="Indonesia">Indonesia</option>
                        <option value="Malaysia">Malaysia</option>
                    </select>
                    <label htmlFor="message" className="label-form alterra-color-blue fw-400">Message</label>
                    <textarea onChange={handleChange} className="px-2 py-1 rounded" style={{height:'112px'}} name="message" id="message"></textarea>
                    <button onClick={handleClick} type="submit" className="bg-alterra-color-orange w-auto text-white mt-3
                    fw-400 btn-profile px-4 py-2 rounded-pill border-0">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs;