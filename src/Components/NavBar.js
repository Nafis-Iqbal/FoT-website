import './NavBar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBNavbarLink, MDBIcon } from 'mdb-react-ui-kit';

const Navbar = () => {
    const [showNav, setShowNav] = React.useState(false);

    const toggleNavbar = () => setShowNav(!showNav);

    return (
        <MDBNavbar expand="lg" className="w-100 navBar-section">
            <div className="container-fluid d-flex justify-content-between w-100">
                <div className="navBar-company-name">
                    {/* Logo */}
                    <MDBNavbarBrand href="/">
                        <img
                            src="/Images/Icons/CompanyLogo.png" // Replace with your logo URL
                            alt="Logo"
                            height="40"
                        />
                    </MDBNavbarBrand>
                </div>

                <div className="navBar-call-to-actions">
                    {/* Toggler for mobile view */}
                    <MDBNavbarToggler
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={toggleNavbar}
                    />

                    {/* Navbar Links and Icons */}
                    <MDBCollapse navbar show={showNav}>
                        <MDBNavbarNav className="ms-auto">
                            <MDBNavbarLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <MDBIcon fab icon="twitter" size="lg" />
                            </MDBNavbarLink>
                            <MDBNavbarLink href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <MDBIcon fab icon="youtube" size="lg" />
                            </MDBNavbarLink>
                            <MDBNavbarLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <MDBIcon fab icon="facebook" size="lg" />
                            </MDBNavbarLink>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </div>
            </div>
        </MDBNavbar>
    );
};

export default Navbar;
