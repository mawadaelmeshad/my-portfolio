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

function Navv() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
            <MDBNavbarBrand href='#' className='custom-nav'>Mawada</MDBNavbarBrand>

            <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
            >
            <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>

            <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
                <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                    About
                </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                <MDBNavbarLink href='#'>Link</MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
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
                </section>
                </MDBNavbarItem>

                <MDBNavbarItem>
                <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                    Disabled
                </MDBNavbarLink>
                </MDBNavbarItem>
            </MDBNavbarNav>
            </MDBCollapse>
        </MDBContainer>
        </MDBNavbar>
    );
}
export default Navv;