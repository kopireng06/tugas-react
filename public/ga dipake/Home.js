import {Link} from 'react-router-dom';
import LogoAlterra from './logo-ALTA@2x.png';
import ContactUs from './ContactUs';

function Home() {
  return (
    <>
        <div className="container-fluid p-0">
          <nav className="navbar shadow-custom fixed-top navbar-expand-lg navbar-light bg-white p-2">
            <div className="container-lg">
              <img src={LogoAlterra} style={{height:'40px'}} alt=""/>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item px-1">
                    <Link className="nav-link nav-link-active alterra-color-orange" to="#">HOME</Link>
                  </li>
                  <li className="nav-item px-1">
                    <Link className="nav-link alterra-color-blue" to="#">ABOUT</Link>
                  </li>
                  <li className="nav-item px-1">
                    <Link className="nav-link alterra-color-blue" to="#">EXPERIENCE</Link>
                  </li>
                  <li className="nav-item px-1" id="contact">
                    <Link to="contact" className="nav-link alterra-color-blue">CONTACT</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      </div>
      <div className="w-100 vh-100 bg-main d-flex justify-content-center align-items-center">
          <div className="container-lg">
              <div className="row flex-lg-row flex-column">
                  <div className="col-lg-5 col-12 d-flex justify-content-center">
                      <div className="bg-orang rounded-circle"></div>
                  </div>
                  <div className="col-lg-7 col-12 d-flex flex-column align-items-lg-start align-items-center justify-content-center">
                    <h4 className="alterra-color-blue fw-500 judul-1">Hi, my name is</h4>
                    <h1 className="alterra-color-blue fw-700 judul-2">Anne Sullivan</h1>
                    <h2 className="alterra-color-blue fw-500 judul-3">I build things for the web</h2>
                    <button className="bg-alterra-color-orange w-auto text-white mt-3
                    fw-400 btn-profile px-4 py-2 rounded-pill border-0">Get In Touch</button>
                  </div>
              </div>
          </div>
      </div>
      <ContactUs/>
    </>
  );
}

export default Home;
