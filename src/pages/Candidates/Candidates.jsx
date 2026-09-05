import React from "react";
import {
    FaMapMarkerAlt,
    FaCheckCircle,
    FaQuestionCircle,
    FaEdit
} from "react-icons/fa";

import "./Candidates.css";

const requirements = [
    {
        name: "Visa Requirements",
        value: "Citizen,PR",
        requirement: "Must to have",
        status: "yes"
    },
    {
        name: "Education Requirements",
        value: "Diploma",
        requirement: "Must to have",
        status: "yes"
    },
    {
        name: "Relevant experience",
        value: "5 Years Onward",
        requirement: "Must to have",
        status: "yes"
    },
    {
        name: "Industry/Domain",
        value: "facility management",
        requirement: "Must to have",
        status: "yes"
    }
];

const skillsMustHave = [
    "Experience with working as mechanical system owner for operation and maintenance function",
    "Solid knowledge of Mechanical Infrastructure of HVAC Systems",
    "Direct Chillers/Chilling Systems and Water-Cooling Systems",
    "Cooling Towers",
    "Liquid Cooling system",
    "Team Management/Leadership experience"
];

function SectionHeader({ children }) {
    return (
        <div className="section-header">
            {children}
        </div>
    );
}

function EditButton() {
    return (
        <button className="edit-btn">
            <FaEdit /> Edit
        </button>
    );
}

function StatusIcon({ status }) {
    return status === "yes" ? (
        <FaCheckCircle className="status-success" />
    ) : (
        <FaQuestionCircle className="status-question" />
    );
}

function Candidates() {
    return (
        <div className="job-page">

            {/* Top border */}
            <div className="top-border"></div>

            <div className="job-container">

                {/* ================= HEADER ================= */}

                <div className="job-header">

                    <div className="job-location">
                        <FaMapMarkerAlt />
                        <div>
                            <div className="location-name">
                                Malaysia, Johor Bahru
                            </div>

                            <div className="full-time">
                                Full Time
                            </div>
                        </div>
                    </div>

                    <div className="recruiter">
                        <span>Assigned Recruiter:</span>
                        <strong>Sumera Nageen</strong>
                    </div>

                    <h1>
                        DCO-Mechanical Engineering Manager (DayOne)
                    </h1>

                </div>


                {/* ================= MAIN CONTENT ================= */}

                <div className="row g-4">

                    {/* ================= LEFT COLUMN ================= */}

                    <div className="col-lg-6">

                        {/* Requirements */}

                        <SectionHeader>
                            Requirements
                        </SectionHeader>

                        <div className="requirements">

                            {requirements.map((item, index) => (

                                <div className="requirement-row" key={index}>

                                    <div className="requirement-name">
                                        {item.name}
                                    </div>

                                    <div className="requirement-value">
                                        {item.value}
                                    </div>

                                    <div className="requirement-type">
                                        {item.requirement}
                                    </div>

                                    <div className="requirement-action">
                                        <StatusIcon status={item.status} />
                                        <EditButton />
                                    </div>

                                </div>

                            ))}

                        </div>


                        {/* Salary */}

                        <SectionHeader>
                            Salary Information
                        </SectionHeader>

                        <div className="requirements">

                            <div className="requirement-row">

                                <div className="requirement-name">
                                    Salary Bracket
                                </div>

                                <div className="requirement-value">
                                    MYR 0 -<br />
                                    15000 (Monthly)
                                </div>

                                <div className="requirement-type">
                                    Must be within<br />
                                    range
                                </div>

                                <div className="requirement-action">
                                    <StatusIcon status="yes" />
                                    <EditButton />
                                </div>

                            </div>


                            <div className="requirement-row">

                                <div className="requirement-name">
                                    Superstar Flexibility
                                </div>

                                <div></div>

                                <div></div>

                                <div className="requirement-action">
                                    <StatusIcon status="no" />
                                    <EditButton />
                                </div>

                            </div>

                        </div>


                        {/* Skills */}

                        <SectionHeader>
                            Skills - Must to have
                        </SectionHeader>

                        <div className="skills-container">

                            {skillsMustHave.map((skill, index) => (

                                <div className="skill-item" key={index}>
                                    <span>{skill}</span>

                                    <div className="skill-action">
                                        <FaCheckCircle />
                                        <EditButton />
                                    </div>
                                </div>

                            ))}

                        </div>


                        {/* Nice to have */}

                        <SectionHeader>
                            Skills - Nice to have
                        </SectionHeader>

                        <div className="nice-to-have">

                            <FaQuestionCircle />

                            <EditButton />

                        </div>


                        {/* Customer Remarks */}

                        <div className="customer-header">

                            <span>Customer Remarks</span>

                            <EditButton />

                        </div>

                        <div className="customer-content">

                            <p>
                                <strong>Work Setup:</strong> Office
                            </p>

                            <p>
                                <strong>Remarks:</strong>
                            </p>

                            <p>
                                Companies to refer: Western Digital;
                                semicons and Intel
                                <br />

                                <strong>Codes:</strong> 3 roles with same name and JD
                                <br />

                                <strong>KTP:</strong> JR53
                                <br />

                                <strong>NTP:</strong> JR527; JR758
                            </p>

                            <div className="urgent-message">
                                TM Please take note!!
                            </div>

                            <div className="warning-text">
                                This is an urgent role. Client ONLY want candidate
                                with short notice period (i.e not more than
                                1 month OR Immediately)
                            </div>

                            <div className="green-note">
                                Do not send candidates with mechanical background
                                but no relatable experience in operation and
                                maintenance of the usual equipment used in DC
                            </div>

                            <p>
                                <strong>Work Setup:</strong> Office
                            </p>

                            <p>
                                <strong>
                                    Mechanical Engineering Manager experience
                                    in Data Centers
                                </strong>{" "}
                                is a must-have, particularly given the responsibility
                                to lead and manage a team of Shift Engineers.
                            </p>

                            <p>
                                We'll ensure that all shortlisted candidates
                                possess strong expertise in:
                            </p>

                            <ul>
                                <li>
                                    Direct Chillers/Chilling Systems and
                                    Water-Cooling Systems
                                </li>
                                <li>Cooling Towers</li>
                                <li>Operations and Maintenance background</li>
                            </ul>

                        </div>

                    </div>


                    {/* ================= RIGHT COLUMN ================= */}

                    <div className="col-lg-6">

                        {/* Tabs */}

                        <div className="job-tabs">

                            <button className="active">
                                Job Description
                            </button>

                            <button>
                                Screening Questions
                            </button>

                        </div>


                        <div className="description">

                            <button className="description-edit">
                                <FaEdit /> Edit
                            </button>

                            <h4>
                                MECHANICAL ENGINEERING MANAGER
                            </h4>

                            <h5>
                                ABOUT DayOne
                            </h5>

                            <p>
                                DayOne is a leading developer and operator of
                                high-performance Data Centers in Asia Pacific.
                                Dual-listed in NASDAQ and Hong Kong, DayOne is
                                the largest carrier-neutral Data Center service
                                provider in Asia and one of the fastest-growing
                                in the world with a presence in Mainland China,
                                Hong Kong, Singapore, Malaysia, Indonesia,
                                and Japan.
                            </p>

                            <p>
                                DayOne is expanding internationally and looking
                                for talented individuals who are passionate about
                                growing with us. In this role, you'll have the
                                opportunity to be at the forefront of our
                                expansion efforts.
                            </p>


                            <h5>
                                POSITION OVERVIEW
                            </h5>

                            <p>
                                Reporting to the Critical Services Manager, the
                                Mechanical Engineering Manager is responsible
                                for overseeing the mechanical infrastructure and
                                systems of our hyperscale data centers. This role
                                ensures the continuous and efficient operation
                                of mechanical systems, upholds high standards
                                of safety and compliance, and supports the
                                Critical Services Manager in strategic initiatives.
                            </p>

                            <p>
                                The successful candidate will lead a team of
                                mechanical engineers and technicians, ensuring
                                the delivery of critical mechanical services
                                24/7.
                            </p>


                            <h5>
                                RESPONSIBILITIES
                            </h5>

                            <ul>

                                <li>
                                    <strong>
                                        Mechanical System Management:
                                    </strong>

                                    <ul>
                                        <li>
                                            Oversee the design, installation,
                                            operation, and maintenance of
                                            mechanical systems within the
                                            data centers.
                                        </li>

                                        <li>
                                            Ensure all mechanical infrastructure,
                                            including HVAC systems, chillers,
                                            cooling towers, and fire suppression
                                            systems, operates reliably and
                                            efficiently.
                                        </li>

                                        <li>
                                            Implement and maintain mechanical
                                            safety policies, procedures, and
                                            best practices.
                                        </li>
                                    </ul>
                                </li>


                                <li>
                                    <strong>
                                        Team Leadership:
                                    </strong>

                                    <ul>
                                        <li>
                                            Lead, mentor, and develop a team
                                            of mechanical engineers and
                                            technicians.
                                        </li>

                                        <li>
                                            Coordinate with shift teams to
                                            ensure seamless 24/7 coverage.
                                        </li>

                                        <li>
                                            Conduct regular training sessions
                                            and performance evaluations.
                                        </li>
                                    </ul>
                                </li>


                                <li>
                                    <strong>
                                        Maintenance and Upgrades:
                                    </strong>

                                    <ul>
                                        <li>
                                            Plan and oversee preventative and
                                            corrective maintenance activities.
                                        </li>

                                        <li>
                                            Coordinate with vendors and
                                            contractors for mechanical
                                            maintenance and upgrade projects.
                                        </li>
                                    </ul>
                                </li>


                                <li>
                                    <strong>
                                        Safety and Compliance:
                                    </strong>

                                    <ul>
                                        <li>
                                            Ensure all mechanical operations
                                            comply with relevant health,
                                            safety, and environmental
                                            regulations.
                                        </li>

                                        <li>
                                            Maintain up-to-date documentation
                                            and records.
                                        </li>
                                    </ul>
                                </li>


                                <li>
                                    <strong>
                                        Technical Support:
                                    </strong>

                                    <ul>
                                        <li>
                                            Provide technical expertise and
                                            support for mechanical systems.
                                        </li>

                                        <li>
                                            Troubleshoot and resolve complex
                                            mechanical issues.
                                        </li>
                                    </ul>
                                </li>


                                <li>
                                    <strong>
                                        Strategic Initiatives:
                                    </strong>

                                    <ul>
                                        <li>
                                            Support the Critical Services
                                            Manager in developing and
                                            implementing strategic initiatives.
                                        </li>

                                        <li>
                                            Participate in budget planning and
                                            cost management activities.
                                        </li>
                                    </ul>
                                </li>

                            </ul>


                            {/* Additional requirements */}

                            <h5>
                                REQUIRED QUALIFICATIONS
                            </h5>

                            <ul>

                                <li>
                                    Bachelor's degree in Mechanical Engineering
                                    or a related field.
                                </li>

                                <li>
                                    Minimum of 7-10 years of experience in
                                    mechanical engineering, with at least
                                    3-5 years in a managerial role.
                                </li>

                                <li>
                                    Strong knowledge of data center mechanical
                                    infrastructure.
                                </li>

                                <li>
                                    Proven experience in managing technical
                                    teams and 24/7 operations.
                                </li>

                                <li>
                                    Excellent problem-solving skills.
                                </li>

                                <li>
                                    Strong communication and interpersonal skills.
                                </li>

                                <li>
                                    Certifications such as Professional Engineer
                                    (PE) are highly desirable.
                                </li>

                            </ul>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Candidates;