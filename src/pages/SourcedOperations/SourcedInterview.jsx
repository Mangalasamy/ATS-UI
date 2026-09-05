import React, { useState } from "react";
import "./SourcedInterview.css";

const interviewSummary = [
    {
        label: "To Schedule",
        count: 12,
        className: "schedule-card"
    },
    {
        label: "Scheduled",
        count: 3,
        className: "scheduled-card"
    },
    {
        label: "Completed",
        count: 25,
        className: "completed-card"
    },
    {
        label: "Offered",
        count: 5,
        className: "offered-card"
    },
    {
        label: "Hired",
        count: 115,
        className: "hired-card"
    },
    {
        label: "Unqualified",
        count: 163,
        className: "unqualified-card"
    }
];

const interviewData = [
    {
        company: "Dayone",
        jobTitle: "Assistant Facility Engineer Dc Operations (my) (jb/kl)",
        candidate: "Nik Zahiruddin",
        talentManager: "Sumera Nageen",
        status: "To Schedule",
        level: "Interview 1",
        approvalDate: "08-Jul-2026",
        days: "(1 days ago)",
        arrangement: "Client DIY",
        tsm: "Not assigned"
    },
    {
        company: "Dayone",
        jobTitle: "Revenue Executive (jb)",
        candidate: "Marsya Irdina Binti Shahrul Noor",
        talentManager: "Bilal Siddiqui",
        status: "To Schedule",
        level: "Interview 1",
        approvalDate: "06-Jul-2026",
        days: "(3 days ago)",
        arrangement: "Client DIY",
        tsm: "Dolly"
    },
    {
        company: "Dayone",
        jobTitle: "Revenue Executive (jb)",
        candidate: "Muhammad Iman Bin Kassim",
        talentManager: "Bilal Siddiqui",
        status: "To Schedule",
        level: "Interview 1",
        approvalDate: "06-Jul-2026",
        days: "(3 days ago)",
        arrangement: "Client DIY",
        tsm: "Dolly"
    },
    {
        company: "Smbc",
        jobTitle: "Vp, Enterprise Data Hub",
        candidate: "Rajesh Selvaraj",
        talentManager: "Sagar Sehrawat",
        status: "To Schedule",
        level: "Interview 1",
        approvalDate: "08-Jul-2026",
        days: "(1 days ago)",
        arrangement: "Client DIY",
        tsm: "Not assigned"
    },
    {
        company: "Dayone",
        jobTitle: "Contract Manager, (th)",
        candidate: "Weerut Boonlerdlop (guy)",
        talentManager: "Bilal Siddiqui",
        status: "To Schedule",
        level: "Interview 1",
        approvalDate: "29-Jun-2026",
        days: "(10 days ago)",
        arrangement: "Client DIY",
        tsm: "Dolly"
    }
];

function SummaryCard({ label, count, className }) {
    return (
        <button className={`summary-card ${className}`}>
            <span>{label}</span>
            <strong>{count}</strong>
        </button>
    );
}

function ActionButtons({ candidate }) {

    const handleAction = (action) => {
        console.log(action, candidate);
    };

    return (
        <div className="action-buttons">

            <button
                title="Update interview"
                onClick={() => handleAction("Update")}
            >
                <i className="bi bi-journal-check"></i>
            </button>

            <button
                title="Schedule"
                onClick={() => handleAction("Schedule")}
            >
                <i className="bi bi-hand-index"></i>
            </button>

            <button
                title="View candidate"
                onClick={() => handleAction("View")}
            >
                <i className="bi bi-eye"></i>
            </button>

            <button
                title="Reminder"
                onClick={() => handleAction("Reminder")}
            >
                <i className="bi bi-stopwatch"></i>
            </button>

            <button
                title="Interview"
                onClick={() => handleAction("Interview")}
            >
                <i className="bi bi-headset"></i>
            </button>

        </div>
    );
}

function SourcedInterview() {

    const [search, setSearch] = useState("");

    const filteredData = interviewData.filter((item) =>
        `${item.company} ${item.jobTitle} ${item.candidate} ${item.talentManager}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <div className="sourced-interview-page">

            {/* =====================================================
                HEADER
            ===================================================== */}

            <header className="interview-header">
                Sourced Interview Module
            </header>


            {/* =====================================================
                SEARCH
            ===================================================== */}

            <div className="search-container">

                <div className="search-box">

                    <input
                        type="text"
                        placeholder="Candidate search"
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                    <button>
                        <i className="bi bi-chevron-down"></i>
                    </button>

                </div>

            </div>


            {/* =====================================================
                SUMMARY CARDS
            ===================================================== */}

            <div className="summary-container">

                {interviewSummary.map((item) => (

                    <SummaryCard
                        key={item.label}
                        label={item.label}
                        count={item.count}
                        className={item.className}
                    />

                ))}

            </div>


            {/* =====================================================
                TABLE
            ===================================================== */}

            <div className="interview-table-wrapper">

                <table className="interview-table">

                    <thead>

                        <tr>

                            <th>Company</th>

                            <th>Job Title</th>

                            <th>Candidate</th>

                            <th>Talent Manager</th>

                            <th>Interview Status</th>

                            <th>Interview Level</th>

                            <th>Approval Date</th>

                            <th>Arrangement</th>

                            <th>TSM</th>

                            <th>Actions</th>

                        </tr>

                    </thead>


                    <tbody>

                        {filteredData.length > 0 ? (

                            filteredData.map((item, index) => (

                                <tr key={index}>

                                    {/* Company */}

                                    <td>
                                        <a href="#">
                                            {item.company}
                                        </a>
                                    </td>


                                    {/* Job */}

                                    <td className="job-title-cell">

                                        <a href="#">
                                            {item.jobTitle}
                                        </a>

                                    </td>


                                    {/* Candidate */}

                                    <td>

                                        <a href="#">
                                            {item.candidate}
                                        </a>

                                    </td>


                                    {/* Talent Manager */}

                                    <td>
                                        {item.talentManager}
                                    </td>


                                    {/* Status */}

                                    <td>
                                        {item.status}
                                    </td>


                                    {/* Level */}

                                    <td>
                                        {item.level}
                                    </td>


                                    {/* Approval */}

                                    <td>

                                        <strong>
                                            {item.approvalDate}
                                        </strong>

                                        <br />

                                        <span>
                                            {item.days}
                                        </span>

                                    </td>


                                    {/* Arrangement */}

                                    <td>
                                        {item.arrangement}
                                    </td>


                                    {/* TSM */}

                                    <td
                                        className={
                                            item.tsm === "Not assigned"
                                                ? "not-assigned"
                                                : "assigned"
                                        }
                                    >
                                        {item.tsm}
                                    </td>


                                    {/* Actions */}

                                    <td>
                                        <ActionButtons
                                            candidate={item.candidate}
                                        />
                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td
                                    colSpan="10"
                                    className="no-record"
                                >
                                    No record found
                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default SourcedInterview;