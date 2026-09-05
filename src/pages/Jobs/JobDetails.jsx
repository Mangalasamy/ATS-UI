import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {fetchJobsByID} from "../../Services/ApiService"

const JobDetails = () => {

  const { id } = useParams();
  const [job, setJob] = useState([]);
useEffect(() => {
    // Mock API response
    const loadJobs = async () => {
      try {
        const jobsData = await fetchJobsByID(id);
        setJob(jobsData);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    loadJobs();
  }, []);

  // Mock job data
  // Later replace this with API call using jobId
  // const job = {
  //   jobId: 1,
  //   jobNumber: "ATS-2026-000001",

  //   jobDescription: "Good job",
  //   jobTitle: "Good job",

  //   country: "India",
  //   city: "Bangalore",

  //   visaWorkAuthorization: "PR",

  //   educationQualification: "B.E",

  //   certificationRequirements: "test",

  //   minimumExperience: "3",

  //   specificExperience: "test",

  //   industry: "Telecom",

  //   budgetMin: "2000",
  //   budgetMax: "5000",
  //   currency: "INR",

  //   customerRemarks: "tets",

  //   workSetup: "Office / Onsite",

  //   interviewRounds: [
  //     {
  //       roundNumber: 1,
  //       interviewMethod: "Phone"
  //     },
  //     {
  //       roundNumber: 2,
  //       interviewMethod: "Video Call"
  //     }
  //   ],

  //   officeHours: "9 AM to 7 PM",

  //   shiftBased: false,

  //   shiftTiming: "",

  //   clientPocs: [
  //     {
  //       clientPocName: "person1",
  //       clientPocNumber: "7473478",
  //       clientPocEmail: "person@gmail.com"
  //     },
  //     {
  //       clientPocName: "Person2",
  //       clientPocNumber: "234234234",
  //       clientPocEmail: "person2@gmail.com"
  //     }
  //   ],

  //   isActive: true
  // };

  return (
    <div className="container-fluid py-4">

      {/* ================================= */}
      {/* Header */}
      {/* ================================= */}

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>

          <div className="d-flex align-items-center gap-2 mb-2">

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

          <h2 className="mb-1">
            {job.jobTitle}
          </h2>

          <p className="text-muted mb-0">
            Job Details
          </p>

        </div>

        <button
          className="btn btn-outline-secondary"
          onClick={() => window.close()}
        >
          Close
        </button>

      </div>


      {/* ================================= */}
      {/* Job Description */}
      {/* ================================= */}

      <div className="card shadow-sm border-0 mb-4">

        <div className="card-body">

          <h5 className="border-bottom pb-2 mb-3">
            1. Job Description
          </h5>

          <p className="mb-0">
            {job.jobDescription}
          </p>

        </div>

      </div>


      {/* ================================= */}
      {/* Job Information */}
      {/* ================================= */}

      <div className="card shadow-sm border-0 mb-4">

        <div className="card-body">

          <h5 className="border-bottom pb-2 mb-3">
            2. Job Information
          </h5>

          <div className="row">

            <Detail
              label="Job Title"
              value={job.jobTitle}
            />

            <Detail
              label="Industry"
              value={job.industry}
            />

            <Detail
              label="Country"
              value={job.country}
            />

            <Detail
              label="City"
              value={job.city}
            />

            <Detail
              label="Work Setup"
              value={job.workSetup}
            />

            <Detail
              label="Visa / Work Authorization"
              value={job.visaWorkAuthorization}
            />

          </div>

        </div>

      </div>


      {/* ================================= */}
      {/* Qualification */}
      {/* ================================= */}

      <div className="card shadow-sm border-0 mb-4">

        <div className="card-body">

          <h5 className="border-bottom pb-2 mb-3">
            3. Qualification & Experience
          </h5>

          <div className="row">

            <Detail
              label="Education Qualification"
              value={job.educationQualification}
            />

            <Detail
              label="Minimum Experience"
              value={`${job.minimumExperience} Years`}
            />

            <Detail
              label="Specific Experience"
              value={job.specificExperience}
            />

            <Detail
              label="Certification Requirements"
              value={job.certificationRequirements}
            />

          </div>

        </div>

      </div>


      {/* ================================= */}
      {/* Budget */}
      {/* ================================= */}

      <div className="card shadow-sm border-0 mb-4">

        <div className="card-body">

          <h5 className="border-bottom pb-2 mb-3">
            4. Budget
          </h5>

          <div className="row">

            <Detail
              label="Minimum Budget"
              value={`${job.currency} ${job.budgetMin}`}
            />

            <Detail
              label="Maximum Budget"
              value={`${job.currency} ${job.budgetMax}`}
            />

            <Detail
              label="Currency"
              value={job.currency}
            />

          </div>

        </div>

      </div>


      {/* ================================= */}
      {/* Working Hours */}
      {/* ================================= */}

      <div className="card shadow-sm border-0 mb-4">

        <div className="card-body">

          <h5 className="border-bottom pb-2 mb-3">
            5. Working Hours
          </h5>

          <div className="row">

            <Detail
              label="Office Hours"
              value={job.officeHours}
            />

            <Detail
              label="Shift Based"
              value={job.shiftBased ? "Yes" : "No"}
            />

            {job.shiftBased && (
              <Detail
                label="Shift Timing"
                value={job.shiftTiming}
              />
            )}

          </div>

        </div>

      </div>


      {/* ================================= */}
      {/* Customer Remarks */}
      {/* ================================= */}

      <div className="card shadow-sm border-0 mb-4">

        <div className="card-body">

          <h5 className="border-bottom pb-2 mb-3">
            6. Customer Remarks
          </h5>

          <p className="mb-0">
            {job.customerRemarks || "-"}
          </p>

        </div>

      </div>


      {/* ================================= */}
      {/* Interview Process */}
      {/* ================================= */}

      <div className="card shadow-sm border-0 mb-4">

        <div className="card-body">

          <h5 className="border-bottom pb-2 mb-3">
            7. Interview Process
          </h5>

          <div className="table-responsive">

            <table className="table table-bordered align-middle">

              <thead className="table-light">

                <tr>
                  <th style={{ width: "150px" }}>
                    Round
                  </th>

                  <th>
                    Interview Method
                  </th>
                </tr>

              </thead>

              <tbody>

                {job.interviewRounds?.map(
                  (round) => (

                    <tr key={round.roundNumber}>

                      <td>
                        Round {round.roundNumber}
                      </td>

                      <td>
                        {round.interviewMethod}
                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>


      {/* ================================= */}
      {/* Client POCs */}
      {/* ================================= */}

      <div className="card shadow-sm border-0 mb-4">

        <div className="card-body">

          <h5 className="border-bottom pb-2 mb-3">
            8. Client POCs
          </h5>

          <div className="table-responsive">

            <table className="table table-bordered align-middle">

              <thead className="table-light">

                <tr>

                  <th>
                    Name
                  </th>

                  <th>
                    Phone Number
                  </th>

                  <th>
                    Email
                  </th>

                </tr>

              </thead>

              <tbody>

                {job.clientPocs?.map(
                  (poc, index) => (

                    <tr key={index}>

                      <td>
                        {poc.clientPocName}
                      </td>

                      <td>
                        {poc.clientPocNumber}
                      </td>

                      <td>
                        {poc.clientPocEmail}
                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>


      {/* ================================= */}
      {/* Bottom Actions */}
      {/* ================================= */}

      <div className="d-flex justify-content-end gap-2 mb-4">

        <button
          className="btn btn-secondary"
          onClick={() => window.close()}
        >
          Close
        </button>

        <button
          className="btn btn-primary"
         onClick={() =>
      window.open(
        `/jobs/${job.jobId}/edit`,
        "_blank",
        "noopener,noreferrer"
      )
    }
        >
          Edit Job
        </button>

      </div>

    </div>
  );
};


/* ================================= */
/* Reusable Detail Component */
/* ================================= */

const Detail = ({ label, value }) => {

  return (
    <div className="col-md-6 col-lg-4 mb-3">

      <div className="text-muted small mb-1">
        {label}
      </div>

      <div className="fw-semibold">
        {value || "-"}
      </div>

    </div>
  );
};


export default JobDetails;