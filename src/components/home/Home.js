import '../../css_framework/Bootstrap.min.css'
import './Home.css';
import Clock from './Clock';
import Navbar from './Navbar';

const Home = ()=> {
  return (
    <>
      <Navbar/>
      <div className="w-100 vh-100 bg-main d-flex justify-content-center align-items-center">
          <div className="container-lg">
              <Clock/>
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
    </>
  );
}

export default Home;
