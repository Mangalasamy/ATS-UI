import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {fetchJobsByID,updateJob} from "../../Services/ApiService"
import { getCountries,getCitiesByCountryId} from "../../Services/MasterApi";

const JobEdit = () => {
  const { jobId } = useParams();
const [countries, setCountries] = useState([]);
const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    jobDescription: "",
    jobTitle: "",
    country: "",
    countryId: "",
    city: "",
    cityId: "",
    visaWorkAuthorization: "",
    educationQualification: "",
    certificationRequirements: "",
    minimumExperience: "",
    specificExperience: "",
    industry: "",
    budgetMin: "",
    budgetMax: "",
    currency: "",
    customerRemarks: "",
    workSetup: "",
    officeHours: "",
    shiftBased: false,
    shiftTiming: "",

    interviewRounds: [
      {
        roundNumber: 1,
        interviewMethod: ""
      }
    ],

    clientPocs: [
      {
        clientPocName: "",
        clientPocNumber: "",
        clientPocEmail: ""
      }
    ]
  });

    useEffect(() => {
      const loadCountries = async () => {
              try {
                  const data = await getCountries();
                  setCountries(data);
              } catch (error) {
                  console.error("Error fetching countries:", error);
              }
          };
          loadCountries();
      }, []);
  

  /*
   * Load job
   *
   * Currently using mock data for testing.
   * Later replace this with GET /api/Jobs/{jobId}
   */
  useEffect(() => {

    const loadJobs = async () => {
          try {
            const jobsData = await fetchJobsByID(jobId);
    setFormData(jobsData);
          } catch (error) {
            console.error("Error fetching job details:", error);
          }
        };
    
        loadJobs();

    //setFormData(mockJob);

  }, [jobId]);

// Load cities whenever country changes
  useEffect(() => {
    const loadCities = async () => {
      if (!formData.countryId) {
       setCities([]);
        return;
      }

      try {
          const data = await getCitiesByCountryId(formData.countryId);
           setCities(data);


      } catch (error) {
        console.error("Error loading cities:", error);
        setCities([]);
      }
    };

    loadCities();
  }, [formData.countryId]);

  // ==========================================
  // Normal Input Change
  // ==========================================

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

  };


  // ==========================================
  // Shift Based
  // ==========================================

  const handleShiftChange = (e) => {

    setFormData((prev) => ({
      ...prev,
      shiftBased: e.target.checked,
      shiftTiming: e.target.checked
        ? prev.shiftTiming
        : ""
    }));

  };


  // ==========================================
  // Interview Round Change
  // ==========================================

  const handleInterviewChange = (
    index,
    field,
    value
  ) => {

    setFormData((prev) => {

      const rounds = [...prev.interviewRounds];

      rounds[index] = {
        ...rounds[index],
        [field]: value
      };

      return {
        ...prev,
        interviewRounds: rounds
      };

    });

  };


  // ==========================================
  // Add Interview Round
  // ==========================================

  const addInterviewRound = () => {

    setFormData((prev) => {

      const nextRound =
        prev.interviewRounds.length + 1;

      return {
        ...prev,

        interviewRounds: [
          ...prev.interviewRounds,
          {
            roundNumber: nextRound,
            interviewMethod: ""
          }
        ]
      };

    });

  };

   const handleCountryChange = (e) => {
    const country = e.target.name;
      setFormData((prev) => ({
      ...prev,
      country,
      countryId: e.target.value,
      city: "" // reset city when user changes country
    }));
  };
 const handleCityChange = (e) => {
     setFormData((prev) => ({
      ...prev,
      city: e.target.name,
      cityId: e.target.value
    }));
  };

  // ==========================================
  // Remove Interview Round
  // ==========================================

  const removeInterviewRound = (index) => {

    setFormData((prev) => {

      const rounds =
        prev.interviewRounds
          .filter((_, i) => i !== index)
          .map((round, i) => ({
            ...round,
            roundNumber: i + 1
          }));

      return {
        ...prev,
        interviewRounds: rounds
      };

    });

  };


  // ==========================================
  // Client POC Change
  // ==========================================

  const handlePocChange = (
    index,
    field,
    value
  ) => {

    setFormData((prev) => {

      const pocs = [...prev.clientPocs];

      pocs[index] = {
        ...pocs[index],
        [field]: value
      };

      return {
        ...prev,
        clientPocs: pocs
      };

    });

  };


  // ==========================================
  // Add Client POC
  // ==========================================

  const addClientPoc = () => {

    setFormData((prev) => ({
      ...prev,

      clientPocs: [
        ...prev.clientPocs,
        {
          clientPocName: "",
          clientPocNumber: "",
          clientPocEmail: ""
        }
      ]
    }));

  };


  // ==========================================
  // Remove Client POC
  // ==========================================

  const removeClientPoc = (index) => {

    setFormData((prev) => ({
      ...prev,

      clientPocs: prev.clientPocs.filter(
        (_, i) => i !== index
      )
    }));

  };


  // ==========================================
  // Submit
  // ==========================================

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {

      console.log(
        "Updating Job:",
        jobId
      );

      console.log(
        "Payload:",
        formData
      );
var response= await updateJob(jobId, formData);
if (response.status !== 200 ) {
        throw new Error("Failed to create job");
      }

    

      await new Promise((resolve) =>
        setTimeout(resolve, 500)
      );

      setMessage(
        "Job updated successfully."
      );

    } catch (error) {

      console.error(error);

      setMessage(
        "Failed to update job."
      );

    } finally {

      setLoading(false);

    }

  };


  return (
    <div className="container-fluid py-4">

      {/* ================================= */}
      {/* Header */}
      {/* ================================= */}

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>

          <h3 className="mb-1">
            Edit Job
          </h3>

          <p className="text-muted mb-0">
            Job ID: {jobId}
          </p>

        </div>

        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => window.close()}
        >
          Close
        </button>

      </div>


      <form onSubmit={handleSubmit}>

        {/* ================================= */}
        {/* 1. Job Information */}
        {/* ================================= */}

        <div className="card shadow-sm border-0 mb-4">

          <div className="card-body">

            <h5 className="border-bottom pb-2 mb-3">
              1. Job Information
            </h5>

            <div className="row">

              {/* Job Title */}
              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Job Title
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* Industry */}
              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Industry
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                />

              </div>


              {/* Country */}
              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Country
                </label>

        <select  className="form-control"
          value={formData.countryId}
          onChange={handleCountryChange}
        >
          <option value="">Select Country</option>

           {countries.map((country) => (
            <option
                key={country.countryId}
                value={country.countryId}
            >
                {country.countryName}
            </option>
        ))}
        </select>
               
              </div>


              {/* City */}
              <div className="col-md-6 mb-3">

                <label className="form-label">
                  City
                </label>

               <select className="form-control"
          value={formData.cityId}
          onChange={handleCityChange}
         
        >
          <option value="">Select City</option>
            {cities.map((city) => (
            <option
                key={city.cityId}
                value={city.cityId}
            >
                {city.cityName}
            </option>
        ))}

        </select>
              </div>


              {/* Visa */}
              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Visa / Work Authorization
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="visaWorkAuthorization"
                  value={
                    formData.visaWorkAuthorization
                  }
                  onChange={handleChange}
                />

              </div>


              {/* Work Setup */}
              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Work Setup
                </label>

                <select
                  className="form-select"
                  name="workSetup"
                  value={formData.workSetup}
                  onChange={handleChange}
                >

                  <option value="">
                    Select
                  </option>

                  <option value="Office / Onsite">
                    Office / Onsite
                  </option>

                  <option value="Hybrid">
                    Hybrid
                  </option>

                  <option value="Remote">
                    Remote
                  </option>

                </select>

              </div>

            </div>

          </div>

        </div>


        {/* ================================= */}
        {/* 2. Job Description */}
        {/* ================================= */}

        <div className="card shadow-sm border-0 mb-4">

          <div className="card-body">

            <h5 className="border-bottom pb-2 mb-3">
              2. Job Description
            </h5>

            <textarea
              className="form-control"
              rows="5"
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
            />

          </div>

        </div>


        {/* ================================= */}
        {/* 3. Qualification */}
        {/* ================================= */}

        <div className="card shadow-sm border-0 mb-4">

          <div className="card-body">

            <h5 className="border-bottom pb-2 mb-3">
              3. Qualification & Experience
            </h5>

            <div className="row">

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Education Qualification
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="educationQualification"
                  value={
                    formData.educationQualification
                  }
                  onChange={handleChange}
                />

              </div>


              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Certification Requirements
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="certificationRequirements"
                  value={
                    formData.certificationRequirements
                  }
                  onChange={handleChange}
                />

              </div>


              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Minimum Experience
                </label>

                <input
                  type="number"
                  className="form-control"
                  name="minimumExperience"
                  value={
                    formData.minimumExperience
                  }
                  onChange={handleChange}
                  min="0"
                />

              </div>


              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Specific Experience
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="specificExperience"
                  value={
                    formData.specificExperience
                  }
                  onChange={handleChange}
                />

              </div>

            </div>

          </div>

        </div>


        {/* ================================= */}
        {/* 4. Budget */}
        {/* ================================= */}

        <div className="card shadow-sm border-0 mb-4">

          <div className="card-body">

            <h5 className="border-bottom pb-2 mb-3">
              4. Budget
            </h5>

            <div className="row">

              <div className="col-md-4 mb-3">

                <label className="form-label">
                  Minimum Budget
                </label>

                <input
                  type="number"
                  className="form-control"
                  name="budgetMin"
                  value={formData.budgetMin}
                  onChange={handleChange}
                />

              </div>


              <div className="col-md-4 mb-3">

                <label className="form-label">
                  Maximum Budget
                </label>

                <input
                  type="number"
                  className="form-control"
                  name="budgetMax"
                  value={formData.budgetMax}
                  onChange={handleChange}
                />

              </div>


              <div className="col-md-4 mb-3">

                <label className="form-label">
                  Currency
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                />

              </div>

            </div>

          </div>

        </div>


        {/* ================================= */}
        {/* 5. Working Hours */}
        {/* ================================= */}

        <div className="card shadow-sm border-0 mb-4">

          <div className="card-body">

            <h5 className="border-bottom pb-2 mb-3">
              5. Working Hours
            </h5>

            <div className="row">

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Office Hours
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="officeHours"
                  value={formData.officeHours}
                  onChange={handleChange}
                  placeholder="Example: 9 AM to 7 PM"
                />

              </div>


              <div className="col-md-6 mb-3">

                <label className="form-label d-block">
                  Shift Based
                </label>

                <div className="form-check form-switch">

                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={formData.shiftBased}
                    onChange={handleShiftChange}
                  />

                  <label className="form-check-label">
                    {formData.shiftBased
                      ? "Yes"
                      : "No"}
                  </label>

                </div>

              </div>


              {formData.shiftBased && (

                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Shift Timing
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="shiftTiming"
                    value={formData.shiftTiming}
                    onChange={handleChange}
                    placeholder="Example: 9 PM - 6 AM"
                  />

                </div>

              )}

            </div>

          </div>

        </div>


        {/* ================================= */}
        {/* 6. Customer Remarks */}
        {/* ================================= */}

        <div className="card shadow-sm border-0 mb-4">

          <div className="card-body">

            <h5 className="border-bottom pb-2 mb-3">
              6. Customer Remarks
            </h5>

            <textarea
              className="form-control"
              rows="4"
              name="customerRemarks"
              value={formData.customerRemarks}
              onChange={handleChange}
            />

          </div>

        </div>


        {/* ================================= */}
        {/* 7. Interview Process */}
        {/* ================================= */}

        <div className="card shadow-sm border-0 mb-4">

          <div className="card-body">

            <div className="d-flex justify-content-between align-items-center mb-3">

              <h5 className="mb-0">
                7. Interview Process
              </h5>

              <button
                type="button"
                className="btn btn-sm btn-outline-primary"
                onClick={addInterviewRound}
              >
                + Add Round
              </button>

            </div>

            <hr />

            {formData.interviewRounds.map(
              (round, index) => (

                <div
                  className="row align-items-end mb-3"
                  key={index}
                >

                  {/* Round Number */}
                  <div className="col-md-2">

                    <label className="form-label">
                      Round
                    </label>

                    <input
                      type="number"
                      className="form-control"
                      value={round.roundNumber}
                      disabled
                    />

                  </div>


                  {/* Interview Method */}
                  <div className="col-md-7">

                    <label className="form-label">
                      Interview Method
                    </label>

                    <select
                      className="form-select"
                      value={
                        round.interviewMethod
                      }
                      onChange={(e) =>
                        handleInterviewChange(
                          index,
                          "interviewMethod",
                          e.target.value
                        )
                      }
                    >

                      <option value="">
                        Select Method
                      </option>

                      <option value="Phone">
                        Phone
                      </option>

                      <option value="Video Call">
                        Video Call
                      </option>

                      <option value="Face to Face">
                        Face to Face
                      </option>

                      <option value="Technical">
                        Technical
                      </option>

                      <option value="HR">
                        HR
                      </option>

                    </select>

                  </div>


                  {/* Remove */}
                  <div className="col-md-3">

                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() =>
                        removeInterviewRound(index)
                      }
                      disabled={
                        formData.interviewRounds
                          .length === 1
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>

              )
            )}

          </div>

        </div>


        {/* ================================= */}
        {/* 8. Client POCs */}
        {/* ================================= */}

        <div className="card shadow-sm border-0 mb-4">

          <div className="card-body">

            <div className="d-flex justify-content-between align-items-center mb-3">

              <h5 className="mb-0">
                8. Client POCs
              </h5>

              <button
                type="button"
                className="btn btn-sm btn-outline-primary"
                onClick={addClientPoc}
              >
                + Add POC
              </button>

            </div>

            <hr />

            {formData.clientPocs.map(
              (poc, index) => (

                <div
                  className="border rounded p-3 mb-3"
                  key={index}
                >

                  <div className="row">

                    {/* Name */}
                    <div className="col-md-4 mb-3">

                      <label className="form-label">
                        POC Name
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        value={
                          poc.clientPocName
                        }
                        onChange={(e) =>
                          handlePocChange(
                            index,
                            "clientPocName",
                            e.target.value
                          )
                        }
                      />

                    </div>


                    {/* Number */}
                    <div className="col-md-4 mb-3">

                      <label className="form-label">
                        Phone Number
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        value={
                          poc.clientPocNumber
                        }
                        onChange={(e) =>
                          handlePocChange(
                            index,
                            "clientPocNumber",
                            e.target.value
                          )
                        }
                      />

                    </div>


                    {/* Email */}
                    <div className="col-md-4 mb-3">

                      <label className="form-label">
                        Email
                      </label>

                      <input
                        type="email"
                        className="form-control"
                        value={
                          poc.clientPocEmail
                        }
                        onChange={(e) =>
                          handlePocChange(
                            index,
                            "clientPocEmail",
                            e.target.value
                          )
                        }
                      />

                    </div>


                    {/* Remove POC */}
                    <div className="col-12">

                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                        onClick={() =>
                          removeClientPoc(index)
                        }
                        disabled={
                          formData.clientPocs
                            .length === 1
                        }
                      >
                        Remove POC
                      </button>

                    </div>

                  </div>

                </div>

              )
            )}

          </div>

        </div>


        {/* ================================= */}
        {/* Success / Error */}
        {/* ================================= */}

        {message && (

          <div className="alert alert-success">
            {message}
          </div>

        )}


        {/* ================================= */}
        {/* Actions */}
        {/* ================================= */}

        <div className="d-flex justify-content-end gap-2 mb-5">

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => window.close()}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
          >

            {loading
              ? "Saving..."
              : "Save Changes"}

          </button>

        </div>

      </form>

    </div>
  );
};

export default JobEdit;