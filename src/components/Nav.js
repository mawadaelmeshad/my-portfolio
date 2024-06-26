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
import mylogo from '../images/mylogo2.png';


function Navv() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' className='mynav'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#' className='custom-nav'> <img src={mylogo} alt='logo' className='logo-photo'/></MDBNavbarBrand>

                <MDBNavbarToggler
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={() => setShowBasic(!showBasic)}
                >
                    <FontAwesomeIcon icon={faBars} style={{ color: '#d5adec;', fontSize: '1.9rem' }} className='toggler' />
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showBasic}>
                <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
                <MDBNavbarItem>
                    <MDBNavbarLink href='#home' className='navitem'>Home</MDBNavbarLink>
                    </MDBNavbarItem>
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
                    <div class="projects-button"><a class="rn-btn resume-btn" href="https://drive.google.com/file/d/1uC9i0Gmeu5RSshKEWhpySV0c3tyeq4xv/view?usp=sharing" target="_blank">Resume</a></div>
                    </MDBNavbarItem>
                </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}
export default Navv;
