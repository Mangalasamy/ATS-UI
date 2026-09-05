import React, { useState } from "react";
import "./DoodleLabsReview.css";

const jobs = [
    {
        id: 1,
        title: "Embedded Software Engineer",
        contact: "Simon\nChua,Jolynn\nTan",
        activationDate: "05-Feb-\n2026",
        feedback: 0,
        kiv: 1,
        interviewing: 0,
        submissions: 6,
        priorityStatus: "No"
    },
    {
        id: 2,
        title: "Junior Engineer\n(Hardware Design)",
        contact: "Simon\nChua,Jolynn\nTan",
        activationDate: "04-Mar-\n2026",
        feedback: 0,
        kiv: 1,
        interviewing: 0,
        submissions: 3,
        priorityStatus: "No"
    },
    {
        id: 3,
        title: "Principal Full-Stack\nEngineer",
        contact: "Simon\nChua,Jolynn\nTan",
        activationDate: "10-Mar-\n2026",
        feedback: 2,
        kiv: 0,
        interviewing: 0,
        submissions: 5,
        priorityStatus: "No"
    },
    {
        id: 4,
        title: "Senior Software\nEngineer",
        contact: "Simon\nChua,Jolynn\nTan",
        activationDate: "12-Mar-\n2026",
        feedback: 1,
        kiv: 2,
        interviewing: 1,
        submissions: 8,
        priorityStatus: "No"
    }
];

const summaryCards = [
    {
        value: "8",
        label: "Active Jobs",
        type: "blue"
    },
    {
        value: "0",
        label: "Priority Jobs",
        type: "blue"
    },
    {
        value: "24",
        extra: "(3)",
        label: "Pending Feedback",
        type: "orange"
    },
    {
        value: "0",
        label: "Rejected",
        type: "orange"
    },
    {
        value: "1",
        extra: "(1)",
        label: "Interviewing",
        type: "orange"
    },
    {
        value: "7",
        label: "Offered",
        type: "orange"
    }
];

function SummaryCard({ value, extra, label, type }) {
    return (
        <div className={`summary-card ${type}`}>
            <div className="summary-value">
                {value}

                {extra && (
                    <span className="summary-extra">
                        {extra}
                    </span>
                )}
            </div>

            <div className="summary-label">
                {label}
            </div>
        </div>
    );
}

function DoodleLabsReview() {

    const [selectedRecruiter, setSelectedRecruiter] =
        useState("");

    const handleAction = (action, jobId) => {
        console.log(`${action} clicked for job ${jobId}`);
    };

    return (
        <div className="doodle-page">

            {/* ============================================
                HEADER
            ============================================ */}

            <div className="dashboard-header">

                <h1>
                    Doodle Labs Review Dashboard
                </h1>

                {/* Recruiter filter */}

                <div className="recruiter-filter">

                    <label>
                        Recruiters
                    </label>

                    <select
                        value={selectedRecruiter}
                        onChange={(e) =>
                            setSelectedRecruiter(e.target.value)
                        }
                    >
                        <option value="">
                            Recruiters
                        </option>

                        <option value="Simon">
                            Simon
                        </option>

                        <option value="Jolynn">
                            Jolynn
                        </option>

                        <option value="Tan">
                            Tan
                        </option>

                    </select>

                    <button>
                        <i className="bi bi-chevron-down"></i>
                    </button>

                </div>

            </div>


            {/* ============================================
                SUMMARY
            ============================================ */}

            <div className="summary-container">

                {summaryCards.map((card, index) => (

                    <SummaryCard
                        key={index}
                        value={card.value}
                        extra={card.extra}
                        label={card.label}
                        type={card.type}
                    />

                ))}

            </div>


            {/* ============================================
                ACTIVE JOBS
            ============================================ */}

            <div className="jobs-section">

                <h2>
                    Active Jobs
                </h2>

                <div className="jobs-table-wrapper">

                    <table className="jobs-table">

                        <thead>

                            <tr>

                                <th>
                                    S/N
                                </th>

                                <th className="sortable">
                                    Job Title
                                    <i className="bi bi-caret-up-fill"></i>
                                </th>

                                <th>
                                    Primary
                                    <br />
                                    Contacts
                                </th>

                                <th className="sortable">
                                    Activation
                                    <br />
                                    Date
                                    <i className="bi bi-caret-down-fill"></i>
                                </th>

                                <th className="sortable">
                                    Pending
                                    <br />
                                    feedback
                                    <i className="bi bi-caret-down-fill"></i>
                                </th>

                                <th className="sortable">
                                    KIV
                                    <i className="bi bi-caret-down-fill"></i>
                                </th>

                                <th className="sortable">
                                    Interviewing
                                    <i className="bi bi-caret-down-fill"></i>
                                </th>

                                <th className="sortable">
                                    Total Subs
                                    <i className="bi bi-caret-down-fill"></i>
                                </th>

                                <th className="sortable">
                                    Priority Status
                                    <i className="bi bi-caret-down-fill"></i>
                                </th>

                                <th>
                                    Priority
                                </th>

                                <th>
                                    Pause Job
                                </th>

                                <th>
                                    Edit Job
                                </th>

                                <th>
                                    Notes
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {jobs.map((job) => (

                                <tr key={job.id}>

                                    <td>
                                        {job.id}
                                    </td>

                                    <td className="job-title">
                                        <a href="#">
                                            {job.title
                                                .split("\n")
                                                .map((line, index) => (
                                                    <React.Fragment key={index}>
                                                        {line}
                                                        <br />
                                                    </React.Fragment>
                                                ))
                                            }
                                        </a>
                                    </td>

                                    <td className="contact-cell">
                                        {job.contact
                                            .split("\n")
                                            .map((line, index) => (
                                                <React.Fragment key={index}>
                                                    {line}
                                                    <br />
                                                </React.Fragment>
                                            ))
                                        }
                                    </td>

                                    <td>
                                        {job.activationDate
                                            .split("\n")
                                            .map((line, index) => (
                                                <React.Fragment key={index}>
                                                    {line}
                                                    <br />
                                                </React.Fragment>
                                            ))
                                        }
                                    </td>

                                    <td>
                                        {job.feedback > 0 ? (
                                            <a
                                                href="#"
                                                className="number-link"
                                            >
                                                {job.feedback}
                                            </a>
                                        ) : (
                                            job.feedback
                                        )}
                                    </td>

                                    <td>
                                        {job.kiv > 0 ? (
                                            <a
                                                href="#"
                                                className="number-link"
                                            >
                                                {job.kiv}
                                            </a>
                                        ) : (
                                            job.kiv
                                        )}
                                    </td>

                                    <td>
                                        {job.interviewing}
                                    </td>

                                    <td>
                                        {job.submissions}
                                    </td>

                                    <td className="priority-status">
                                        {job.priorityStatus}
                                    </td>

                                    <td>
                                        <button
                                            className="table-action boost"
                                            onClick={() =>
                                                handleAction(
                                                    "Boost",
                                                    job.id
                                                )
                                            }
                                        >
                                            Boost
                                        </button>
                                    </td>

                                    <td>
                                        <button
                                            className="table-action pause"
                                            onClick={() =>
                                                handleAction(
                                                    "Pause",
                                                    job.id
                                                )
                                            }
                                        >
                                            Pause
                                        </button>
                                    </td>

                                    <td>
                                        <button
                                            className="table-action edit"
                                            onClick={() =>
                                                handleAction(
                                                    "Edit",
                                                    job.id
                                                )
                                            }
                                        >
                                            Edit
                                        </button>
                                    </td>

                                    <td>
                                        <button
                                            className="table-action notes"
                                            onClick={() =>
                                                handleAction(
                                                    "Notes",
                                                    job.id
                                                )
                                            }
                                        >
                                            Notes
                                        </button>
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}

export default DoodleLabsReview;