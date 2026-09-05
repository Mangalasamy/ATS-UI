import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="sidebar">

            <div className="logo">
                ATS
            </div>

            <ul className="nav flex-column">

                <li className="nav-item">
                    <NavLink
                        to="/dashboard"
                        className="nav-link"
                    >
                        <span>🏠</span>
                        <span>Dashboard</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink
                        to="/candidates"
                        className="nav-link"
                    >
                        <span>👥</span>
                        <span>Candidates</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink
                        to="/resume"
                        className="nav-link"
                    >
                        <span>📄</span>
                        <span>Resume</span>
                    </NavLink>
                </li>
 <li className="nav-item">
                    <NavLink
                        to="/source-operations"
                        className="nav-link"
                    >
                        <span>👨‍💼</span>
                        <span>Source Operations</span>
                    </NavLink>
                </li>

<li className="nav-item">
                    <NavLink
                        to="/source-interview"
                        className="nav-link"
                    >
                        <span>👨‍💼</span>
                        <span>Source Interview</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/job-priority"
                        className="nav-link"
                    >
                        <span>🎯</span>
                        <span>Job Priority</span>
                    </NavLink>
                </li>
                  <li className="nav-item">
                    <NavLink
                        to="/doodle-labs"
                        className="nav-link"
                    >
                        <span><i className="bi bi-beaker" style={{ color: "#4CAF50"}}></i></span>
                        <span>Doodle Labs</span>
                    </NavLink>
                </li>
<li className="nav-item">
                    <NavLink
                        to="/employees"
                        className="nav-link"
                    >
                        <span>👨‍💼</span>
                        <span>Employees</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/reports"
                        className="nav-link"
                    >
                        <span>📊</span>
                        <span>Reports</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink
                        to="/settings"
                        className="nav-link"
                    >
                        <span>⚙️</span>
                        <span>Settings</span>
                    </NavLink>
                </li>

            </ul>

        </aside>
    );
};

export default Sidebar;