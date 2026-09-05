import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Welcome from "./components/Welcome";

import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Unauthorized from "./pages/Unauthorized";
// import Employees from "./pages/Employees";
import Dashboard from "./pages/Dashboard/Dashboard";
import Candidates from "./pages/Candidates/Candidates";
import CandidateDetails from "./pages/Candidates/CandidateDetails";
import JobPriorityDashboard from "./pages/JobPriorityDashboard/JobPriorityDashboard";
import SourceOperationsDashboard from "./pages/SourcedOperations/SourcedOperationsDashboard";
import SourcedInterview from "./pages/SourcedOperations/SourcedInterview";
import DoodleLabs from "./pages/DoodleLabs/DoodleLabsReview";

//Jobs
import JobForm from "./pages/Jobs/JobForm";
import JobList from "./pages/Jobs/JobList";
import JobDetails from "./pages/Jobs/JobDetails";
import JobEdit from "./pages/Jobs/JobEdit";

//users
import CreateUser from "./pages/Users/CreateUser";

// import Reports from "./pages/Reports";

import "./App.css";

function App() {
    const user = localStorage.getItem("user");
    return (
        <BrowserRouter>
 <div className="app-layout">

            {/* Sidebar */}
             
            {user && <Sidebar />}
            

            {/* Right Side */}
            <div className="main-content">

                {/* Common Welcome Section */}
               
                   {user && <Welcome />}
            
              
                {/* Page Content */}
                 <Routes>
 <Route
          path="/login"
          element={<Login />}
        />
          <Route
                                path="/unauthorized"
                                element={<Unauthorized />}
                            />
        
                            <Route
                                path="/dashboard"
                               element={
            <ProtectedRoute roles={["Admin"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

                            <Route
                                path="/candidates"
                                element={<Candidates />}
                            />

                            <Route
                                path="/candidates/:id"
                                element={<CandidateDetails />}
                            />

                            <Route
                                path="/source-operations"
                                element={<SourceOperationsDashboard />}
                            />

                            <Route
                                path="/source-interview"
                                element={<SourcedInterview />}
                            />

                            <Route
                                path="/job-priority"
                                element={<JobPriorityDashboard />}
                            />

                            <Route
                                path="/doodle-labs"
                                element={<DoodleLabs />}
                            />
                            <Route
                                path="/job-list"
                                element={<JobList />}
                            />
                            <Route
                                path="/jobs/:id"
                                element={<JobDetails />}
                            />
                            <Route
          path="/jobs/:jobId/edit"
          element={<JobEdit />}
        />

                            <Route
                                path="/job-form"
                                element={<JobForm />}
                            />
                             <Route
                                path="/create-user"
                                element={<CreateUser />}
                            />

                            {/* <Route
                                path="/employees"
                                element={<Employees />}
                            />

                            <Route
                                path="/reports"
                                element={<Reports />}
                            /> */}

                        </Routes>
            </div>

        </div>
           

        </BrowserRouter>
    );
}

export default App;