import './ReviewMessage.css'
import '../../css_framework/Bootstrap.min.css'
import dotImage from './img-dot@2x.png'
import { useSelector } from 'react-redux'

const ReviewMessage = () => {

    const dataContact = useSelector((state)=>state.contact.value);
    const {name} = dataContact;
    const {email} = dataContact;
    const {phone} = dataContact;
    const {nationality} = dataContact;
    const {message} = dataContact;

    return (  
        <div className="container-fluid vh-100">
            <div className="row align-items-center justify-content-center h-100">
                <div className="col-lg-6 col-md-8 col-10 rounded border-message h-75 p-45 bg-white">
                    <div className="d-flex">
                        <p className="message margin-detail">Full Name</p>
                        <span className="mx-2">:</span>
                        <p className="message name">{name}</p>
                    </div>
                    <div className="d-flex">
                        <p className="message margin-detail">Email Address</p>
                        <span className="mx-2">:</span>
                        <p className="message email">{email}</p>
                    </div>
                    <div className="d-flex">
                        <p className="message margin-detail">Phone Number</p>
                        <span className="mx-2">:</span>
                        <p className="message phone">{phone}</p>
                    </div>
                    <div className="d-flex">
                        <p className="message margin-detail">Nationality</p>
                        <span className="mx-2">:</span>
                        <p className="message nationality">{nationality}</p>
                    </div>
                    <p className="font-italic my-4 my-message">
                        {message}
                    </p>
                    <div className="border-bawah"></div>
                    <h2 className="thanks-message">Thanks for contacting us! </h2>
                    <h2 className="thanks-message">We will be in touch with you shortly.</h2>
                    <button className="submit-button bg-alterra-color-orange w-auto text-white mt-1 px-4 py-2 rounded-pill border-0">Home</button>
                </div>
                <div className="footer-message w-100 position-absolute bottom-0">
                    <img src={dotImage} alt="dot" className="dot-image"/>
                </div>
            </div>
        </div>
    );
}
 
export default ReviewMessage;