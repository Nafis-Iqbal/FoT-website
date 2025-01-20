import React from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container ">
                <div className="row justify-content-center align-items-center">
                    {/* About Section */}
                    {/* <div className="col-md-4 mb-3">
                        <h5>About Us</h5>
                        <p className="small">
                            At Dream Big Games, we are dedicated to crafting unique and immersive gaming experiences for all to enjoy.
                            Stick around with us to get the latest updates, exciting game releases, and exclusive behind-the-scenes content!
                        </p>
                    </div> */}

                    {/* Social Media Links */}
                    <div className="col-md-4 mb-3">
                        <h5>Follow Us</h5>
                        <div className="d-flex justify-content-center align-items-center">
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white me-3"
                            >
                                <MDBIcon fab icon="twitter" size="lg" />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white me-3"
                            >
                                <MDBIcon fab icon="facebook" size="lg" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white"
                            >
                                <MDBIcon fab icon="instagram" size="lg" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center mt-4">
                    <p className="small mb-0">
                        &copy; {new Date().getFullYear()} Dream Big Games. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
