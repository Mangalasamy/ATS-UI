import React, { useState } from "react";
import "./SourcedOperationsDashboard.css";

const workflowCards = [
    {
        title: "Mgmt Approvals",
        count: 0,
        className: "approval-card"
    },
    {
        title: "Pending Consent",
        count: 0,
        className: "pending-card"
    },
    {
        title: "Consent Received",
        count: 0,
        className: "pending-card"
    },
    {
        title: "Submit to Client",
        count: 0,
        className: "approval-card"
    },
    {
        title: "Client Questions",
        count: 0,
        className: "questions-card"
    }
];

const noteCards = [
    {
        title: "Interview Notes",
        count: 13
    },
    {
        title: "Client Notes",
        count: 2
    },
    {
        title: "Job Notes",
        count: 10
    },
    {
        title: "Candidate Notes",
        count: 115
    }
];

const candidates = [
    // Add API data here later
    // {
    //     candidate: "John Smith",
    //     company: "ABC Corp",
    //     jobTitle: "Software Engineer",
    //     jobStatus: "Active",
    //     talentManager: "Richard",
    //     tmPitch: "Ready",
    //     remarks: "Good candidate"
    // }
];




function NoteCards() {
    return (
        <div className="note-cards">

            {noteCards.map((item) => (

                <button
                    className="note-card"
                    key={item.title}
                >
                    {item.title} ({item.count})
                </button>

            ))}

        </div>
    );
}


function WorkflowCards({ selectedWorkflow, setSelectedWorkflow }) {

    return (
        <div className="workflow-cards">

            {workflowCards.map((item) => (

                <button
                    key={item.title}
                    onClick={() =>
                        setSelectedWorkflow(item.title)
                    }
                    className={`workflow-card ${item.className} ${
                        selectedWorkflow === item.title
                            ? "selected"
                            : ""
                    }`}
                >

                    <span>
                        {item.title}
                    </span>

                    <span>
                        ({item.count})
                    </span>

                </button>

            ))}

        </div>
    );
}


function ApprovalTabs({ activeTab, setActiveTab }) {

    return (
        <div className="approval-tabs">

            <button
                className={
                    activeTab === "pending"
                        ? "active"
                        : ""
                }
                onClick={() => setActiveTab("pending")}
            >
                Pending approval (0)
            </button>

            <button
                className={
                    activeTab === "approved"
                        ? "active"
                        : ""
                }
                onClick={() => setActiveTab("approved")}
            >
                Approved (0)
            </button>

        </div>
    );
}


function CandidateTable() {

    return (
        <div className="candidate-table-wrapper">

            <table className="candidate-table">

                <thead>
                    <tr>

                        <th>S/N</th>

                        <th>Candidate</th>

                        <th>Company</th>

                        <th>Job Title</th>

                        <th>Job Status</th>

                        <th>Talent Manager</th>

                        <th>TM Pitch</th>

                        <th>Remarks</th>

                        <th>Action</th>

                    </tr>
                </thead>

                <tbody>

                    {candidates.length > 0 ? (

                        candidates.map((candidate, index) => (

                            <tr key={index}>

                                <td>
                                    {index + 1}
                                </td>

                                <td>
                                    {candidate.candidate}
                                </td>

                                <td>
                                    {candidate.company}
                                </td>

                                <td>
                                    {candidate.jobTitle}
                                </td>

                                <td>
                                    {candidate.jobStatus}
                                </td>

                                <td>
                                    {candidate.talentManager}
                                </td>

                                <td>
                                    {candidate.tmPitch}
                                </td>

                                <td>
                                    {candidate.remarks}
                                </td>

                                <td>

                                    <button className="action-button">
                                        View
                                    </button>

                                </td>

                            </tr>

                        ))

                    ) : (

                        <tr>

                            <td
                                colSpan="9"
                                className="no-record"
                            >
                                No record found
                            </td>

                        </tr>

                    )}

                </tbody>

            </table>

        </div>
    );
}


function SourcedOperationsDashboard() {

    const [selectedWorkflow, setSelectedWorkflow] =
        useState("Mgmt Approvals");

    const [activeTab, setActiveTab] =
        useState("pending");

    return (
        <div className="sourced-page">

           


            {/* ============================================
                PAGE TITLE
            ============================================ */}

            <section className="dashboard-banner">

                <h1>
                    Sourced Operations Dashboard
                </h1>

            </section>


            {/* ============================================
                MAIN CONTENT
            ============================================ */}

            <main className="dashboard-content">

                {/* Notes */}

                <NoteCards />


                {/* Workflow */}

                <WorkflowCards
                    selectedWorkflow={selectedWorkflow}
                    setSelectedWorkflow={setSelectedWorkflow}
                />


                {/* Approval tabs */}

                <ApprovalTabs
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />


                {/* Results */}

                <CandidateTable />

            </main>

        </div>
    );
}

export default SourcedOperationsDashboard;