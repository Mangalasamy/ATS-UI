import React, { useEffect, useState } from "react";
import { getCompaniesList } from "../../Services/MasterApi";
import { createUser } from "../../Services/UserService";
import axios from "axios";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    role: "",
    companyId: "",
    isActive: true,
  });

  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [companyLoading, setCompanyLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch companies
  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      setCompanyLoading(true);

   var  response = await  getCompaniesList();
      setCompanies(response || []);
    } catch (error) {
      console.error("Error fetching companies:", error);
      setMessage("Failed to load companies.");
    } finally {
      setCompanyLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const payload = {
        ...formData,
      };

  const response = await createUser(payload);

      console.log("User created:", response.data);

      setMessage("User created successfully.");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        password: "",
        role: "",
        companyId: "",
        isActive: true,
      });
    } catch (error) {
      console.error("Error creating user:", error);

      setMessage(
        error.response?.data?.message ||
          "Failed to create user."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-header">
          <h4>Create User</h4>
        </div>

        <div className="card-body">

          {message && (
            <div className="alert alert-info">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="row">

              {/* First Name */}
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  First Name
                </label>

                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Last Name */}
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Last Name
                </label>

                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Mobile */}
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Mobile Number
                </label>

                <input
                  type="text"
                  name="mobileNumber"
                  className="form-control"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
              </div>

              {/* Password */}
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Role */}
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Role
                </label>

                <select
                  name="role"
                  className="form-select"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Role</option>
                  <option value="Admin">Admin</option>
                  <option value="Recruiter">Recruiter</option>
                  <option value="User">User</option>
                </select>
              </div>

              {/* Company */}
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Company
                </label>

                <select
                  name="companyId"
                  className="form-select"
                  value={formData.companyId}
                  onChange={handleChange}
                  required
                  disabled={companyLoading}
                >
                  <option value="">
                    {companyLoading
                      ? "Loading companies..."
                      : "Select Company"}
                  </option>

                  {companies.map((company) => (
                    <option
                      key={company.primaryId}
                      value={company.primaryId}
                    >
                      {company.companyName}
                    </option>
                  ))}
                </select>
              </div>

              {/* Active */}
              <div className="col-md-6 mb-3 d-flex align-items-end">
                <div className="form-check mb-2">
                  <input
                    type="checkbox"
                    name="isActive"
                    className="form-check-input"
                    checked={formData.isActive}
                    onChange={handleChange}
                  />

                  <label className="form-check-label">
                    Active
                  </label>
                </div>
              </div>

            </div>

            {/* Buttons */}
            <div className="d-flex gap-2">

              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Creating..." : "Create User"}
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() =>
                  setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    mobileNumber: "",
                    password: "",
                    role: "",
                    companyId: "",
                    isActive: true,
                  })
                }
              >
                Reset
              </button>

            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;

