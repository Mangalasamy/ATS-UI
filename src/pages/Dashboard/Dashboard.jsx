import DashboardCard from "../../components/DashboardCard";
import "./Dashboard.css";
const jobs = [
    {
        id: 1,
        company: "ABC CORP",
        logo: "abc",
        clientFocus: "Yes",
        jobTitle: "Graphic Designer",
        priTM: "Richard",
        location: "Singapore",
        status: "Active",
        activationDate: "28-Nov-2023",
        progress: "0/3",
        progressText: "Interview Ready"
    },
    {
        id: 2,
        company: "XYZ TECHNOLOGIES",
        logo: "xyz",
        clientFocus: "Yes",
        jobTitle: "Software Developer",
        priTM: "John",
        location: "Bangalore",
        status: "Active",
        activationDate: "01-Dec-2023",
        progress: "2/5",
        progressText: "Screening"
    },
     {
        id: 3,
        company: "XYZ TECHNOLOGIES",
        logo: "xyz",
        clientFocus: "Yes",
        jobTitle: "Software Developer",
        priTM: "John",
        location: "Bangalore",
        status: "Active",
        activationDate: "01-Dec-2023",
        progress: "2/5",
        progressText: "Screening"
    },
     {
        id: 4,
        company: "XYZ TECHNOLOGIES",
        logo: "xyz",
        clientFocus: "Yes",
        jobTitle: "Software Developer",
        priTM: "John",
        location: "Bangalore",
        status: "Active",
        activationDate: "01-Dec-2023",
        progress: "2/5",
        progressText: "Screening"
    }
];

const Dashboard = () => {

    return (
        <>
            {/* Page Header */}
            <div className="content-header">

                <div>
                    <h2>Dashboard</h2>

                    <p>
                        Candidate Tracking System
                    </p>
                </div>

                <button className="btn btn-primary">
                    + Add Candidate
                </button>

            </div>


            {/* Dashboard Cards */}
            <div className="row g-4">

                <DashboardCard
                    title="Total Candidates"
                    value="1,245"
                />

                <DashboardCard
                    title="New Candidates"
                    value="125"
                />

                <DashboardCard
                    title="In Progress"
                    value="86"
                />

                <DashboardCard
                    title="Closed"
                    value="320"
                />

            </div>
             <div className="row search-section justify-content-center">

                {/* Candidate Search */}
                <div className="col-md-4 mb-3">
                    <div className="input-group">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Candidate Quick Search"
                        />

                        <button className="btn btn-outline-secondary dropdown-toggle">
                        </button>

                    </div>
                </div>
                <div className="col-md-4 mb-3">

                    <div className="input-group">

                        <input
                            type="text"
                            className="form-control job-search"
                            placeholder="Job card search"
                        />

                        <button className="btn btn-primary dropdown-toggle">
                        </button>

                    </div>

                </div>
            </div>
              {/* Job Table */}
            <div className="table-responsive job-table-wrapper">

                <table className="table job-table align-middle mb-0">

                    <thead>
                        <tr>

                            <th>Priority</th>

                            <th>Logo</th>

                            <th>Company</th>

                            <th>Client<br />Focus</th>

                            <th>Job Title</th>

                            <th>Pri TM</th>

                            <th>Location</th>

                            <th>Job<br />Status</th>

                            <th>Activation Date</th>

                            <th>Sub Progress</th>

                            <th></th>

                        </tr>
                    </thead>


                    <tbody>

                        {jobs.map((job) => (

                            <tr key={job.id}>

                                {/* Priority */}
                                <td>
                                    <span className="priority-star">
                                        ★
                                    </span>
                                </td>


                                {/* Logo */}
                                <td>

                                    <div className="company-logo">
                                        {job.logo}
                                    </div>

                                </td>


                                {/* Company */}
                                <td>
                                    <span className="company-name">
                                        {job.company}
                                    </span>
                                </td>


                                {/* Client Focus */}
                                <td>
                                    <a href="#" className="client-focus">
                                        {job.clientFocus}
                                    </a>
                                </td>


                                {/* Job Title */}
                                <td>
                                    {job.jobTitle}
                                </td>


                                {/* Pri TM */}
                                <td>
                                    {job.priTM}
                                </td>


                                {/* Location */}
                                <td>
                                    {job.location}
                                </td>


                                {/* Status */}
                                <td>
                                    <span className="status-active">
                                        {job.status}
                                    </span>
                                </td>


                                {/* Activation */}
                                <td>
                                    {job.activationDate}
                                </td>


                                {/* Progress */}
                                <td>

                                    <div className="progress-container">

                                        <i className="bi bi-person-fill"></i>

                                        <span className="progress-count">
                                            {job.progress}
                                        </span>

                                        <span className="progress-status">
                                            {job.progressText}
                                        </span>

                                    </div>

                                </td>


                                {/* WhatsApp */}
                                <td>

                                    <button className="whatsapp-btn">
                                        <i className="bi bi-whatsapp"></i>
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </>
    );
};

export default Dashboard;