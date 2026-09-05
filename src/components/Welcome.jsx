import { getUser, logout } from "../Auth/auth";
import profileImage from "../images/profile.jpg";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
 const navigate = useNavigate();

  const user = getUser();


  const handleLogout = () => {

    logout();

   window.location.href = "/login";
  };

    return (
         <div className="row g-4 mb-4 welcome-section" >

            <div className="col-md-8"  >

                <h5>
                    Welcome back 👋
                </h5>

            </div>
            <div className="col-md-4" style={{display: 'flex',textAlign: 'left'}}>

                <div className="welcome-profile">

                <img
                    src={profileImage}
                    alt="Profile"
                    className="profile-image"
                />

                <div className="welcome-content">
                    <h5> Welcome, {user?.firstName} {user?.lastName}</h5>
                    <h5>{user?.roles?.join(", ")}</h5> 
                      <button
            className="btn btn-danger"
            onClick={handleLogout}
          >
            Logout
          </button>
                </div>

            </div>

            </div>

        </div>
    );
};

export default Welcome;