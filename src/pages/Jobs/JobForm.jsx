import React, { useState,useEffect } from "react";
import { getCountries,getCitiesByCountryId} from "../../Services/MasterApi";
const JobForm = () => {
  const [countries, setCountries] = useState([]);
const [cities, setCities] = useState([]);
   const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    jobDescription: "",
    jobTitle: "",
    country: 0,
    city: 0,
    visaWorkAuthorization: "",
    educationQualification: "",
    certificationRequirements: "",
    minimumExperience: "",
    specificExperience: "",
    industry: "",
    budgetMin: 0,
    budgetMax: 0,
    currency: "",
    customerRemarks: "",
    workSetup: "",
   interviewRounds: [
    {
      roundNumber: 1,
      interviewMethod: ""
    }
  ],
    officeHours: "",
    shiftBased: false,
    shiftTiming: "",
    clientPocs: [
  {
    clientPocName: "",
    clientPocNumber: "",
    clientPocEmail: ""
  }
],
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
    useEffect(() => {
        loadCountries();
    }, []);

    const loadCountries = async () => {
        try {
            const data = await getCountries();
            setCountries(data);
        } catch (error) {
            console.error("Error fetching countries:", error);
        }
    };
        useEffect(() => {
        if (!formData.country) {
            setCities([]);
            return;
        }

        loadCities(formData.country);
    }, [formData.country]);

    const loadCities = async (countryId) => {
        try {
            const data = await getCitiesByCountryId(countryId);

            setCities(data);

            // Reset selected city when country changes
            setFormData((previous) => ({
                ...previous,
                city: ""
            }));

        } catch (error) {
            console.error("Error fetching cities:", error);
            setCities([]);
        }
    };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
var data='{"jobDescription":"Good job","jobTitle":"Good job","country":"1","city":"1","visaWorkAuthorization":"PR","educationQualification":"B.E","certificationRequirements":"test","minimumExperience":"3","specificExperience":"test","industry":"Telecom","budgetMin":"2000","budgetMax":"5000","currency":"INR","customerRemarks":"tets","workSetup":"Office / Onsite","interviewRounds":[{"roundNumber":1,"interviewMethod":"Phone"},{"roundNumber":2,"interviewMethod":"Video Call"}],"officeHours":"9 AM to 7 PM","shiftBased":false,"shiftTiming":"","clientPocs":[{"clientPocName":"person1","clientPocNumber":"7473478","clientPocEmail":"person@gmail.com"},{"clientPocName":"Person2","clientPocNumber":"234234234","clientPocEmail":"person2@gmail.com"}]}';
    setLoading(true);
    setMessage("");

    // console.log(formData);

    try {
        const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/jobs`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
 if (response.status !== 200 ) {
        throw new Error("Failed to create job");
      }

      const result = await response.data;

     setMessage("Job created successfully!");

      // Reset form
      setFormData({
        jobDescription: "",
        jobTitle: "",
        country: 0,
        city: 0,
        visaWorkAuthorization: "",
        educationQualification: "",
        certificationRequirements: "",
        minimumExperience: "",
        specificExperience: "",
        industry: "",
        budgetMin: 0,
        budgetMax: 0,
        currency: "",
        customerRemarks: "",
        workSetup: "",
       interviewRounds: [
    {
      roundNumber: 1,
      interviewMethod: ""
    }
  ],
        officeHours: "",
        shiftBased: false,
        shiftTiming: "",
        clientPocs: [
  {
    clientPocName: "",
    clientPocNumber: "",
    clientPocEmail: ""
  }]
      });

    } catch (error) {
      console.error(error);
      setMessage("Failed to create job. Please try again.");
    } finally {
      setLoading(false);
    }
  };
const handleClientPocChange = (index, e) => {
  const { name, value } = e.target;

  setFormData((prev) => {
    const updatedPocs = [...prev.clientPocs];

    updatedPocs[index] = {
      ...updatedPocs[index],
      [name]: value,
    };

    return {
      ...prev,
      clientPocs: updatedPocs,
    };
  });
};

const addClientPoc = () => {
  setFormData((prev) => ({
    ...prev,
    clientPocs: [
      ...prev.clientPocs,
      {
        clientPocName: "",
        clientPocNumber: "",
        clientPocEmail: "",
      },
    ],
  }));
};

const removeClientPoc = (index) => {
  setFormData((prev) => ({
    ...prev,
    clientPocs: prev.clientPocs.filter(
      (_, i) => i !== index
    ),
  }));
};
const handleInterviewRoundsChange = (e) => {
  const count = Math.max(1, Number(e.target.value));

  setFormData((prev) => {
    const rounds = Array.from(
      { length: count },
      (_, index) => ({
        roundNumber: index + 1,
        interviewMethod:
          prev.interviewRounds[index]?.interviewMethod || ""
      })
    );

    return {
      ...prev,
      interviewRounds: rounds
    };
  });
};
const handleInterviewMethodChange = (index, value) => {
  setFormData((prev) => ({
    ...prev,
    interviewRounds: prev.interviewRounds.map(
      (round, i) =>
        i === index
          ? {
              ...round,
              interviewMethod: value
            }
          : round
    )
  }));
};
  return (
    <div className="container py-4">

      <div className="card shadow-sm">

        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Create Job</h4>
        </div>

        <div className="card-body">

          {message && (
            <div className="alert alert-info">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            {/* Job Information */}
            <h5 className="border-bottom pb-2 mb-3">
              1. Job Information
            </h5>
  <div className="mb-3">
              <label className="form-label">
                Job Title <span className="text-danger">*</span>
              </label>

              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter job title"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Job Description <span className="text-danger">*</span>
              </label>

              <textarea
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleChange}
                className="form-control"
                rows="8"
                placeholder="Paste the complete Job Description here..."
                required
              />
            </div>

          
            {/* Location */}
            <h5 className="border-bottom pb-2 mb-3 mt-4">
              2. Job Location
            </h5>

            <div className="row">

              <div className="col-md-6 mb-3">
                <label className="form-label">Country</label>

                 <select
        className="form-select"
        name="country"
        value={formData.country}
        onChange={(e) =>
            setFormData({
                ...formData,
                country: e.target.value
            })
        }
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

              <div className="col-md-6 mb-3">
                <label className="form-label">City</label>

                <select
        className="form-select"
        name="city"
        value={formData.city}
        onChange={(e) =>
            setFormData({
                ...formData,
                city: e.target.value
            })
        }
        disabled={!formData.country}
    >
        <option value="">
            {formData.country
                ? "Select City"
                : "Select Country First"}
        </option>

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

            </div>

            {/* Visa */}
            <h5 className="border-bottom pb-2 mb-3 mt-4">
              3. Visa / Work Authorization
            </h5>

            <div className="mb-3">
              <label className="form-label">
                Visa / Work Authorization Requirements
              </label>

              <select
                name="visaWorkAuthorization"
                value={formData.visaWorkAuthorization}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select Requirement</option>
                <option value="Citizen">Citizen</option>
                <option value="PR">PR</option>
                <option value="EP">EP</option>
                <option value="S Pass">S Pass</option>
                <option value="Work Permit">Work Permit</option>
                <option value="Any">Any</option>
              </select>
            </div>

            {/* Education */}
            <h5 className="border-bottom pb-2 mb-3 mt-4">
              4. Education Requirements
            </h5>

            <div className="row">

              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Required Qualification
                </label>

                <input
                  type="text"
                  name="educationQualification"
                  value={formData.educationQualification}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="e.g. Bachelor's Degree"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Certification Requirements
                </label>

                <input
                  type="text"
                  name="certificationRequirements"
                  value={formData.certificationRequirements}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="e.g. AWS Certified"
                />
              </div>

            </div>

            {/* Experience */}
            <h5 className="border-bottom pb-2 mb-3 mt-4">
              5. Relevant Experience
            </h5>

            <div className="row">

              <div className="col-md-4 mb-3">
                <label className="form-label">
                  Minimum Years of Experience
                </label>

                <input
                  type="number"
                  min="0"
                  name="minimumExperience"
                  value={formData.minimumExperience}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="e.g. 5"
                />
              </div>

              <div className="col-md-8 mb-3">
                <label className="form-label">
                  Specific Experience Required
                </label>

                <input
                  type="text"
                  name="specificExperience"
                  value={formData.specificExperience}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="e.g. React, .NET, Azure"
                />
              </div>

            </div>

            {/* Industry */}
            <h5 className="border-bottom pb-2 mb-3 mt-4">
              6. Industry
            </h5>

            <div className="mb-3">

              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select Industry</option>
                <option value="IT">Information Technology</option>
                <option value="Banking">Banking & Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Retail">Retail</option>
                <option value="Telecom">Telecommunications</option>
                <option value="Automotive">Automotive</option>
                <option value="Others">Others</option>
              </select>

            </div>

            {/* Budget */}
            <h5 className="border-bottom pb-2 mb-3 mt-4">
              7. Budget / Salary Range
            </h5>

            <div className="row">

              <div className="col-md-4 mb-3">
                <label className="form-label">Minimum Salary</label>

                <input
                  type="number"
                  name="budgetMin"
                  value={formData.budgetMin}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Minimum"
                />
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Maximum Salary</label>

                <input
                  type="number"
                  name="budgetMax"
                  value={formData.budgetMax}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Maximum"
                />
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Currency</label>

                <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Select Currency</option>
                  <option value="INR">INR</option>
                  <option value="USD">USD</option>
                  <option value="SGD">SGD</option>
                  <option value="GBP">GBP</option>
                  <option value="AUD">AUD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>

            </div>

            {/* Customer Remarks */}
            <h5 className="border-bottom pb-2 mb-3 mt-4">
              8. Customer Remarks
            </h5>

            <div className="mb-3">
              <textarea
                name="customerRemarks"
                value={formData.customerRemarks}
                onChange={handleChange}
                className="form-control"
                rows="5"
                placeholder="Enter additional information, preferences or hiring instructions..."
              />
            </div>

            {/* Work Setup */}
            <h5 className="border-bottom pb-2 mb-3 mt-4">
              9. Work Setup
            </h5>

            <div className="mb-3">

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="workSetup"
                  value="Office / Onsite"
                  checked={formData.workSetup === "Office / Onsite"}
                  onChange={handleChange}
                />

                <label className="form-check-label">
                  Office / Onsite
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="workSetup"
                  value="Hybrid"
                  checked={formData.workSetup === "Hybrid"}
                  onChange={handleChange}
                />

                <label className="form-check-label">
                  Hybrid
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="workSetup"
                  value="Remote"
                  checked={formData.workSetup === "Remote"}
                  onChange={handleChange}
                />

                <label className="form-check-label">
                  Remote
                </label>
              </div>

            </div>

            {/* Interview Process */}
<h5 className="border-bottom pb-2 mb-3 mt-4">
  10. Interview Process
</h5>

<div className="row">

  {/* Number of Interview Rounds */}
  <div className="col-md-4 mb-3">
    <label className="form-label">
      Number of Interview Rounds
    </label>

    <input
      type="number"
      min="1"
      name="interviewRounds"
      value={formData.interviewRounds.length}
      onChange={handleInterviewRoundsChange}
      className="form-control"
    />
  </div>

  {/* Interview Methods */}
  <div className="col-md-8">
    <div className="row">

      {formData.interviewRounds.map((round, index) => (
        <div
          className="col-md-4 mb-3"
          key={round.roundNumber}
        >
          <label className="form-label">
            Interview Method {round.roundNumber}
          </label>

          <select
            className="form-select"
            value={round.interviewMethod}
            onChange={(e) =>
              handleInterviewMethodChange(
                index,
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

            <option value="In Person">
              In Person
            </option>

            <option value="Online Test">
              Online Test
            </option>
          </select>
        </div>
      ))}

    </div>
  </div>

</div>
            {/* Office Timing */}
            <h5 className="border-bottom pb-2 mb-3 mt-4">
              11. Office Timings
            </h5>

            <div className="row">

              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Standard Office Hours
                </label>

                <input
                  type="text"
                  name="officeHours"
                  value={formData.officeHours}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="e.g. 9:00 AM - 6:00 PM"
                />
              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label d-block">
                  Shift Based Requirement
                </label>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="shiftBased"
                    checked={formData.shiftBased}
                    onChange={handleChange}
                  />

                  <label className="form-check-label">
                    Shift-based requirement
                  </label>
                </div>

              </div>

            </div>

            {formData.shiftBased && (
              <div className="mb-3">

                <label className="form-label">
                  Shift Timing
                </label>

                <input
                  type="text"
                  name="shiftTiming"
                  value={formData.shiftTiming}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="e.g. 6:00 PM - 3:00 AM"
                />

              </div>
            )}

            {/* Client POC */}
          {/* Client POC */}
<h5 className="border-bottom pb-2 mb-3 mt-4">
  12. Client POC Information
</h5>

{formData.clientPocs.map((poc, index) => (
  <div key={index} className="mb-4">

    {/* POC heading */}
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h6 className="mb-0">
        Client POC {index + 1}
      </h6>

      {formData.clientPocs.length > 1 && (
        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={() => removeClientPoc(index)}
        >
          Remove
        </button>
      )}
    </div>

    <div className="row">

      {/* Client POC Name */}
      <div className="col-md-4 mb-3">
        <label className="form-label">
          Client POC Name{" "}
          <span className="text-danger">*</span>
        </label>

        <input
          type="text"
          name="clientPocName"
          value={poc.clientPocName}
          onChange={(e) => handleClientPocChange(index, e)}
          className="form-control"
          placeholder="Enter client POC name"
          required
        />
      </div>

      {/* Client POC Phone */}
      <div className="col-md-4 mb-3">
        <label className="form-label">
          Client POC Phone Number
        </label>

        <input
          type="tel"
          name="clientPocNumber"
          value={poc.clientPocNumber}
          onChange={(e) => handleClientPocChange(index, e)}
          className="form-control"
          placeholder="Enter client POC phone number"
        />
      </div>

      {/* Client POC Email */}
      <div className="col-md-4 mb-3">
        <label className="form-label">
          Client POC Email Address{" "}
          <span className="text-danger">*</span>
        </label>

        <input
          type="email"
          name="clientPocEmail"
          value={poc.clientPocEmail}
          onChange={(e) => handleClientPocChange(index, e)}
          className="form-control"
          placeholder="name@example.com"
          required
        />
      </div>

    </div>
  </div>
))}

{/* Add POC button */}
<div className="mb-3">
  <button
    type="button"
    className="btn btn-outline-primary"
    onClick={addClientPoc}
  >
    + Add Client POC
  </button>
</div>
            {/* Buttons */}
            <div className="d-flex justify-content-end gap-2 mt-4">

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() =>
                  setFormData({
                    jobDescription: "",
                    jobTitle: "",
                    country: 0,
                    city: 0,
                    visaWorkAuthorization: "",
                    educationQualification: "",
                    certificationRequirements: "",
                    minimumExperience: "",
                    specificExperience: "",
                    industry: "",
                    budgetMin: 0,
                    budgetMax: 0,
                    currency: "",
                    customerRemarks: "",
                    workSetup: "",
                  interviewRounds: [
    {
      roundNumber: 1,
      interviewMethod: ""
    }
  ],
                    officeHours: "",
                    shiftBased: false,
                    shiftTiming: "",
                   clientPocs: [
  {
    clientPocName: "",
    clientPocNumber: "",
    clientPocEmail: ""
  }]
                  })
                }
              >
                Clear
              </button>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Saving..." : "Create Job"}
              </button>

            </div>

          </form>

        </div>
      </div>

    </div>
  );
};

export default JobForm;