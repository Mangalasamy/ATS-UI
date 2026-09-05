import React from "react";
import "./JobPriorityDashboard.css";

const jobs = [
    {
        sn: 1,
        feeding: "100 %",
        focus: "In-focus",
        company: "DayOne",
        contact: "Dwi Oen",
        team: "Team 2 - DayOne",
        jobTitle: "Network Engineer (TH)",
        portfolio: "Closing pipeline",
        assigned: "Sumera Nageen - Team 3 - Multi"
    },
    {
        sn: 2,
        feeding: "100 %",
        focus: "In-focus",
        company: "DayOne",
        contact: "Shehlee, Yasotha",
        team: "Team 2 - DayOne",
        jobTitle: "DCO-Mechanical Engineering Manager",
        portfolio: "1",
        assigned: "Sumera Nageen - Team 3 - Multi"
    },
    {
        sn: 3,
        feeding: "100 %",
        focus: "In-focus",
        company: "DayOne",
        contact: "Sarawadee",
        team: "Team 2 - DayOne",
        jobTitle: "Assistant Facility Engineer DC Operations (TH)",
        portfolio: "Closing pipeline",
        assigned: "Sumera Nageen - Team 3 - Multi"
    },
    {
        sn: 4,
        feeding: "100 %",
        focus: "In-focus",
        company: "DayOne",
        contact: "Maha",
        team: "Team 2 - DayOne",
        jobTitle: "Business Process, Specialist (KL)",
        portfolio: "1",
        assigned: "Sumera Nageen - Team 3 - Multi"
    },
    {
        sn: 5,
        feeding: "0 %",
        focus: "Critical",
        company: "DayOne",
        contact: "Sofia",
        team: "Team 2 - DayOne",
        jobTitle: "Benefits Manager",
        portfolio: "2",
        assigned: "Sumera Nageen - Team 3 - Multi"
    },
    {
        sn: 6,
        feeding: "100 %",
        focus: "In-focus",
        company: "DayOne",
        contact: "Hazreen",
        team: "Team 2 - DayOne",
        jobTitle: "Staff Claims Executive (Accounts Payable Executive) (KL)",
        portfolio: "Closing pipeline",
        assigned: "Sagar Sehrawat - Team 3 - Multi"
    },
    {
        sn: 7,
        feeding: "0 %",
        focus: "Critical",
        company: "DayOne",
        contact: "Jing",
        team: "Team 2 - DayOne",
        jobTitle: "Planning & Scheduling Manager (JB)",
        portfolio: "1",
        assigned: "Pradeepa Mangalsamy - Team 3 - Multi"
    },
    {
        sn: 8,
        feeding: "100 %",
        focus: "In-focus",
        company: "DayOne",
        contact: "Maha",
        team: "Team 2 - DayOne",
        jobTitle: "IT Support Engineer (TH)",
        portfolio: "1",
        assigned: "Bilal Siddiqui - Team 3 - Multi"
    },
    {
        sn: 9,
        feeding: "50.0 %",
        focus: "Critical",
        company: "DayOne",
        contact: "Sofia",
        team: "Team 2 - DayOne",
        jobTitle: "Manager, Global Mobility",
        portfolio: "1",
        assigned: "Pradeepa Mangalsamy - Team 3 - Multi"
    },
    {
        sn: 10,
        feeding: "0 %",
        focus: "In-focus",
        company: "DayOne",
        contact: "Sarawadee",
        team: "Team 2 - DayOne",
        jobTitle: "Assistant Facility Engineer DC Operations (ID)",
        portfolio: "1",
        assigned: "Sagar Sehrawat - Team 3 - Multi"
    },
    {
        sn: 11,
        feeding: "0 %",
        focus: "Critical",
        company: "DayOne",
        contact: "Jing",
        team: "Team 2 - DayOne",
        jobTitle: "Commissioning Sr Engineer / Sr Commissioning Mgr (JB)",
        portfolio: "1",
        assigned: "Sagar Sehrawat - Team 3 - Multi"
    },
    {
        sn: 12,
        feeding: "0 %",
        focus: "In-focus",
        company: "DayOne",
        contact: "Jing",
        team: "Team 2 - DayOne",
        jobTitle: "Data Center Document Controller",
        portfolio: "1",
        assigned: "Bilal Siddiqui - Team 3 - Multi"
    },
    {
        sn: 13,
        feeding: "100 %",
        focus: "In-focus",
        company: "DayOne",
        contact: "Sarawadee",
        team: "Team 2 - DayOne",
        jobTitle: "Assistant Facility Engineer DC Operations (MY) (UB/KL)",
        portfolio: "1",
        assigned: "Sumera Nageen - Team 3 - Multi"
    },
    {
        sn: 14,
        feeding: "100 %",
        focus: "Critical",
        company: "DayOne",
        contact: "Jing",
        team: "Team 2 - DayOne",
        jobTitle: "EHS Manager (Project Construction) (KL)",
        portfolio: "3",
        assigned: "Bilal Siddiqui - Team 3 - Multi"
    },
    {
        sn: 15,
        feeding: "50.0 %",
        focus: "Critical",
        company: "DayOne",
        contact: "Hazreen",
        team: "Team 2 - DayOne",
        jobTitle: "Business Analyst",
        portfolio: "1",
        assigned: "Pradeepa Mangalsamy - Team 3 - Multi"
    },
    {
        sn: 16,
        feeding: "100 %",
        focus: "In-focus",
        company: "SMBC",
        contact: "Joe Yi",
        team: "Team 3 - Multi",
        jobTitle: "VP, Project Manager, Supply Chain Finance",
        portfolio: "3",
        assigned: "Bilal Siddiqui - Team 3 - Multi"
    },
    {
        sn: 17,
        feeding: "0 %",
        focus: "In-focus",
        company: "SMBC",
        contact: "Moh San",
        team: "Team 3 - Multi",
        jobTitle: "VP, Section Head of Agency Operations",
        portfolio: "2",
        assigned: "Bilal Siddiqui - Team 3 - Multi"
    },
    {
        sn: 18,
        feeding: "50.0 %",
        focus: "In-focus",
        company: "SMBC",
        contact: "Lucille",
        team: "Team 3 - Multi",
        jobTitle: "Senior Analyst/Assistant Vice President, Structured Trade Operations - Trade Finance Group",
        portfolio: "1",
        assigned: "Sagar Sehrawat - Team 3 - Multi"
    }
];

const recruiters = [
    {
        ranking: 1,
        name: "Pradeepa Mangalsamy - Team 3 - Multi",
        jobs: 3
    },
    {
        ranking: 2,
        name: "Richard Low - null",
        jobs: 0
    }
];

const teams = [
    {
        sn: 1,
        team: "Team 1 - StartHub",
        jobs: 0
    },
    {
        sn: 2,
        team: "Team 2 - DayOne",
        jobs: 0
    },
    {
        sn: 3,
        team: "Team 3",
        jobs: 18
    }
];

function SummaryCard({ title, value, type }) {
    return (
        <div className={`summary-card ${type}`}>
            <span>{title}</span>
            <strong>{value}</strong>
        </div>
    );
}

function JobPriorityDashboard() {
    return (
        <div className="dashboard-page">

            {/* Top navigation */}
            <div className="top-navigation">

                <button className="nav-tab active">
                    <i className="bi bi-people-fill"></i>
                    Team Performance Module
                </button>

                <button className="nav-tab">
                    <i className="bi bi-briefcase-fill"></i>
                    Job Priority and Assignment
                </button>

            </div>


            <div className="dashboard-container">

                {/* Title */}
                <div className="dashboard-title">
                    <h1>
                        JOB PRIORITIES & TM ASSIGNMENT DASHBOARD
                    </h1>

                    <div className="dashboard-date">
                        (09-Jul-2026)
                    </div>
                </div>


                {/* Summary */}
                <div className="summary-area">

                    <SummaryCard
                        title="Critical"
                        value="6"
                        type="critical"
                    />

                    <SummaryCard
                        title="Urgent"
                        value="0"
                        type="urgent"
                    />

                    <SummaryCard
                        title="In-focus"
                        value="12"
                        type="infocus"
                    />

                </div>


                {/* Filter */}
                <div className="filter-area">

                    <select className="form-select client-filter">
                        <option>Client</option>
                        <option>DayOne</option>
                        <option>SMBC</option>
                    </select>

                    <div className="unassigned-alert">
                        Jobs with NO TM assigned (0) / Reactivated Jobs (0)
                    </div>

                </div>


                {/* Main table */}
                <div className="job-table-wrapper">

                    <table className="table job-table">

                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Feeding %</th>
                                <th>Update Focus</th>
                                <th>Add Notes</th>
                                <th>Focus</th>
                                <th>Company</th>
                                <th>Primary Contacts</th>
                                <th>Team</th>
                                <th>Job Title</th>
                                <th>TM Assignment</th>
                                <th>Portfolio Priority</th>
                                <th>Assigned Pri TM</th>
                            </tr>
                        </thead>

                        <tbody>

                            {jobs.map((job) => (

                                <tr key={job.sn}>

                                    <td
                                        className={
                                            job.focus === "Critical"
                                                ? "serial critical"
                                                : "serial"
                                        }
                                    >
                                        {job.sn}
                                    </td>

                                    <td>
                                        {job.feeding}
                                    </td>

                                    <td>
                                        <button className="small-action">
                                            Update Focus
                                        </button>
                                    </td>

                                    <td>
                                        <button className="small-action">
                                            Notes
                                        </button>
                                    </td>

                                    <td
                                        className={
                                            job.focus === "Critical"
                                                ? "focus-critical"
                                                : "focus-normal"
                                        }
                                    >
                                        {job.focus}
                                    </td>

                                    <td>
                                        {job.company}
                                    </td>

                                    <td>
                                        {job.contact}
                                    </td>

                                    <td>
                                        {job.team}
                                    </td>

                                    <td className="job-title-cell">
                                        <a href="#">
                                            {job.jobTitle}
                                        </a>
                                    </td>

                                    <td>
                                        <button className="assign-btn">
                                            Assign
                                        </button>
                                    </td>

                                    <td>
                                        {job.portfolio}
                                    </td>

                                    <td className="assigned-tm">
                                        {job.assigned}
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>


                {/* Lock button */}
                <div className="lock-area">

                    <button className="lock-button">
                        <i className="bi bi-lock-fill"></i>
                        Lock-in TM Assignment for TODAY
                    </button>

                </div>


                {/* Bottom sections */}

                <div className="row bottom-section">

                    {/* Recruiter Ranking */}
                    <div className="col-lg-6">

                        <h2>
                            Recruiter Ranking
                        </h2>

                        <table className="table bottom-table">

                            <thead>
                                <tr>
                                    <th>Ranking</th>
                                    <th>Recruiter</th>
                                    <th>Jobs Assigned</th>
                                </tr>
                            </thead>

                            <tbody>

                                {recruiters.map((item) => (

                                    <tr key={item.ranking}>

                                        <td>
                                            {item.ranking}
                                        </td>

                                        <td className="blue-text">
                                            {item.name}
                                        </td>

                                        <td>
                                            {item.jobs}
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>


                    {/* Team Assignment */}
                    <div className="col-lg-6">

                        <h2>
                            Team Assignment
                        </h2>

                        <table className="table bottom-table">

                            <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>Team</th>
                                    <th>Jobs Assigned</th>
                                </tr>
                            </thead>

                            <tbody>

                                {teams.map((team) => (

                                    <tr key={team.sn}>

                                        <td>
                                            {team.sn}
                                        </td>

                                        <td>
                                            {team.team}
                                        </td>

                                        <td>
                                            {team.jobs}
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default JobPriorityDashboard;