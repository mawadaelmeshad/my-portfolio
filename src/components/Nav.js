import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './css-components/nav.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Navv() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
            <MDBNavbarBrand href='#' className='custom-nav'>Mawadah <span><FontAwesomeIcon icon={faHeart} /></span></MDBNavbarBrand>

            <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
            >
            <FontAwesomeIcon icon={["fa-solid", "fa-bars"]} style={{ color: 'pink' }} />

            </MDBNavbarToggler>

            <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
                {/* <MDBNavbarItem>
                <FontAwesomeIcon icon={faLinkedinIn} />
                </MDBNavbarItem> */}

                <MDBNavbarItem>
                <MDBNavbarLink href='#about' className='navitem'>About</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                <MDBNavbarLink href='#projects' className='navitem'>Projects</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                <MDBNavbarLink href='#contact' className='navitem'>Contact</MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem>
                <div class="projects-button"><a class="rn-btn" href="https://drive.google.com/file/d/1OB67ycFzwATaUgpvFfVI0hozXy_j0UQU/view?usp=sharing" target="_blank">Resume</a></div>
                {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="google" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="github" />
                    </a>
                    </div>
                
                </section> */}
                </MDBNavbarItem>
            </MDBNavbarNav>
            </MDBCollapse>
        </MDBContainer>
        </MDBNavbar>
    );
}
export default Navv;