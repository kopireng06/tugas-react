import './ContactUs.css'
import LogoAltera from './logo-ALTA-v2@2x.png'

const ContactUs = () => {
    return(
        <div className="container-fluid p-0">
            <div className="row flex-lg-row flex-column m-0">
                <div className="col-lg-4 col-12 d-flex justify-content-center align-items-center bg-form">
                    <img src={LogoAltera} style={{height:'142px'}}/>
                </div>
                <form className="form bg-white col-lg-8 col-12 d-flex flex-column justify-content-center align-items-start">
                    <h2 className="contact-us alterra-color-blue fw-400">Contact Us</h2>
                    <label for="name" className="label-form alterra-color-blue fw-400">Full Name<span className="red">*</span></label>
                    <input required className="input-form rounded px-2 py-1" type="text" id="name" placeholder="Your Full Name Here..."/>
                    <label for="email" className="label-form alterra-color-blue fw-400">Email Address<span className="red">*</span></label>
                    <input required className="input-form rounded px-2 py-1" type="email" id="email" placeholder="example@domail.com"/>
                    <label for="phone" className="label-form alterra-color-blue fw-400">Phone Number<span className="red">*</span></label>
                    <input required className="input-form rounded px-2 py-1" type="text" id="phone" placeholder="08573890xxxxx"/>
                    <label for="nationality" className="label-form alterra-color-blue fw-400">Nationality</label>
                    <select required className="input-form rounded px-2 py-1" name="nationality" id="nationality">
                        <option value="Indonesia">Indonesia</option>
                        <option value="Malaysia">Malaysia</option>
                    </select>
                    <label for="message" className="label-form alterra-color-blue fw-400">Message</label>
                    <textarea required className="px-2 py-1 rounded" style={{height:'112px'}} name="message" id="message" placeholder="Your Full Name Here..."></textarea>
                    <button className="bg-alterra-color-orange w-auto text-white mt-3
                    fw-400 btn-profile px-4 py-2 rounded-pill border-0">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs;