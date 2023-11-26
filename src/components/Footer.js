import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "./css-components/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'react';
import WOW from 'wowjs';

function Footer() {
    useEffect(() => {
        const wow = new WOW.WOW({
          live: false
        });
        wow.init();
      }, []);
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className='me-5 d-none d-lg-block'>
            <span>Get connected with me on social networks:</span>
            </div>
            <div>
            <a href='https://www.facebook.com/mawada.elmeshad/' className='me-4 text-reset' target='_blank'>
                <FontAwesomeIcon icon={faFacebook} className='pink-icons'/>
            </a>
            <a href='https://www.instagram.com/mawada_elmeshad/' className='me-4 text-reset' target='_blank'>
                <FontAwesomeIcon icon={faInstagram} className='pink-icons' />
            </a>
            <a href='https://www.linkedin.com/in/mawadah-elmashad-358b7322a/' className='me-4 text-reset' target='_blank'>
                <FontAwesomeIcon icon={faLinkedinIn} className='pink-icons' />
            </a>
            <a href='https://github.com/mawadaelmeshad' className='me-4 text-reset' target='_blank'>
                <FontAwesomeIcon icon={faGithub} className='pink-icons' />
            </a>
            </div>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            Designed and Built by:
            <a className='fw-bold mawada' href='https://www.linkedin.com/in/mawadah-elmashad-358b7322a/' style={{ color: 'rgb(235, 87, 119)' }}>
    Mawadah Elmashad
</a>

        </div>
        </MDBFooter>
    );
}
export default Footer;