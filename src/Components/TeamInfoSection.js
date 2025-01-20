import './TeamInfoSection.css';

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TeamInfo = () => {
    const teamMembers = [
        {
            name: "Nafis Iqbal",
            role: "Team Lead, Programmer, Animator",
            image: "/Images/TeamMembers/Nafis.jpg",
            description: "Nafis Iqbal specializes in gameplay mechanics, level design, & animations.",
        },
        {
            name: "Imran Hossain",
            role: "Lead Artist",
            image: "/Images/TeamMembers/Imran.png",
            description: "Imran Hossain focuses on creating immersive artworks and stunning visuals.",
        },
    ];

    return (
        <div className="team-info-section text-center py-5">
            {/* Logo */}
            <div className="mb-4">
                <img
                    src="/Images/Icons/CompanyLogo.png" // Replace with your logo image path
                    alt="Studio Logo"
                    className="img-fluid"
                    style={{ minHeight: "240px" }}
                />
                <h1 style={{ marginBottom: "40px" }}>Dream Big Games</h1>
            </div>

            {/* Team Members */}
            <div className="container">
                <div className="row justify-content-center">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="col-md-5 d-flex flex-column align-items-center mb-4 mx-2"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="rounded-circle mb-3"
                                style={{ width: "150px", height: "150px", objectFit: "cover" }}
                            />
                            <h4 className="mb-1">{member.name}</h4>
                            <h6 className="text-muted">{member.role}</h6>
                            <p className="text-center">{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamInfo;
