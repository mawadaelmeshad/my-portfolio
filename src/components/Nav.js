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
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';



function Navv() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#' className='custom-nav'>Mawadah</MDBNavbarBrand>

                <MDBNavbarToggler
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={() => setShowBasic(!showBasic)}
                >
                    <FontAwesomeIcon icon={faBars} style={{ color: 'pink', fontSize: '1.9rem' }} />
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showBasic}>
                <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
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
                    </MDBNavbarItem>
                </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}
export default Navv;