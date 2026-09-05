import React, { useState } from "react";
import "./CandidateDetails.css";

const requirements = [
    {
        name: "Visa Requirements",
        required: "Citizen,PR",
        importance: "Must to have",
        candidate: "Citizen"
    },
    {
        name: "Education Requirements",
        required: "Diploma",
        importance: "Must to have",
        candidate: "Bachelor"
    },
    {
        name: "Relevant Experience",
        required: "5 Years Onward",
        importance: "Must to have",
        candidate: "7 Years"
    },
    {
        name: "Industry/Domain",
        required: "facility management",
        importance: "Must to have",
        candidate: "facility management"
    }
];

const skills = [
    "Minimum of 7-10 years of experience in mechanical engineering, with at least 3-5 years in a managerial role.",
    "Experience with working as mechanical system owner for operation and maintenance function",
    "Solid knowledge of mechanical infrastructure, including HVAC systems, chillers, cooling towers, and fire suppression systems."
];

const pipeline = [
    "Viewed CV",
    "CV Screening",
    "Outreach",
    "Evaluation",
    "Consent stage",
    "Interview Ready",
    "Completed Interview",
    "Shortlisted",
    "Rejected",
    "Hired"
];

function CandidateDetails() {

    const [activeTab, setActiveTab] = useState("Reviewer Note");

    return (
        <div className="candidate-page">

            {/* =====================================================
                HEADER
            ===================================================== */}

            <div className="candidate-header">

                <div className="candidate-info">

                    <div className="candidate-avatar">
                        <span>SK</span>
                    </div>

                    <div className="candidate-name-area">

                        <div className="candidate-name">
                            Sivanesan Krishnan
                            <span className="edit-icon">✎</span>
                        </div>

                        <div className="candidate-role">
                            Facilities Manager
                            <span className="edit-icon">✎</span>
                        </div>

                        <div className="social-icons">
                            <span className="linkedin-icon">in</span>
                            <span>✎</span>
                        </div>

                    </div>

                </div>


                {/* Submission */}
                <div className="submitted-date">
                    Submitted on: <strong>28-Jan-2025</strong>
                </div>


                {/* Contact */}
                <div className="candidate-contact">

                    <div>
                        <span className="contact-icon">◉</span>
                        +60176297707
                        <span className="edit-icon">✎</span>
                    </div>

                    <div>
                        <span className="contact-icon">✉</span>
                        nisan753@gmail.com
                        <span className="edit-icon">✎</span>
                    </div>

                    <div>
                        <span className="contact-icon">▣</span>
                        Malaysian
                        <span className="edit-icon">✎</span>
                    </div>

                </div>

            </div>


            {/* =====================================================
                PIPELINE
            ===================================================== */}

            <div className="pipeline">

                {pipeline.map((item, index) => (

                    <div
                        className={`pipeline-item ${
                            index === 0 ? "active" : ""
                        }`}
                        key={item}
                    >

                        <div className="pipeline-circle">
                            {index === 0 ? "✓" : ""}
                        </div>

                        <div className="pipeline-label">
                            {item}
                        </div>

                    </div>

                ))}

            </div>


            {/* =====================================================
                ACTION BUTTONS
            ===================================================== */}

            <div className="candidate-actions">

                <button className="btn btn-light btn-sm">
                    Share JD
                </button>

                <button className="btn btn-light btn-sm">
                    Download CV
                </button>

                <button className="btn whatsapp-btn btn-sm">
                    WhatsApp
                </button>

                <button className="btn upload-btn btn-sm">
                    Upload CV
                </button>

            </div>


            {/* =====================================================
                MAIN CONTENT
            ===================================================== */}

            <div className="container-fluid main-content">

                <div className="row g-3">

                    {/* =================================================
                        LEFT COLUMN
                    ================================================= */}

                    <div className="col-lg-6">

                        {/* Requirements */}

                        <h3 className="page-section-title">
                            Requirements
                        </h3>

                        <div className="table-section">

                            <div className="table-header">

                                <div>Requirements</div>
                                <div>Importance</div>
                                <div>Candidate</div>
                                <div></div>

                            </div>

                            {requirements.map((item, index) => (

                                <div className="requirement-row" key={index}>

                                    <div>
                                        {item.name}
                                    </div>

                                    <div>
                                        {item.required}
                                    </div>

                                    <div>
                                        {item.importance}
                                    </div>

                                    <div>
                                        {item.candidate}
                                    </div>

                                    <div className="row-status">
                                        <span className="success-circle">
                                            ✓
                                        </span>

                                        <button className="edit-button">
                                            ✎ Edit
                                        </button>
                                    </div>

                                </div>

                            ))}

                        </div>


                        {/* Percentage */}

                        <div className="match-percentage">
                            100%
                        </div>


                        {/* Salary */}

                        <h3 className="page-section-title">
                            Salary Information
                        </h3>

                        <div className="table-section">

                            <div className="table-header">

                                <div>Requirements</div>
                                <div>Current Salary</div>
                                <div>Expected Salary</div>
                                <div></div>

                            </div>

                            <div className="salary-row">

                                <div>
                                    MYR 0-15000 (Monthly)
                                </div>

                                <div>
                                    8000 MYR
                                </div>

                                <div>
                                    12000 MYR
                                </div>

                                <div className="row-status">

                                    <span className="success-circle">
                                        ✓
                                    </span>

                                    <button className="edit-button">
                                        ✎ Edit
                                    </button>

                                </div>

                            </div>

                            <div className="salary-row">

                                <div>
                                    Superstar Flexibility
                                </div>

                                <div></div>

                                <div></div>

                                <div></div>

                            </div>

                        </div>


                        {/* Notice Period */}

                        <h3 className="page-section-title">
                            Notice Period
                        </h3>

                        <div className="table-section">

                            <div className="table-header single">
                                Notice Period
                            </div>

                            <div className="notice-row">

                                <div>
                                    2 months
                                </div>

                                <div className="row-status">

                                    <span className="success-circle">
                                        ✓
                                    </span>

                                    <button className="edit-button">
                                        ✎ Edit
                                    </button>

                                </div>

                            </div>

                        </div>


                        {/* Skills */}

                        <h3 className="page-section-title">
                            Skills - Must to have
                        </h3>

                        <div className="table-section">

                            <div className="table-header single">
                                Requirements
                            </div>

                            <div className="skills-area">

                                {skills.map((skill, index) => (

                                    <div
                                        className="candidate-skill"
                                        key={index}
                                    >

                                        <span>
                                            {skill}
                                        </span>

                                        <div className="skill-status">

                                            <span className="success-circle">
                                                ✓
                                            </span>

                                            <button className="edit-button">
                                                ✎ Edit
                                            </button>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </div>


                        {/* Nice to Have */}

                        <h3 className="page-section-title">
                            Skills - Nice to have
                        </h3>

                        <div className="table-section">

                            <div className="table-header single">
                                Requirements
                            </div>

                            <div className="empty-skill-row">

                                <button className="edit-button">
                                    ✎ Edit
                                </button>

                            </div>

                        </div>


                        {/* Questions */}

                        <h3 className="page-section-title">
                            Questions
                        </h3>

                        <div className="table-section">

                            <div className="table-header single">
                                Questions
                            </div>

                            <div className="question-area">
                                No questions available.
                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        RIGHT COLUMN
                    ================================================= */}

                    <div className="col-lg-6">

                        <div className="candidate-tabs">

                            {[
                                "Reviewer Note",
                                "Screening Questions",
                                "Elevation Pitch",
                                "Job Description",
                                "Resume"
                            ].map(tab => (

                                <button
                                    key={tab}
                                    className={
                                        activeTab === tab
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() =>
                                        setActiveTab(tab)
                                    }
                                >
                                    {tab}
                                </button>

                            ))}

                        </div>


                        {/* Tab content */}

                        <div className="tab-content-box">

                            {activeTab === "Reviewer Note" && (

                                <div>

                                    <h4>
                                        Candidate Engagement Notes
                                    </h4>

                                    <div className="engagement-table">

                                        <div className="engagement-header">
                                            <span>Type</span>
                                            <span>Description</span>
                                            <span>Reminder Alert</span>
                                            <span>Date</span>
                                            <span>TM</span>
                                        </div>

                                        <div className="engagement-row">

                                            <div>
                                                1st engagement call
                                            </div>

                                            <div className="engagement-description">

                                                Nationality and BOB:<br />
                                                Current salary: RM8000 +
                                                AWS bonus<br />
                                                Notice Period: 2 months<br />
                                                Allowance: RM 100
                                                (meal allowance)<br />
                                                OT: 16<br />
                                                Others if any: Hardship
                                                Allowance - RM300<br />
                                                Expected salary: RM 12 K<br />
                                                Notice Period: 2 months<br /><br />

                                                Work Environment and Preferences<br />
                                                Work Schedule: 8-5<br />
                                                Current location: Selangor<br />
                                                Current role type: Permanent<br />
                                                Contract: Yes / No<br /><br />

                                                Technical screening questions:<br />

                                                How much experience in
                                                mechanical engineering and
                                                how much in managerial role?<br /><br />

                                                7 years in mechanical engineering.
                                                Around 5 years in managerial team.

                                            </div>

                                            <div></div>

                                            <div>
                                                27-Jan-2025
                                            </div>

                                            <div>
                                                Ana
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            )}


                            {activeTab === "Screening Questions" && (

                                <div className="tab-placeholder">
                                    Screening Questions
                                </div>

                            )}


                            {activeTab === "Elevation Pitch" && (

                                <div className="tab-placeholder">
                                    Elevation Pitch
                                </div>

                            )}


                            {activeTab === "Job Description" && (

                                <div className="tab-placeholder">
                                    Job Description
                                </div>

                            )}


                            {activeTab === "Resume" && (

                                <div className="tab-placeholder">
                                    Resume
                                </div>

                            )}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default CandidateDetails;