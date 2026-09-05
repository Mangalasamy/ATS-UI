import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Auth/AuthApi";
import { saveAuth } from "../Auth/auth";

function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");

    setLoading(true);

    try {

      const response =
        await loginUser(
          form.username,
          form.password
        );

      saveAuth(response.data);

       window.location.href = "/dashboard";
    } catch (error) {

      setError(
        error.response?.data?.message ||
        "Invalid username or password."
      );

    } finally {

      setLoading(false);
    }
  };


  return (
    <div className="container" style={{ marginTop: "100px" }}>

      <div className="row"  style={{ paddingLeft: "220px" }}>

        <div className="col-md-5">

          <div className="card shadow">

            <div className="card-body">

              <h3 className="mb-4">
                ATS Login
              </h3>

              {error && (
                <div className="alert alert-danger">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>

                <div className="mb-3">

                  <label className="form-label">
                    Username
                  </label>

                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    value={form.username}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="mb-3">

                  <label className="form-label">
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />

                </div>


                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={loading}
                >
                  {loading
                    ? "Logging in..."
                    : "Login"}
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;