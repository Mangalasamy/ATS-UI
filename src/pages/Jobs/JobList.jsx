import React, { useEffect, useState } from "react";
import {fetchJobs} from "../../Services/ApiService"
const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Mock API response
    const loadJobs = async () => {
      try {
        const jobsData = await fetchJobs();
        setJobs(jobsData);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    loadJobs();
  }, []);

  const openJobDetails = (jobId) => {
    window.open(
      `/jobs/${jobId}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="container-fluid py-4">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>
          <h3 className="mb-1">Jobs</h3>

          <p className="text-muted mb-0">
            Manage and view all job openings
          </p>
        </div>

        <span className="badge bg-primary fs-6">
          {jobs.length} Jobs
        </span>

      </div>

      {/* Job Grid */}
      <div className="row g-4">

        {jobs.map((job) => (

          <div
            className="col-12 col-md-6 col-lg-4 col-xl-3"
            key={job.jobId}
          >

            <div className="card h-100 shadow-sm border-0">

              <div className="card-body">

                {/* Job Number */}
                <div className="d-flex justify-content-between align-items-center mb-3">

                  <span className="badge bg-primary">
                    {job.jobNumber}
                  </span>

                  <span
                    className={`badge ${
                      job.isActive
                        ? "bg-success"
                        : "bg-secondary"
                    }`}
                  >
                    {job.isActive
                      ? "Active"
                      : "Inactive"}
                  </span>

                </div>

                {/* Job Title */}
                <h5 className="card-title">
                  {job.jobTitle}
                </h5>

                {/* Description */}
                <p
                  className="text-muted small"
                  style={{
                    minHeight: "48px",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}
                >
                  {job.jobDescription}
                </p>

                <hr />

                {/* Location */}
                <div className="mb-2">
                  <small className="text-muted">
                    Location
                  </small>

                  <div>
                    {job.city}, {job.country}
                  </div>
                </div>

                {/* Experience */}
                <div className="mb-2">
                  <small className="text-muted">
                    Experience
                  </small>

                  <div>
                    {job.minimumExperience} years
                  </div>
                </div>

                {/* Industry */}
                <div className="mb-2">
                  <small className="text-muted">
                    Industry
                  </small>

                  <div>
                    {job.industry}
                  </div>
                </div>

                {/* Work Setup */}
                <div className="mb-2">
                  <small className="text-muted">
                    Work Setup
                  </small>

                  <div>
                    {job.workSetup}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <small className="text-muted">
                    Budget
                  </small>

                  <div>
                    {job.currency}{" "}
                    {job.budgetMin} - {job.budgetMax}
                  </div>
                </div>

              </div>

              {/* Footer */}
              <div className="card-footer bg-white border-0 pb-3">

                <button
                  className="btn btn-outline-primary w-100"
                  onClick={() =>
                    openJobDetails(job.jobId)
                  }
                >
                  View Details
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default JobList;